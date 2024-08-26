function generateIndexList() {
    let content = document.getElementById("index_content");
    content.innerHTML = "";
    var pages = tipuesearch.pages;
    pages.sort((a,b) => { 
        if (a.title < b.title) 
            return -1; 
        if (a.title > b.title) 
            return 1; 
        return 0; 
    });

    for (let i = 0; i < pages.length; i++) {
        let urltag = pages[i];
        let loc = urltag.url;
        let title = urltag.title ? urltag.title : urltag.url;

        let div = document.createElement("div");

        let a = document.createElement("a");
        a.href = loc;
        a.textContent = title;
        div.appendChild(a);

        if (pages[i].pageTitle) {
            let span = document.createElement("span");
            span.innerText = pages[i].pageTitle;
            span.classList.add("index-page-title")
            div.appendChild(span);
        }

        content.appendChild(div);
    }
    let input = document.getElementById("tipue_search_input");
    if (input.value != "") {
        searchText(input);
    }
}

window.addEventListener("load", (ev) => {
    generateIndexList();
    let input = document.getElementById("tipue_search_input");
    input.addEventListener("keyup", (ev) => {
        searchText(input);
    });
    input.addEventListener("change", (ev) => {
        searchText(input);
    });
});

/*
 * Փնտրում է տեքստը api index էջում, և չհամապատասխանող հղուները դարձնում է անտեսանելի։
 *
 * Անտեսանելի է դարձնում նաև այն դեպքերը, երբ տեքտը գտել է տիպի անվան մեջ, այլ ոչ թե հատկության անվան մեջ։
 * Օրինակ՝ input == "Doc", ապա "AsDoc/Caption"-ը կդառնա անտեսանելի։
 */
function searchText(input) {
    let content = document.getElementById("index_content");
    let searchText = input.value.toLowerCase();
    console.log(searchText);
    let anchorArr = content.getElementsByTagName("a");
    for (let i = 0; i < anchorArr.length; i++) {
        let anchorText = anchorArr[i].textContent.toLowerCase();
        let foundIndex = anchorText.lastIndexOf(searchText);
        if (foundIndex >= 0) {
            let slashIndex = anchorText.indexOf("/"); //տիպի հատկությունից տարանջատման նիշ
            if (foundIndex > slashIndex) {
                anchorArr[i].parentElement.style.display = "";
            } else {
                anchorArr[i].parentElement.style.display = "none";
            }
        } else {
            anchorArr[i].parentElement.style.display = "none";
        }
    }
}
