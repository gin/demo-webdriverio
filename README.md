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

Let's follow the evolution of the test file

* Commit [0770b0c](https://github.com/gin/demo-webdriverio/commit/0770b0c4553dfa29ce676efeeee6429c5341c98b)  
This login page test shows what changed when using page objects. This was the page object setup one of my projects at Ambry (around 2015) used before TypeScript was commonplace.

Let's see how it looks after the tests and the page objects are converted to TypeScript

* Commit [71a04d2](https://github.com/gin/demo-webdriverio/commit/71a04d24e9c9e4fbde3263552237ba9837eca998)  
When using TypeScript, one way is to have the TypeScript compiler process `*.ts`
files and output them as `*.js` files to a directory where the Node.js runtime
could run it. Another way is to use ts-node (a wrapper on Node.js to run `*.ts`
files). This commit shows configuration changes using first method. The
advantage with this method is that it reduces a dependency (No need to depend
on ts-node). The disadvantage is the project directory will have `*.js` files
after compiling with `tsc` (TypeScript's compiler).

Let's see which settings to change to use TypeScript without having to see the `*.js` output

* Commit [4111e50](https://github.com/gin/demo-webdriverio/commit/4111e50b45a955fde9b02f1c5a844a0cec6b9db3)  
Directory is cleaner. However, the project now depends on `ts-node`. This is ok in most cases.

# Comment on dependencies
Chrome is expected to be installed, so that Webdriver can use it for testing.  
Puppeteer (headless version Chrome) can be used as fallback if running in a container or VM where Chrome is not installed. It is not yet setup in this demo.
