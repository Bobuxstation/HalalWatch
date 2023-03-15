// Load haramlist from localStorage or create an empty object
var haramlist = JSON.parse(localStorage.getItem("haramlist")) || {};

// Add existing data to the table
for (var name in haramlist) {
    var value = haramlist[name];
    addRow(name, value);
}

document.getElementById('addRow').addEventListener("click", function() {
    var name = document.getElementById('title').value
    var value = document.getElementById('background-audio').value

    // Add data to object
    haramlist[name] = value;

    // Add row to table
    addRow(name, value);

    // Save updated data to localStorage
    saveData();
});

function addRow(name, value) {
    // Add row to table
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var valueCell = row.insertCell(1);
    var deleteCell = row.insertCell(2);
    nameCell.innerHTML = name;
    valueCell.innerHTML = value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);

        delete haramlist[name];
        saveData();
    });
    deleteCell.appendChild(deleteButton);
    saveData()
}

function saveData() {
    // Convert data object to JSON
    var jsonData = JSON.stringify(haramlist);

    // Save JSON data to localStorage
    localStorage.setItem("haramlist", jsonData);
}