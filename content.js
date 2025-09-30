async function applySettings() {
  const settings = await chrome.storage.local.get(['hideShorts', 'hideSuggestions', 'hideComments', 'hideSidebar', 'hideHomeFeed']);

  // Set defaults if not set
  settings.hideShorts = settings.hideShorts !== undefined ? settings.hideShorts : false;
  settings.hideHomeFeed = settings.hideHomeFeed !== undefined ? settings.hideHomeFeed : false;
  settings.hideSuggestions = settings.hideSuggestions !== undefined ? settings.hideSuggestions : false;
  settings.hideComments = settings.hideComments !== undefined ? settings.hideComments : false;
  settings.hideSidebar = settings.hideSidebar !== undefined ? settings.hideSidebar : false;

  // Apply classes to body
  document.body.classList.toggle('hide-shorts', settings.hideShorts);
  document.body.classList.toggle('hide-home-feed', settings.hideHomeFeed);
  document.body.classList.toggle('hide-sidebar', settings.hideSidebar);
  document.body.classList.toggle('hide-comments', settings.hideComments);
  document.body.classList.toggle('hide-suggestions', settings.hideSuggestions);
}

// Apply settings on page load
if (document.body) {
  applySettings();
} else {
  document.addEventListener('DOMContentLoaded', applySettings);
}

// Listen for storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    applySettings();
  }
});