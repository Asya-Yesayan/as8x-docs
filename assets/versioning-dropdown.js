// assets/versioning-dropdown.js
function versionCompare(v1, v2) {
    return v1.localeCompare(v2, undefined, { numeric: true });
}

function selectVersion(fullValue) {
    localStorage.setItem('selectedVersion', fullValue);
    showVersionBlocks(fullValue);
}

function showVersionBlocks(fullValue) {
    const [selectedProductId, selectedVersion] = fullValue.split('|');

    document.querySelectorAll('.version-block').forEach(el => {
        const productId = el.getAttribute('data-product-id');
        const exactVersions = el.getAttribute('data-version');
        const min = el.getAttribute('data-version-min');
        const max = el.getAttribute('data-version-max');

        const productMatch = !productId || productId === selectedProductId;

        let versionMatch = false;

        if (exactVersions) {
            const versions = exactVersions.split(',').map(v => v.trim());
            versionMatch = versions.includes(selectedVersion);
        } else {
            const aboveMin = min ? versionCompare(selectedVersion, min) >= 0 : true;
            const belowMax = max ? versionCompare(selectedVersion, max) <= 0 : true;
            versionMatch = aboveMin && belowMax;
        }

        el.style.display = (productMatch && versionMatch) ? "" : "none";
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('version-selector');

    if (!dropdown) {
        console.warn("Versioning dropdown element (#version-selector) not found on the page. Script cannot initialize.");
        return;
    }

    let selected = localStorage.getItem('selectedVersion');

    if (!selected || !dropdown.querySelector(`option[value="${selected}"]`)) {
        selected = dropdown.options[0]?.value;
        if (!selected) {
            console.warn("No valid options found in the versioning dropdown. Initialization halted.");
            return;
        }
    }

    if (selected) {
        dropdown.value = selected;
        selectVersion(selected);
    }
});