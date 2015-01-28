//QUESTION 1

var sum = 0;
for(var i = 0; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
         sum += i}
}
console.log(sum)
// Kristen says it's beautiful. <3 <3

//QUESTION 2

function summing(x,y){
    return Number(x) + Number(y);
}

function fibonacciSet(max){
    if (max > 1){
        var fibArray = [1];
        var currentFib = 1;
        while (currentFib < max){
            fibArray.push(currentFib);
            var lastNum = fibArray.slice(-1);
            var secLastNum = fibArray.slice(-2, -1);
            // console.log(lastNum, secLastNum);
            currentFib = summing(lastNum, secLastNum);
            // console.log(currentFib);
            // console.log(typeof currentFib)
        }
        console.log(fibArray);
        return fibArray;
        
    } else {
        console.log([1,1]);
        return [1, 1];
    }
}

function isEven(resultArray){
    var evenNum = [];
    for (var i = 0; i < resultArray.length; i++){
        if (resultArray[i] % 2 === 0){
            evenNum.push(resultArray[i]);
        }
    }
    return evenNum;
}

function sumArray(evenArray){
    var total = 0;
    for (var i = 0; i < evenArray.length; i++){
        total = total + evenArray[i];
    }
    return total;
}

sumArray(isEven(fibonacciSet(4000000)));

// return a list of the even numbers of the fib function
    //make a function that loops through returned fib list and makes a list of even numbers
// sum them together

// QUESTION 3
var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
"33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3","33", "999", "9"];
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

    //look in dupe array for me, if i'm not there already AND
        //if I am in items in original array index-after-me to end-of-array
            //put me in the dupe array

function theDupes(myArray){
    dupeArray = [];
    for (i = 0; i < myArray.length; i++){
        var afterMe = myArray.slice(i+1,myArray.length);
        if (dupeArray.indexOf(myArray[i]) === -1 && afterMe.indexOf(myArray[i]) !== -1){
            dupeArray.push(myArray[i]);
        }
    } console.log(dupeArray);
}

theDupes(votesToGoEatCake);
theDupes(hackbrightStudents);
theDupes(classroomIds);
theDupes(randomJunkIFound);
///