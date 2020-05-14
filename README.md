# reproduction-vertical-collection

This repo represents a minimal reproduction of a bug in VerticalCollection that manifests when two vertical collections share a common container via `containerSelector`. This common container could be either the `body` element, or another element.

In this situation, the vertical collection will behave as expected when using the app, but will cause Application tests that `await visit` the route to hang on the visit promise.

## Reproduction

* `git clone <repository-url>` this repository
* `cd reproduction-vertical-collection`
* `npm install`
* `npx ember test`

You should be able to observer a test timeout with test output resembling the following:

```
reproduction-vertical-collection (master) $ npx ember test
Environment: test
building...
cleaning up...
Built project successfully.
not ok 1 Chrome 81.0 - [120671 ms] - Acceptance: Trainer Reproduction of bug: When rendering two vertical collections with a shared container
    ---
        actual: >
            null
        stack: >
                at http://localhost:7357/assets/test-support.js:6288:8
        message: >
            Test took longer than 60000ms; test timed out.
        negative: >
            false
        browser log: |
    ...
ok 2 Chrome 81.0 - [1 ms] - ESLint | app: app.js
ok 3 Chrome 81.0 - [0 ms] - ESLint | app: router.js
ok 4 Chrome 81.0 - [0 ms] - TemplateLint: reproduction-vertical-collection/templates/application.hbs
ok 5 Chrome 81.0 - [0 ms] - TemplateLint: reproduction-vertical-collection/templates/repro.hbs
ok 6 Chrome 81.0 - [0 ms] - ESLint | tests: acceptance/reproduction-test.js
ok 7 Chrome 81.0 - [0 ms] - ESLint | tests: test-helper.js
ok 8 Chrome 81.0 - [0 ms] - ember-qunit: Ember.onerror validation: Ember.onerror is functioning properly

1..8
# tests 8
# pass  7
# skip  0
# fail  1
Testem finished with non-zero exit code. Tests failed.

```

