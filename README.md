List Mania - Mobile Web Apps Collection
=========================================================

Copyright © 2012-2015, Intel Corporation. All rights reserved.

See [LICENSE.md](<LICENSE.md>) for license terms and conditions.

## Applications

### 🎯 Scrabble Word Finder
**Location:** `www/scrabble.html`

A comprehensive word-finding tool for Scrabble players that helps find the best scoring words from available tiles.

**Features:**
- Find all valid Scrabble words from your tiles
- Support for blank tiles (wildcards)
- Board letter integration for extended words
- 7-letter bingo bonus calculation (+50 points)
- Sort by score, length, or alphabetically
- 5,000+ word dictionary (TWL - Tournament Word List)
- Modern, responsive design
- Click-to-copy word functionality

**Usage:**
1. Open `www/scrabble.html` in your browser
2. Enter your tiles (A-Z, use ? for blanks)
3. Optionally add letters already on the board
4. Set minimum word length and sorting preference
5. Click "Find Words" to see all possible words

### 📝 List Mania (Original)
**Location:** `www/index.html`

This Intel XDK project has just an `index.html` file with the basic html, head
and body tags required for building HTML5 mobile web apps. Use this template to
create a *packaged mobile web app* that does not use any device features.

The `icon.png` and `screenshot.png` files are not required by your project. They
are included for use by the Intel XDK template/demo panel and have no use within
a real app. You can safely delete them from your project directory.

You can build a *packaged Cordova web app* that can be submitted to a store
using the "Cordova Hybrid Mobile App Platforms” build tiles (for Crosswalk,
Android, iOS and Windows). The `intelxdk.config.additions.xml` file can be used
to include options that control your *packaged Cordova web app* builds. For
example, you can set the splash screen display time for a packaged Android or
Crosswalk Cordova app using this file.

If you convert (or upgrade) your "Standard HTML5 Project" into a "Standard
HTML5 + Cordova Project" you must comment out the noted script files
inside the provided index.html file.

The `cordova.js` script will be needed if you choose to convert your project to
a *Cordova project* and enhance your app with Cordova APIs. It is not required
to build a *Cordova packaged web app* for distribution via the Android, iOS and
Windows stores *if that app does not utilize Cordova APIs*.

This blank template does not require any Cordova APIs. If you would like to add
Cordova APIs to your application (via Cordova plugins) you must first convert
your project into a Cordova project. You can do this by clicking the Cordova
icon in the *Project Info* section on the **Projects** tab. Or, you can create a
new Cordova project using a Cordova blank template or a Cordova demo or sample
app as a starting point.
