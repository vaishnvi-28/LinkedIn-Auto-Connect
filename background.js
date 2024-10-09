// Listener to inject content script when LinkedIn network page is opened
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes('https://www.linkedin.com/mynetwork/grow/') && changeInfo.status === 'complete') {
      // Inject the content script when LinkedIn network page loads
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['contentScript.js']
      });
    }
  });
  