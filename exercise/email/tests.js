QUnit.test("domain for email@example.com", function (assert) {
    let result = getDomain("email@example.com");
    let expected = "example.com";
    assert.equal(expected, result);
});

QUnit.test("domain for wekoslav@sourcico.com", function (assert) {
    let result = getDomain("wekoslav@sourcico.com");
    let expected = "sourcico.com";
    assert.equal(expected, result);
});

QUnit.test("domain for 213123234123@example.com", function (assert) {
    let result = getDomain("213123234123@example.com");
    let expected = "example.com";
    assert.equal(expected, result);
});

QUnit.test("domain for email@кирилица.ру", function (assert) {
    let result = getDomain("email@кирилица.ру");
    let expected = "кирилица.ру";
    assert.equal(expected, result);
});

QUnit.test("test for no at sign", function (assert) {
    let result = getDomain("this-is-not-an-email");
    assert.notOk(result);
});

QUnit.test("test for no domain", function (assert) {
    let result = getDomain("not-an-email@");
    assert.notOk(result);
});

QUnit.test("test for no username", function (assert) {
    let result = getDomain("@not-an-email");
    assert.notOk(result);
});

QUnit.test("test for multiple at-signs", function (assert) {
    let result = getDomain("this@is@not@an@email");
    assert.notOk(result);
});