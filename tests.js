QUnit.test("getAreaCode error test", function(assert){
    assert.throws(function(){
        getAreaCode("916) 412-1158");
    }, "An error was thrown: Missing (.");
});

QUnit.test("Validating phone numbers function.", function(assert) {
    var n = "(916) 412-1158";
    var result = validPhone(n);
    assert.deepEqual(result, "Valid" , "The phone number is Valid");
});

QUnit.test("Area Code grabber function.", function(assert) {
    var n = "(415) 412-1158";
    var result = getAreaCode(n);
    assert.deepEqual(result, "415" , "We expected for the result to be 415");
});

