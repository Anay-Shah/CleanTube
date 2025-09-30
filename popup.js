// Load settings and set checkboxes
async function loadSettings() {
  const settings = await chrome.storage.local.get(['hideShorts', 'hideHomeFeed', 'hideSuggestions', 'hideComments', 'hideSidebar']);
  document.getElementById('hideShorts').checked = settings.hideShorts ?? false;
  document.getElementById('hideHomeFeed').checked = settings.hideHomeFeed ?? false;
  document.getElementById('hideSuggestions').checked = settings.hideSuggestions ?? false;
  document.getElementById('hideComments').checked = settings.hideComments ?? false;
  document.getElementById('hideSidebar').checked = settings.hideSidebar ?? false;
}

// Save settings when checkbox changes
function saveSettings() {
  const settings = {
    hideShorts: document.getElementById('hideShorts').checked,
    hideHomeFeed: document.getElementById('hideHomeFeed').checked,
    hideSuggestions: document.getElementById('hideSuggestions').checked,
    hideComments: document.getElementById('hideComments').checked,
    hideSidebar: document.getElementById('hideSidebar').checked
  };
  chrome.storage.local.set(settings);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', loadSettings);
document.getElementById('hideShorts').addEventListener('change', saveSettings);
document.getElementById('hideHomeFeed').addEventListener('change', saveSettings);
document.getElementById('hideSuggestions').addEventListener('change', saveSettings);
document.getElementById('hideComments').addEventListener('change', saveSettings);
document.getElementById('hideSidebar').addEventListener('change', saveSettings);