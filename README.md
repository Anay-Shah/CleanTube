# Minimalist YouTube Chrome Extension

A Chrome extension that removes visual clutter from YouTube, providing a clean and focused viewing experience.

## Features

- **Homepage Cleanup**: Hide Shorts shelf, remove homepage recommendations (keep subscriptions), hide sidebar suggestions
- **Video Page Cleanup**: Hide suggested videos sidebar, hide end-screen suggestions, hide comments section
- **Simple Toggle UI**: Extension popup with on/off switches for each feature
- **Settings Persistence**: Preferences saved via chrome.storage.local

## Installation

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `minimalist-youtube` folder
5. The extension will be loaded and ready to use

## Usage

1. Visit YouTube - the page loads normally by default
2. Click the extension icon in the toolbar to open the popup
3. Toggle the features you want to enable/disable:
   - Hide Shorts
   - Hide Homepage Recommendations
   - Hide Sidebar Suggestions
   - Hide Comments
   - Hide End-screen Suggestions
4. Settings are saved automatically and persist across sessions

## Technical Details

- **Manifest Version**: V3
- **Permissions**: storage, activeTab
- **Host Permissions**: *://*.youtube.com/*
- **Content Script**: Injects CSS conditionally based on user preferences
- **Storage**: chrome.storage.local for settings persistence

## File Structure

```
minimalist-youtube/
├── manifest.json      # Extension configuration
├── content.js         # Main content script
├── popup.html         # Extension popup UI
├── popup.js           # Popup interaction logic
├── styles.css         # CSS rules for hiding elements
└── icons/             # Extension icons (16x16, 48x48, 128x128)
```

## Development

To modify the extension:
1. Make changes to the source files
2. Reload the extension in `chrome://extensions/`
3. Test on YouTube
