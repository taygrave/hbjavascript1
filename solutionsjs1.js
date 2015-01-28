// //Question 1

// var sum = 0;
// for(var i = 0; i < 1000; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//          sum += i}
// }
// console.log(sum)

//Question 2

function summing(x,y){
    return Number(x) + Number(y);
}

function fibonacciSet(max){
    if (max > 1){
        var fibArray = [1];
        var currentFib = 5;
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


fibonacciSet(40);