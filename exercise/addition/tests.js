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
