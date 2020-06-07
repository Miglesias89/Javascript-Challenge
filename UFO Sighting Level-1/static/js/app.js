// Assign the data from 'data.js' to a descriptie variable
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log UFO sighting from data.js
console.log(data);

// Loop through 'data'; append 1 row per UFO sighting; Use Object.entries to console.log 
// each UFO sighting value; append the cell to the row for each UFO sighting; append
// a cell to the row for each value. 

data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers for clicking button or pressing enter
button.on("click", function() {

    // Create the function to run for both events
    d3.select("tbody").html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element 
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    var filteredData = tableData.filter(record => record.datetime === inputValue);

    console.log(filteredData);

    //Display the filtered dataset in results
    filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key,value]) => {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });

    });
    
});
