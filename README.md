# demo-webdriverio
for Aaron

## Quick Start
```bash
npm install
npm test
```

Expect to see the following in the terminal:
```bash
"spec" reporter:
------------------------------------------------------------------
[chrome 83.0.4103.116 mac os x #0-1] Spec:
/Users/Luigi/github/demo-webdriverio/test/specs/login.spec.js
[chrome 83.0.4103.116 mac os x #0-1] Running: chrome (v83.0.4103.116) on mac os
x
[chrome 83.0.4103.116 mac os x #0-1] Session ID:
25b427b957000c00894a5ef2d0d9f528
[chrome 83.0.4103.116 mac os x #0-1]
[chrome 83.0.4103.116 mac os x #0-1] the-internet.herokuapp.com login form
[chrome 83.0.4103.116 mac os x #0-1]    ✓ should deny access with wrong creds
[chrome 83.0.4103.116 mac os x #0-1]    ✓ should accept access with correct
creds
[chrome 83.0.4103.116 mac os x #0-1]
[chrome 83.0.4103.116 mac os x #0-1] 2 passing (4s)
------------------------------------------------------------------
[chrome 83.0.4103.116 mac os x #0-0] Spec:
/Users/Luigi/github/demo-webdriverio/test/specs/basic.js
[chrome 83.0.4103.116 mac os x #0-0] Running: chrome (v83.0.4103.116) on mac os
x
[chrome 83.0.4103.116 mac os x #0-0] Session ID:
91dfc07a055935626db7abea5413a160
[chrome 83.0.4103.116 mac os x #0-0]
[chrome 83.0.4103.116 mac os x #0-0] webdriver.io page
[chrome 83.0.4103.116 mac os x #0-0]    ✓ should have the right title
[chrome 83.0.4103.116 mac os x #0-0]
[chrome 83.0.4103.116 mac os x #0-0] 1 passing (5s)


Spec Files:      2 passed, 2 total (100% completed) in 00:00:06
```

# Comments on commits
* Commit [55cb725](https://github.com/gin/demo-webdriverio/blob/55cb725e2f7b3579dc7e7666fdf3ce5ef5c98ad3/test/specs/login.spec.js)  
This login page test shows the most basic test without using page objects

Let's follow the test evolution

# Comment on dependencies
Chrome is expected to be installed, so that Webdriver can use it for testing.  
Puppeteer (headless version Chrome) can be used as fallback if running in a container or VM where Chrome is not installed. It is not yet setup in this demo.