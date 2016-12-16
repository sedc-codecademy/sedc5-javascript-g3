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

QUnit.test("a = 6561", function (assert) {
    let a = 6561;
    let expected = "six thousand, five hundred sixty-one";
    let result = sayIt(a);
    assert.equal(expected, result);
});

QUnit.test("a = 36516571351", function (assert) {
    let a = 36516571351;
    let expected = "thirty-six billion, five hundred sixteen million, five hundred seventy-one thousand, three hundred fifty-one";
    let result = sayIt(a);
    assert.equal(expected, result);
});

QUnit.test("a = 16846888", function (assert) {
    let a = 16846888;
    let expected = "sixteen million, eight hundred fourty-six thousand, eight hundred eighty-eight";
    let result = sayIt(a);
    assert.equal(expected, result);
});

QUnit.test("a = 161681351668615", function (assert) {
    let a = 161681351668615;
    let expected = "one hundred sixty-one trillion, six hundred eighty-one billion, three hundred fifty-one million, six hundred sixty-eight thousand, six hundred fifteen";
    let result = sayIt(a);
    assert.equal(expected, result);
});
