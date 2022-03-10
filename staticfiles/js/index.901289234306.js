//calls the check function on clicking the submit button
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
    check();
    //Manually going to the certificate page. Add dynamic functionlity if needed. check() has the count which can be used in an if else statement
    document.location.href = "https://mesrotaract.herokuapp.com/"
})


//result function
function check() {
    let count = 0;
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
    let q4 = document.quiz.question4.value;
    let q5 = document.quiz.question5.value;
    let q6 = document.quiz.question6.value;
    let q7 = document.quiz.question7.value;
    let q8 = document.quiz.question8.value;
    let q9 = document.quiz.question9.value;
    let q10 = document.quiz.question10.value;
    let q11 = document.quiz.question11.value;
    let q12 = document.quiz.question12.value;
    let q13 = document.quiz.question13.value;
    let q14 = document.quiz.question14.value;
    let q15 = document.quiz.question15.value;
    let q16 = document.quiz.question16.value;
    let q17 = document.quiz.question17.value;
    let q18 = document.quiz.question18.value;
    let q19 = document.quiz.question19.value;
    let q20 = document.quiz.question20.value;
    let quesArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
    let answerArr = ["Polio", "True", "Navratri", "Tag The Tree", "Impactful gender equality projects", "15", "Sunidhi M N", "Club Service: Organizing fundraisers to finance the club projects", "Blood Donation Camp", "2015", "Unity in Service", "World Rotaract Day", "Shekhar Mehta", "2", "R.I. Dist - 3190", "False", "Zone Violet", "Rotary Bangalore North West", "18 - 30", "Secretary"];

    for (let i = 0; i < answerArr.length; i++) {
        if (quesArr[i] == answerArr[i]) {
            count++;
        }
    }

    // if (q1 == "option-1") {
    //     count++;
    // }
    // if (q2 == "option-2") {
    //     count++;
    // }
    // if (q3 == "option-3") {
    //     count++;
    // }
    // if (q4 == "option-1") {
    //     count++;
    // }
    // if (q5 == "option-2") {
    //     count++;
    // }
    // if (q6 == "option-3") {
    //     count++;
    // }
    // document.write(count);
}

//Section to traverse through the questions

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const divSet1 = document.querySelector(".set-1");
const divSet2 = document.querySelector(".set-2");
const divSet3 = document.querySelector(".set-3");
const divSet4 = document.querySelector(".set-4");
let pageCount = 0;
let cardSets = [divSet1, divSet2, divSet3, divSet4];

function showSection(pageCount) {
    cardSets[pageCount].classList.remove("hide");
}

window.addEventListener("DOMContentLoaded", function () {
    divSet2.classList.add("hide");
    divSet3.classList.add("hide");
    divSet4.classList.add("hide");
    submitBtn.classList.add("hide");
    pageCount = 0;
})

prevBtn.addEventListener("click", function () {

    if (pageCount >= 1) {
        pageCount--;
        console.log(pageCount);
        cardSets[pageCount + 1].classList.add("hide");
        showSection(pageCount);
    }

    //hides submit button
    if (pageCount < cardSets.length - 1) {
        submitBtn.classList.add("hide");
    }
})

nextBtn.addEventListener("click", function () {

    if (pageCount < cardSets.length - 1) {
        pageCount++;
        console.log(pageCount);
        cardSets[pageCount - 1].classList.add("hide");
        showSection(pageCount);
    }

    //shows submit button at last page
    if (pageCount == cardSets.length - 1) {
        submitBtn.classList.remove("hide");
    }
})



