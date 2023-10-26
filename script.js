function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Form Example')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function processData(formData) {
  // Extract data from the form
  var firstName = formData.firstName;
  var middleName = formData.middleName;
  var lastName = formData.lastName;
  var age = formData.age;
  var caseType = formData.case;
  var status = formData.status;

  // Get the Google Sheet by its ID (you can find the ID in the URL)
  var sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEET_ID').getSheetByName('FormData');

  // Append data to the sheet
  sheet.appendRow([firstName, middleName, lastName, age, caseType, status]);
}

