QUnit.module( 'Addition' );
QUnit.test( 'Integers', function( assert ) {
  let first = 1, second = 2;
  let expected = 3;
  let result = operations['+'](first, second);
  assert.strictEqual(result, expected, ` (${first} + ${second}) equals ${result}`);

  first = 0;
  second = 0;
  expected = 0;
  result = operations['+'](first, second);
  assert.strictEqual(result, expected, `  (${first} + ${second}) equals ${result}`);

  first = 1157;
  second = 15;
  expected = 1172;
  result = operations['+'](first, second);
  assert.strictEqual(result, expected, `  (${first} + ${second}) equals ${result}`);

  first = 999999;
  second = 1;
  expected = 1000000;
  result = operations['+'](first, second);
  assert.strictEqual(result, expected, `  (${first} + ${second}) equals ${result}`);
});

QUnit.test( "Fractions", function( assert ) {
  let first = 0.1, second = 0.2;
  let expected = 0.3;
  let result = operations['+'](first, second);
  assert.strictEqual(result, expected, ` (${first} + ${second}) equals ${result}`);

  first = 0.12;
  second = 0.13;
  expected = 0.25;
  result = operations['+'](first, second);
  assert.strictEqual(result, expected, `  (${first} + ${second}) equals ${result}`);

  first = 0;
  second = 0.13;
  expected = 0.13;
  result = operations['+'](first, second);
  assert.strictEqual(result, expected, `  (${first} + ${second}) equals ${result}`);

  first = 5;
  second = 0.13;
  expected = 5.13;
  result = operations['+'](first, second);
  assert.strictEqual(result, expected, `  (${first} + ${second}) equals ${result}`);
});

QUnit.module( "Subtraction" );
QUnit.test( 'Integers', function( assert ) {
  let first = 1, second = 4;
  let expected = -3;
  let result = operations['-'](first, second);
  assert.strictEqual(result, expected, ` (${first} - ${second}) equals ${result}`);

  first = 123;
  second = 23;
  expected = 100;
  result = operations['-'](first, second);
  assert.strictEqual(result, expected, `  (${first} - ${second}) equals ${result}`);

  first = 0;
  second = 150;
  expected = -150;
  result = operations['-'](first, second);
  assert.strictEqual(result, expected, `  (${first} - ${second}) equals ${result}`);
});
QUnit.test( 'Fractions', function( assert ) {
  let first = 0.1, second = 0.4;
  let expected = -0.3;
  let result = operations['-'](first, second);
  assert.strictEqual(result, expected, ` (${first} - ${second}) equals ${result}`);

  first = 0.12;
  second = 0.13;
  expected = -0.01;
  result = operations['-'](first, second);
  assert.strictEqual(result, expected, `  (${first} - ${second}) equals ${result}`);

  first = 0;
  second = 0.13;
  expected = -0.13;
  result = operations['-'](first, second);
  assert.strictEqual(result, expected, `  (${first} - ${second}) equals ${result}`);

  first = 5;
  second = 0.13;
  expected = 4.87;
  result = operations['-'](first, second);
  assert.strictEqual(result, expected, `  (${first} - ${second}) equals ${result}`);

  first = 123.325;
  second = 0.9824;
  expected = 122.3426
  result = operations['-'](first, second);
  assert.strictEqual(result, expected, `  (${first} - ${second}) equals ${result}`);
});
QUnit.module( 'Multiplication' );
QUnit.test( 'Integers', function( assert ) {
  let first = 0, second = 2;
  let expected = 0;
  let result = operations['x'](first, second);
  assert.strictEqual(result, expected, ` (${first} * ${second}) equals ${result}`);

  first = 3;
  second = 5;
  expected = 15;
  result = operations['x'](first, second);
  assert.strictEqual(result, expected, `  (${first} * ${second}) equals ${result}`);

  first = 100;
  second = 10;
  expected = 1000;
  result = operations['x'](first, second);
  assert.strictEqual(result, expected, `  (${first} * ${second}) equals ${result}`);

  first = 99;
  second = 1
  expected = 99;
  result = operations['x'](first, second);
  assert.strictEqual(result, expected, `  (${first} * ${second}) equals ${result}`);
});
QUnit.test( 'Fractions', function( assert ) {
  let first = 0.12, second = 0.13;
  let expected = 0.0156;
  let result = operations['x'](first, second);
  assert.strictEqual(result, expected, `  (${first} * ${second}) equals ${result}`);

  first = 0.5;
  second = 1;
  expected = 0.5;
  result = operations['x'](first, second);
  assert.strictEqual(result, expected, `  (${first} * ${second}) equals ${result}`);

  first = 2.5;
  second = 150.6;
  expected = 376.5;
  result = operations['x'](first, second);
  assert.strictEqual(result, expected, `  (${first} * ${second}) equals ${result}`);
});
QUnit.module( 'Division' );
QUnit.test( '', function( assert ) {
  let first = 0, second = 2;
  let expected = 0;
  let result = operations['/'](first, second);
  assert.strictEqual(result, expected, ` (${first} / ${second}) equals ${result}`);

  first = 2;
  second = 0;
  expected = Infinity;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);

  first = 10;
  second = 2;
  expected = 5;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);

  first = 99;
  second = 1
  expected = 99;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);

  first = 0.12;
  second = 0.13;
  expected = 0.9230769;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);

  first = 5600
  second = 2.8;
  expected = 2000;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);

  first = 150.6;
  second = 2.5;
  expected = 60.24;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);

  first = 9999999.12;
  second = 11.13;
  expected = 898472.5175202;
  result = operations['/'](first, second);
  assert.strictEqual(result, expected, `  (${first} / ${second}) equals ${result}`);
});