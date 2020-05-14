import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { visit } from "@ember/test-helpers";

module("Acceptance: Trainer Reproduction of bug", function (hooks) {
  setupApplicationTest(hooks);

  test("When rendering two vertical collections with a shared container", async function (assert) {
    await visit("/repro");

    assert.ok(true, "the test ran to completion");
  });
});
