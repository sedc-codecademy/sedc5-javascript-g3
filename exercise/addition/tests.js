QUnit.test("addition for 1 and 2", function (assert) {
    let result = additionWithoutCarrying(1, 2);
    let expected = 3;
    assert.equal(expected, result);
});

QUnit.test("addition for 7 and 8", function (assert) {
    let result = additionWithoutCarrying(7, 8);
    let expected = 5;
    assert.equal(expected, result);
});

QUnit.test("addition for 456 and 1734", function (assert) {
    let result = additionWithoutCarrying(456, 1734);
    let expected = 1180;
    assert.equal(expected, result);
});

QUnit.test("addition for 78 and 56789", function (assert) {
    let result = additionWithoutCarrying(78, 56789);
    let expected = 56757;
    assert.equal(expected, result);
});

QUnit.test("addition for 56789 and 78", function (assert) {
    let result = additionWithoutCarrying(56789, 78);
    let expected = 56757;
    assert.equal(expected, result);
});

QUnit.test("addition for 50 and 50", function (assert) {
    let result = additionWithoutCarrying(50, 50);
    let expected = 0;
    assert.equal(expected, result);
});

QUnit.test("addition for 501 and 503", function (assert) {
    let result = additionWithoutCarrying(501, 503);
    let expected = 4;
    assert.equal(expected, result);
});

