


// <div class="container">
// <h1>Our life in Weeks</h1>
// <p>Assuming that we are lucky enough to live 100 years</p>

// <div id="displayarea">
//     <div class="answer">
//         <p>You have</p>
//         <h2 id="result">0</h2>
//         <p>weeks left...</p>
//     </div>

//     <div class="alert1">
//         <p>Please enter your age below...</p>
//     </div>
//     <div class="alert2">
//         <p>Please enter a number...</p>
//     </div>
// </div>

// <div class="buttons">
//     <input id="box" type="number" placeholder="Enter Your Age">
//     <button id="calcbtn">Calculate</button>
//     <button id="resetbtn">Reset</button>
//     <a href="index.html" class="refresh"></a>
// </div>
// </div>


let displayarea = document.querySelector("#displayarea");
let result = document.querySelector("#result");
let alert1 = document.querySelector(".alert1");
let alert2 = document.querySelector(".alert2");
let calcbtn = document.querySelector("#calcbtn");
let resetbtn = document.querySelector("#resetbtn");
let refresh = document.querySelector(".refresh");
let box = document.querySelector("#box");
let age;
let myTimer;


calcbtn.addEventListener('click', function (){
    age = box.value.trim();

    if (age == "") {

        clearInterval(myTimer);
        let alert1 = document.querySelector(".alert1")
        alert1.classList.add('active');

        myTimer = setInterval( function() {
            alert1.classList.remove('active');
        },3000)
    } else if(isNaN(age) == true){

        clearInterval(myTimer);
        let alert2 = document.querySelector(".alert2");
        
        alert2.classList.add('active')
        myTimer = setInterval(function () {
            alert2.classList.remove('active');
        },3000)  
        box.value = ""
    } else {
        let answer = document.querySelector(".answer");
        answer.classList.add('active');
        let remaining_years = 100 - age ;
        let remaining_weeks = remaining_years * 52;

        result.innerHTML = separatenumbersincomma(remaining_weeks);

        box.value = ""
    }

})

function separatenumbersincomma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}    

resetbtn.addEventListener("click", function (){
    refresh.click()
})


