/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws (Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

 function validPhone(phoneNum) {
  if(phoneNum.length == 12);
  if(phoneNum.slice(9,10) == "-");
  if(phoneNum.slice(0,1) == "(" && phoneNum.slice(4,5) == ")"){
     var str = "Valid";
    }
    else {
     var str = "Invalid";
    }
 return str;

}

/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}


function getCoCode(phoneNum) {

    var CoCode;

    try {
        CoCode = between(phoneNum, " " , "-");
        CoCode = CoCode.trim();
        if (CoCode.length == 3 && Number(CoCode)) {
            return CoCode;
        } else {
            throw new Error("Invalid  CoCode: " + CoCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function displayCoCode(inputCoId, outputCoId) {
    var outputCoText = "";
    var phoneNum = document.getElementById(inputCoId).value;

    // Now try to get the code
    try {
        var CoCode = getCoCode(phoneNum);
        outputCoText = "Your CO code is " + CoCode;
    } catch (error) {
        console.log(error.message);
        outputCoText = error.message;
    }

    document.getElementById(outputCoId).innerHTML = outputCoText;
}

function getLineCode(phoneNum) {
    var lineCode;
        lineCode = phoneNum.slice(phoneNum.indexOf("-") + 1, phoneNum.length);
        lineCode = lineCode.trim();
        console.log(lineCode);

    if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
    } else {
            throw new Error("Invalid  LineCode: " + LineCode);
    }

}

function displayLineCode(inputLineId, outputLineId) {
    var outputLineText = "";
    var phoneNum = document.getElementById(inputLineId).value;

    try {
        var LineCode = getLineCode(phoneNum);
        outputLineText = "Your Line code is " + LineCode;
    } catch (error) {
        console.log(error.message);
        outputLineText = error.message;
    }

    document.getElementById(outputLineId).innerHTML = outputLineText;
}
