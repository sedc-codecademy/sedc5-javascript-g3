QUnit.test("magical well test for a=1, b=2, n=1 ", function (assert) {
    let a = 1, b = 2, n = 1;
    let expected = 2;
    let result = magicalWell(a, b, n);
    assert.ok(result === expected, "Passed!");
});

QUnit.test("magical well test for a=3, b=2, n=1 ", function (assert) {
    let a = 3, b = 2, n = 1;
    let expected = 6;
    let result = magicalWell(a, b, n);
    assert.ok(result === expected, "Passed!");
});

QUnit.test("magical well test for a=10, b=1, n=1 ", function (assert) {
    let a = 10, b = 1, n = 1;
    let expected = 10;
    let result = magicalWell(a, b, n);
    assert.ok(result === expected, "Passed!");
});

QUnit.test("magical well test for a=4, b=5, n=3 ", function (assert) {
    let a = 4, b = 5, n = 3;
    let expected = 92;
    let result = magicalWell(a, b, n);
    assert.equal(result, expected, "Passed!");
});