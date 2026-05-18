chrome.runtime.onInstalled.addListener(() => {
    // This line is the magic key that unlocks session storage for your popup
    chrome.storage.session.setAccessLevel({ accessLevel: 'TRUSTED_AND_UNTRUSTED_CONTEXTS' });
});