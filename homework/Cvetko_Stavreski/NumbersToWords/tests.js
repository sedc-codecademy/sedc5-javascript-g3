QUnit.test("a = 10", function (assert) {
    let a = 10;
    let expected = "ten";
    let result = sayIt(a);
    assert.equal(expected, result);
});

QUnit.test("a = 11", function (assert) {
    let a = 11;
    let expected = "eleven";
    let result = sayIt(a);
    assert.equal(expected, result);
});

QUnit.test("a = 1", function (assert) {
    let a = 1;
    let expected = "one";
    let result = sayIt(a);
    assert.equal(expected, result);
});