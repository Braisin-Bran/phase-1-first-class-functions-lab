// Code your solution in this file!
const returnFirstTwoDrivers = function(nameListArray){
    let tempArray = nameListArray;
    let resultArray = [tempArray[0],tempArray[1]];
    
    return resultArray;
}
const returnLastTwoDrivers = function(nameListArray= []){
    let tempArray = nameListArray;
    let resultArray = [];

    resultArray.push(tempArray[tempArray.length-2]);
    resultArray.push(tempArray[tempArray.length-1]);

    return resultArray;
}
let selectingDrivers = [returnFirstTwoDrivers(),returnLastTwoDrivers()];

function createFareMultiplier(multiplierValue){
    return function(fare){
        return fare*multiplierValue;
    }
}
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers, chosenFunction){
chosenFunction(arrayOfDrivers);
}