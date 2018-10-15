# bridge-extension-example


My notes on Chrome Extensions:

chrome://extensions/
git clone the repo
npm run start (to start the packages)

Catlify

https://github.com/turquoisemelon/bridge-extension-example

manifest.json
https://developer.chrome.com/extensions/overview

Load unpacked > add “list folder”

Manifest.json: Add this:
    "browser_action": {
        "default_popup": "index.html"
    }

npm run watch