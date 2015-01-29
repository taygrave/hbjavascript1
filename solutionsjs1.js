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

//QUESTION 4

var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedience: -5000,
        feed: function () {
            console.log("Om nom nom");
            this.hunger = this.hunger - 5;
            this.status();
        },
        sleep: function () {
            console.log("ZzzZzzzZzz");
            this.tiredness = this.tiredness - 5;
            this.status();
        },
        play: function() {
            console.log("catnip!");
            this.loneliness -= 0.5;
            this.tiredness += 3;
            this.happiness += 2;
            this.hunger += 10;
            this.status();
        },
        pet: function() {
            console.log("Purrrrrr!");
            this.loneliness -= 0.5;
            this.happiness += 5;
            this.status();
        },
        train: function() {
            console.log("here kitty, kitty!");
            this.obedience += 100;
            this.happiness -= 1;
            this.tiredness += 0.5;
            this.hunger += 5;
            this.status();
        },
        status: function () {
            console.log("Tiredness: " + this.tiredness + ", Hunger: " + this.hunger + ", Loneliness: " + this.loneliness + ", Happiness: "+ this.happiness + ", Obedience: " + this.obedience );
        }
};

//QUESTION 5

<!doctype html>
<html>
<head>
  <title>Javascript II</title>
  <style>
    div {
      border: 1px solid black;
      padding: 10px;
      margin: 10px;
    }

    #text-box-color {
      background-color: green;
    }

    #awesome-box {
      text-align: center;
      font-family: sans-serif;
      font-size: 72px;
      position: relative;
      left: 0;
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>

<div id="text-box-replace">
  hello<br/>
  <a href="text-page" id="get-text">Show me the new text!</a><br/>
  <!--
  Add an event listener and attach it to the "get-text" id.
  When the link is clicked:
    Prevent the default action
    Change the content of the "text-box-replace" div to "world"
  -->
  <script>
    var showWord = document.getElementById('get-text');
    function word(evt) {
      evt.preventDefault();
      document.getElementById('text-box-replace').innerHTML = "world!";
    };
    showWord.addEventListener('click', word);
  </script>
</div>

<div id="text-box-color">
  I am the color green!<br/>
  <a href="#" id="get-color">Show me the new color!</a><br/>
  <!--
  Add an event listener and attach it to the "get-color" id.
  When the link is clicked:
    Prevent the default action
    Change the background color of the "text-box-color" div to red
    Change the content of the "text-box-color" div to "I am the color red!"
  -->
    <script>
    var changeColor = document.getElementById('get-color');
    function colorMe(evt) {
      evt.preventDefault();
      document.getElementById('text-box-color').style.backgroundColor = 'red';
      document.getElementById('text-box-color').innerHTML = 'I am RED!';
    };
    changeColor.addEventListener('click', colorMe);
  </script>
</div>

<div id="melon-box">
  <img src="http://mda.bigoven.com/pics/rs/256/melon-with-chile-salt-and-lime-3.jpg"/><br/>
  <a href="#" id="get-melon">Show me the new melon!</a><br/>
  <!--
  Add an event listener and attach it to the "get-melon" id.
  When the link is clicked:
    Prevent the default action
    Change the content of the "melon" div to an image of a new melon
  -->
  <script>
    var newMelon = document.getElementById('get-melon');
    var oldMelon = document.getElementsByTagName('img');
    // var oldSrc = newMelon.getAttribute('src');
    function melon(evt){
      evt.preventDefault();
      oldMelon[0].setAttribute('src', "http://www.whataboutwatermelon.com/wp-content/uploads/2012/07/pic4.jpg");
    };
    newMelon.addEventListener('click', melon);


  </script>

</div>

<hr/>

<a href="#" id="be-awesome">Be Awesome!</a><br/>

<!-- The "awesome-box" div below is hidden using a CSS class called "hidden"
Add an event listener and attach it to the "be-awesome" id.
When the link is clicked:
  Prevent the default action
  Remove the "hidden" class using the toggle function for elem.classList -->



<!-- Extra Credit 1:
  Using setTimeout or setInterval, cause the "awesome-box" to toggle its visability once a second

Extra Credit 2:
  Using setTimeout or setInterval, cause the "awesome-box" to move across the screen from left to right

Extra Credit 3:
  If you complete Extra Credit 2, cause the "awesome-box" to bounce back and forth across the screen
 -->

<span id="awesome-box" class='hidden'>AWESOME</span>

<script>
  var beAwesome = document.getElementById("be-awesome");
  var awesomeBox = document.getElementById("awesome-box");
  function awesomeness(evt){
    evt.preventDefault();
    awesomeBox.classList.toggle("hidden");
  };

beAwesome.addEventListener('click', awesomeness);


</script>



<script type="text/javascript">

</script>

</body>
</html>