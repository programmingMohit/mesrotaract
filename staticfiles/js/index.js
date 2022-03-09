//calls the check function on clicking the submit button
const submitBtn = document.getElementById("submit-btn");

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

const pg1Btn = document.querySelector(".page-1-btn");
const pg2Btn = document.querySelector(".page-2-btn");
const divSet1 = document.querySelector(".set-1");
const divSet2 = document.querySelector(".set-2");

window.addEventListener("DOMContentLoaded", function () {
    divSet2.classList.add("hide");
})

pg1Btn.addEventListener("click", function () {
    divSet2.classList.add("hide");
    divSet1.classList.remove("hide");
})

pg2Btn.addEventListener("click", function () {
    divSet2.classList.remove("hide");
    divSet1.classList.add("hide");
})



