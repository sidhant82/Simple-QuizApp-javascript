const questions = [
    {
        question : "Which one of the below is not divide and conquer approach?",

        answers : [
            {text:"Insertion Sort", correct:false},
            {text:"Merge Sort", correct:true},
            {text:"Shell Sort", correct:false},
            {text:"Heap Sort", correct:false},
        ]
    
    },
    {
        question : "What data structure is used for depth first traversal of a graph?",

        answers : [
            {text:"Queue", correct:false},
            {text:"Stack", correct:true},
            {text:"List", correct:false},
            {text:"None of the Above", correct:false},
        ]
    },

    {
        question : "Which of the following is an example of dynamic programming approach?",

        answers : [
            {text:"Fibonacci Series", correct:false},
            {text:"Tower of Honoi", correct:false},
            {text:"Dijkstra Shortest Path", correct:false},
            {text:"All of the Above", correct:true},
        ]


    },


    {
        question : "Which of the following algorithm is not stable?",

        answers : [
            {text:"Bubble Sort", correct:false},
            {text:"Quick Sort", correct:true},
            {text:"Merge Sort", correct:false},
            {text:"Insertion Sort", correct:false},
        ]

    },

    
    {
        question : "Which of the below given series is Non-Increasing Order −",

        answers : [
            {text:"1,3,4,6,8,9", correct:false},
            {text:"9,8,6,4,3,1", correct:false},
            {text:"9,8,6,3,3,1", correct:true},
            {text:"1,3,3,6,8,9", correct:false},
        ]

    },

    
    {
        question : "Quick sort running time depends on the selection of",

        answers : [
            {text:"Size of Array", correct:false},
            {text:"pivot element", correct:true},
            {text:"Sequence of values", correct:false},
            {text:"none of the Above!", correct:false},
        ]

    },


    
    {
        question : " A queue data-structure can be used for −",

        answers : [
            {text:"Expression parsing" , correct:false},
            {text:"recursion", correct:false},
            {text:"resource allocation", correct:true},
            {text:"all of the above", correct:false},
        ]

    },


    
    {
        question : " Shell sort uses",

        answers : [
            {text:"selection Sort", correct:true},
            {text:"Quick Sort", correct:false},
            {text:"Merge Sort", correct:false},
            {text:"Insertion Sort", correct:false},
        ]

    },


    
    {
        question : " A stable sorting alrithm −",

        answers : [
            {text:"does not crash", correct:false},
            {text:"does not run out of memory", correct:false},
            {text:"does not change the sequence of appearance of elements", correct:true},
            {text:"does not exists", correct:false},
        ]

    },

    
    {
        question : " A stable sorting alrithm −",

        answers : [
            {text:"does not crash", correct:false},
            {text:"does not run out of memory", correct:false},
            {text:"does not change the sequence of appearance of elements", correct:true},
            {text:"does not exists", correct:false},
        ]

    }

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion (){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex +1;
    questionElement.innerHTML = questionNO + " Q." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "block";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }


}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}



function showScore(){
    resetState();
    questionElement.innerHTML =`you scored ${score} out of  ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();