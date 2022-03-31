/* eslint-disable no-undef */

chrome.runtime.sendMessage('From the content script !', (response) => {
  console.log(response)
})
