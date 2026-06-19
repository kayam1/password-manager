# 🔐 Password Manager - Chrome Extension

A secure, feature-rich password manager built as a Chrome extension using React.js. Store, manage, and protect your login credentials with peace of mind.
## 📖 Table of Contents

   1. Overview

   2. Key Features

   3. Technologies Used

   4. Security

   5. Installation & Setup

   6. Usage Guide

   7. Future Improvements

   8. License

## 📌 1. Overview

This project is a fully functional password manager browser extension. It allows users to securely store login credentials, manage their vault, and maintain strong security practices—all from a convenient popup window directly in the browser.

Built with a focus on security, usability, and modular code organization, the extension combines the power of React with Chrome's extension APIs to deliver a smooth, responsive experience.

## ✨ 2. Key Features

### 🔑 2.1 Authentication

   * Master Password Setup – Create a strong master password during first-time use with real-time validation

   * Secure Login – Authenticate using PBKDF2-hashed master password

   * Session Management – Stay logged in while the browser is open using Chrome's session storage 

   * Logout – Securely end your session at any time or whenever the browser closes

### 🗄️ 2.2 Vault Management

   * View Entries – Display all saved credentials in a clean and minimalistic table format
   
   * Add New Entries – Store website, username, and password

   * Edit Entries – Update existing credentials via an intuitive popup

   * Delete Entries – Remove entries with confirmation dialog to prevent accidental loss

   * Password Masking – Passwords are hidden by default in the vault table; reveal individually in popup

   * Inline Actions – Each entry has a settings button for quick access to view, edit, and delete

### ⚙️ 2.3 Settings

   * Clear All Vault Data – Remove all saved passwords with confirmation

   * Reset Master Password – Re-initialize the vault with a new master password

   * Sign Out – End the current session securely

### 🛡️ 2.4 Security Features

   * PBKDF2 Key Derivation – 600,000 iterations with SHA-256

   * Unique Salt per User – Prevents rainbow table attacks

   * Chrome Storage API – Data stored securely within the extension's isolated storage

   * Session Storage – Login state cleared when browser closes

   * Real-Time Password Validation – Instant feedback on password strength during registration

   * Master Password Requirements – Enforces length (16–64 characters), uppercase, lowercase, numbers, and symbols

### 💻 3. Technologies Used

| Technology | Purpose |
|------------|---------|
| **React.js** | UI components & state management |
| **JavaScript (ES6+)** | Core application logic |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Pre-built UI components (buttons, tables, modals) |
| **Chrome Extensions API** | Storage, session management |
| **Web Crypto API** | PBKDF2 password hashing |
| **React Router** | Navigation between pages |

## 🔐 4. Security

This extension implements multiple layers of security:

### 4.1 Master Password Hashing

   * Algorithm: PBKDF2-HMAC-SHA256

   * Iterations: 600,000 (recommended for 2026)

   * Salt: 16-byte randomly generated salt per user

   * Storage: Salt and hash stored separately in chrome.storage.local

### 4.2 Data Protection

   * Vault data stored in Chrome's isolated storage (not accessible by websites)
    
   * Passwords hidden by default in the vault table

   * Session state stored in chrome.storage.session (cleared on browser close)

   * Master password never stored in plaintext

### 4.3 Security Design Principles

   * No plaintext password storage

   * No external database or cloud sync (all data local)

   * Extension isolation prevents cross-site access

## 🛠️ 5. Installation & Setup

### 5.1 Prerequisites

   * Node.js (v16 or higher)

   * Chrome browser

### 5.2 Clone & Build
  
   1. Clone the repository

   ```bash
   git clone [<repository-url>](https://github.com/kayam1/password-manager)
   ```
   2. Move to installation directory
    
   ```bash
   cd password-manager-extension
   ```
   3. Install dependencies

   ```bash
   npm install
   ```
   4. Build project
    
   ```bash
   npm run build
   ```
### 5.3 Loading the Extension in Chrome

   * Open Chrome and navigate to chrome://extensions/

   * Enable Developer mode (toggle in top-right)

   * Click Load unpacked

   * Select the dist/ or build/ folder from your project

   * The extension icon should appear in the toolbar

## 🎯 6. Usage Guide

### 6.1 First-Time Setup

   * Click the extension icon in the Chrome toolbar

   * You'll be directed to the Register Page

   * Create a master password (16–64 characters with uppercase, lowercase, number, and symbol)

   * Confirm the password and click Register

   * The vault will open automatically

### 6.2 Logging In

   * Enter your master password

   * Click Sign In

   * You'll be redirected to the main vault

### 6.3 Managing Passwords

   * Navigate to the Vault tab

   * Click the settings icon (⚙️) on any entry

   * Choose View, Edit, or Delete

   * Use the Add Password tab to create new entries

## 🚀 7. Future Improvements

While the extension is fully functional, the following enhancements are planned for future development:

### 7.1 Password Generator

  * Customizable Generation – Create strong, random passwords with configurable length and character sets

  * One-Click Copy – Copy generated passwords to clipboard with a single click

### 7.2 Vault Enhancements

  * Bulk Visibility Toggle – Show/hide all passwords in the vault table with one button

  * One-Click Copy – Copy usernames or passwords directly from the vault table

  * Search & Filter – Quickly find entries by website or username

  * Password Strength Indicator – Visual feedback on password strength within the vault

### 7.3 Security Upgrades

  * Vault Entry Encryption – Encrypt vault data for an additional layer of security
    
  * Two-Factor Authentication (2FA) – Add an extra layer of security

  * Auto-Lock Timer – Automatically lock the vault after inactivity

### 7.4 Functional Additions

  * Import/Export – Bulk import/export vault data (CSV, JSON)

  * Dark Mode – Toggle between light and dark themes

### 7.5 User Experience

  * Autofill – Auto-fill login forms on websites

  * Autosave - Automatically create vault entries on site login 

  * Loading States – Show loading indicators during async operations


## 📄 8. License

All rights reserved by the author.

## 🙏 Acknowledgments

   * React.js Documentation

   * Chrome Extensions Documentation

   * Tailwind CSS

   * DaisyUI

   * Web Crypto API

## Built with ❤️ using React.js and Chrome Extensions API
