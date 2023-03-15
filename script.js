var haramlist = JSON.parse(localStorage.getItem("haramlist")) || {};

function aboutTab() {
    var x = document.getElementById("about");
    if (x.style.display === "none") {
        document.getElementById('mainpage').style.display = 'none';
        document.getElementById('about').style.display = 'block';
    } else {
        document.getElementById('mainpage').style.display = 'block';
        document.getElementById('about').style.display = 'none';
    }
}

function reportWindow() {
    window.open('reporter.html')
}

document.getElementById('aboutBTN1').addEventListener("click", aboutTab);
document.getElementById('aboutBTN2').addEventListener("click", aboutTab);
document.getElementById('reportbtn').addEventListener("click", reportWindow);

chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function (tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];

    if (tab.url in haramlist) {
        document.getElementById('halalclass').innerText = haramlist[tab.url]
        document.getElementById('title').innerHTML = "HalalWatch Status: " + haramlist[tab.url]
    } else {
        document.getElementById('halalclass').innerText = "Unmoderated"
        document.getElementById('title').innerHTML = "Unmoderated"
    }
});