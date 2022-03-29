chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('~ msg', msg)
  console.log('~ sender', sender)
  sendResponse("From the background script")

})