***

# Password Manager Chrome Extension

## Overview
Password Manager is a clean and compact Chrome browser extension built with React, Vite, and Tailwind CSS. It allows users to securely save and manage their passwords in an encrypted vault. The extension utilizes a Master Password system that secures your vault using PBKDF2 hashing, ensuring your data remains protected locally.

### Features
- **Master Password Protection**: Secure your entire vault with a single, highly-secure master password.
- **Local Vault**: Store website domains, usernames, and passwords directly in your browser using Chrome's local storage APIs. 
- **Modern UI**: A minimal, easy-to-use interface powered by Tailwind CSS and DaisyUI.
- **Password Requirements Validation**: Built-in validators to ensure your master password is as secure as possible.

## Installation

Because this is a React-based Chrome Extension created with Vite, you will need to build the project before loading it into your browser.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and `npm` installed on your machine.

### Build Instructions

1. **Clone the repository and navigate into the project directory:**
```bash
git clone <repository-url>
cd password-manager
```

2. **Install the dependencies:**
```bash
npm install
```

3. **Build the extension:**
```bash
npm run build
```
   *This command compiles the React application and generates a dist folder containing the final extension files (including the manifest.json).*

### Adding the Extension to Chrome

1. Open Google Chrome and type chrome://extensions/ into your address bar.
2. Enable **Developer mode** using the toggle switch in the top right corner.
3. Click the **Load unpacked** button in the top left corner.
4. Select the dist folder that was generated inside your project directory.
5. Pin the extension to your browser toolbar for quick access! 

## Technologies Used
* **React 19**
* **Vite**
* **Tailwind CSS 4 & DaisyUI**
* **Chrome Extension API** (chrome.storage.local / chrome.storage.session`)
Web Crypto API (For PBKDF2 hashing)
``` 
