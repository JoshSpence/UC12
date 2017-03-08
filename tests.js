//User Story 1
QUnit.test("Validating phone numbers function.", function(assert) {
    var n = "(916) 412-1158";
    var result = validPhone(n);
    assert.deepEqual(result, "Valid" , "The phone number is Valid");
});

//User Story 2
QUnit.test("getAreaCode error test", function(assert){
    assert.throws(function(){
        getAreaCode("916) 412-1158");
    }, "An error was thrown: Missing (.");
});

//User Story 3
QUnit.test("Area Code grabber function.", function(assert) {
    var n = "(415) 412-1158";
    var result = getAreaCode(n);
    assert.deepEqual(result, "415" , "We expected for the result to be 415");
});

//User Story 4
QUnit.test("CO Code grabber function.", function(assert) {
    var n = "(415) 412-1158";
    var result = getCoCode(n);
    assert.deepEqual(result, "412" , "We expected for the result to be 412");
});
