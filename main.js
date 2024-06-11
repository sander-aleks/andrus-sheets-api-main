var sheetURL = 'https://docs.google.com/spreadsheets/d/1UjhvvaczncVeqPKAYm38DbtVEFEeyxY-l1u6niRM1E0/edit#gid=0';
var sheetID = extractSheetID(sheetURL);
var range = 'Sheet1!1:2'; // Specify the range of cells you want to retrieve

// Use your API key in the request URL
var apiKey = '1UjhvvaczncVeqPKAYm38DbtVEFEeyxY-l1u6niRM1E0';
var requestURL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    // Process the data and display it on the HTML page
    var sheetDataList = document.getElementById('sheet-data');
    data.values.forEach(row => {
      var listItem = document.createElement('li');
      listItem.textContent = row.join(' | '); // Join the array elements with a separator
      sheetDataList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data from Google Sheet:', error));
