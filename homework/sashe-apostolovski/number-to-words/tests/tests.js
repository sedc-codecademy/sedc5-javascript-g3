// Tests for one digit number
QUnit.module('One digit');                    
QUnit.test( "Case 0", function( assert ) {
  let number = 0;
  let result = toWords(number);
  let expected = 'Zero';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);

});

QUnit.test( "Case 1", function( assert ) {
  var number = 1;
  var result = toWords(number);
  var expected = 'One';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 2", function( assert ) {
  var number = 2;
  var result = toWords(number);
  var expected = 'Two';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 8", function( assert ) {
  var number = 8;
  var result = toWords(number);
  var expected = 'Eight';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

// Tests for two digit numbers
QUnit.module('Two digits');                    
QUnit.test( "Case 10", function( assert ) {
  var number = 10;
  var result = toWords(number);
  var expected = 'Ten';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 11", function( assert ) {
  var number = 11;
  var result = toWords(number);
  var expected = 'Eleven';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 15", function( assert ) {
  var number = 15;
  var result = toWords(number);
  var expected = 'Fifteen';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 20", function( assert ) {
  var number = 20;
  var result = toWords(number);
  var expected = 'Twenty';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 21", function( assert ) {
  var number = 21;
  var result = toWords(number);
  var expected = 'Twenty one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 50", function( assert ) {
  var number = 50;
  var result = toWords(number);
  var expected = 'Fifty';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

// Tests for numbers greater than 99
QUnit.module('one hundred plus');                 
QUnit.test( "Case 100", function( assert ) {
  var number = 100;
  var result = toWords(number);
  var expected = 'One hundred';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 101", function( assert ) {
  var number = 101;
  var result = toWords(number);
  var expected = 'One hundred one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 108", function( assert ) {
  var number = 108;
  var result = toWords(number);
  var expected = 'One hundred eight';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 125", function( assert ) {
  var number = 125;
  var result = toWords(number);
  var expected = 'One hundred twenty five';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});
QUnit.test( "Case 192", function( assert ) {
  var number = 192;
  var result = toWords(number);
  var expected = 'One hundred ninety two';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 300", function( assert ) {
  var number = 300;
  var result = toWords(number);
  var expected = 'Three hundred';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 909", function( assert ) {
  var number = 909;
  var result = toWords(number);
  var expected = 'Nine hundred nine';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 999", function( assert ) {
  var number = 999;
  var result = toWords(number);
  var expected = 'Nine hundred ninety nine';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 1000", function( assert ) {
  var number = 1000;
  var result = toWords(number);
  var expected = 'One thousand';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 1001", function( assert ) {
  var number = 1001;
  var result = toWords(number);
  var expected = 'One thousand one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 1187", function( assert ) {
  var number = 1187;
  var result = toWords(number);
  var expected = 'One thousand one hundred eighty seven';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 2000", function( assert ) {
  var number = 2000;
  var result = toWords(number);
  var expected = 'Two thousand';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 6400", function( assert ) {
  var number = 6400;
  var result = toWords(number);
  var expected = 'Six thousand four hundred';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 15015", function( assert ) {
  var number = 15015;
  var result = toWords(number);
  var expected = 'Fifteen thousand fifteen';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 21011", function( assert ) {
  var number = 21011;
  var result = toWords(number);
  var expected = 'Twenty one thousand eleven';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 158909", function( assert ) {
  var number = 158909;
  var result = toWords(number);
  var expected = 'One hundred fifty eight thousand nine hundred nine';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 12341678", function( assert ) {
  var number = 12341678;
  var result = toWords(number);
  var expected = 'Twelve million three hundred forty one thousand six hundred seventy eight';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 128341679901", function( assert ) {
  var number = 128341679901;
  var result = toWords(number);
  var expected = 'One hundred twenty eight billion three hundred forty one million six hundred seventy nine thousand nine hundred one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case 150256879456", function( assert ) {
  var number = 150256879456;
  var result = toWords(number);
  var expected = 'One hundred fifty billion two hundred fifty six million eight hundred seventy nine thousand four hundred fifty six';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});
QUnit.test( "Case 1000000000000", function( assert ) {
  var number = 1000000000000;
  var result = toWords(number);
  var expected = 'One trillion';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});
QUnit.test( "Case 1000000000000000", function( assert ) {
  var number = 1000000000000000;
  var result = toWords(number);
  var expected = 'One quadrillion';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});
QUnit.test( "Case 1000000000000001", function( assert ) {
  var number = 1000000000000001;
  var result = toWords(number);
  var expected = 'One quadrillion one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

// Tests for Negative numbers
QUnit.module('Negative numbers');
QUnit.test( "Case -1", function( assert ) {
  var number = -1;
  var result = toWords(number);
  var expected = 'Minus one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case -10", function( assert ) {
  var number = -10;
  var result = toWords(number);
  var expected = 'Minus ten';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case -15015", function( assert ) {
  var number = -15015;
  var result = toWords(number);
  var expected = 'Minus fifteen thousand fifteen';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case -21011", function( assert ) {
  var number = -21011;
  var result = toWords(number);
  var expected = 'Minus twenty one thousand eleven';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

QUnit.test( "Case -128341679901", function( assert ) {
  var number = -128341679901;
  var result = toWords(number);
  var expected = 'Minus one hundred twenty eight billion three hundred forty one million six hundred seventy nine thousand nine hundred one';
  assert.equal(result, expected, `Number ${number} converted to words is: ${expected}`);
});

// Tests for invalid input
QUnit.module('Handleing Invalid input');
QUnit.test( "Case 'cats'", function( assert ) {
  var number = 'cats';
  var result = toWords(number);
  assert.notOk(result, 'Only integers numbers up to 12 digits are supported for conversion');
});
QUnit.test( "Case '*&%'", function( assert ) {
  var number = '*&%';
  var result = toWords(number);
  assert.notOk(result, 'Only integers numbers up to 12 digits are supported for conversion');
});