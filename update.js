window.onload = function() {
    var footerYear = document.getElementById('footer-year');
    var currentYear = " " + new Date().getFullYear() + " ";
    footerYear.textContent = currentYear;
};