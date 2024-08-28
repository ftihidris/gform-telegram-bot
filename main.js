function onFormSubmit() {
  // Open the spreadsheet and select the appropriate sheets
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("you_sheet_name"); // Replace with your actual sheet name

  // Get the last row with data
  var lastRow = sheet.getLastRow();

  // Get the values from the last row (columns B and C)
  var confessionText = sheet.getRange(lastRow, 2).getValue(); // Column B


  // Check if either "Your confession" or "Share photo" is filled
  if (confessionText){
    // Replace with your Telegram channel chat ID and bot token
     var chatId = "your_chat_id"; // Replace with your Telegram chat ID
     var token = "your_token"; // Replace with your Telegram Bot API token
    
    // Construct the message based on user input
    var message = "";
    if (confessionText) {
      message += confessionText + "\n";
    }
    
    // Send the message to Telegram
    var telegramUrl = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message);
    UrlFetchApp.fetch(telegramUrl);
  }
}
