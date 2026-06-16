chrome.runtime.onInstalled.addListener(() => {
    //Gets session storage permissions
    chrome.storage.session.setAccessLevel({ accessLevel: 'TRUSTED_AND_UNTRUSTED_CONTEXTS' });
});

