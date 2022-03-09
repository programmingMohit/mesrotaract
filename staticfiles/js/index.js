//calls the check function on clicking the submit button
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
    check();
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
    if (q1 == "option-1") {
        count++;
    }
    if (q2 == "option-2") {
        count++;
    }
    if (q3 == "option-3") {
        count++;
    }
    if (q4 == "option-1") {
        count++;
    }
    if (q5 == "option-2") {
        count++;
    }
    if (q6 == "option-3") {
        count++;
    }
    document.write(count);
}

//Section to traverse through the questions

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const divSet1 = document.querySelector(".set-1");
const divSet2 = document.querySelector(".set-2");
let pageCount = 0;
let cardSets = [divSet1, divSet2];

function showSection(pageCount) {
    cardSets[pageCount].classList.remove("hide");
}

window.addEventListener("DOMContentLoaded", function () {
    divSet2.classList.add("hide");
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



