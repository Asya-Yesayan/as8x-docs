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
        const productList = el.getAttribute('data-product');
        const productExclude = el.getAttribute('data-product-exclude');

        const exactVersions = el.getAttribute('data-version');
        const min = el.getAttribute('data-version-min');
        const max = el.getAttribute('data-version-max');
        const excludeVersions = el.getAttribute('data-version-exclude');

        let productMatch = true;

        if (productId) {
            productMatch = (productId === selectedProductId);
        }

        if (productList) {
            const allowed = productList.split(',').map(v => v.trim());
            productMatch = allowed.includes(selectedProductId);
        }

        // 3) Exclude specific products
        if (productExclude) {
            const excluded = productExclude.split(',').map(v => v.trim());
            if (excluded.includes(selectedProductId)) {
                productMatch = false;
            }
        }

        let versionMatch = false;

        if (excludeVersions) {
            const excluded = excludeVersions.split(',').map(v => v.trim());
            versionMatch = !excluded.includes(selectedVersion);
        } else if (exactVersions) {
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

    let selected = localStorage.getItem('selectedVersion');

    if (!selected || !dropdown.querySelector(`option[value="${selected}"]`)) {
        selected = dropdown.options[0]?.value;
    }

    if (selected) {
        dropdown.value = selected;
        selectVersion(selected);
    }
});