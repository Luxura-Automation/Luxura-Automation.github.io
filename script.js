// Tooltip
function showTooltip(text) {
    var tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = text;
    tooltip.style.display = 'block';
    document.onmousemove = function (e) {
        tooltip.style.left = (e.pageX + 10) + 'px';
        tooltip.style.top = (e.pageY + 10) + 'px';
    }
}

function hideTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// Modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
