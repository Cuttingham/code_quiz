var timerElement = document.querySelector(".timer");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var answer1 =document.querySelector("li1");
var answer2=document.querySelector("li2");
var answer3=document.querySelector("li3");
var answer4=document.querySelector("li4");
var correctAnswerCounter = 0
var activeQuestion = 0;
var answerCorrect=true;

// var question1 = "How many rows a whiskers does a cat have?" //4
// var question2 = "How fast can a greyhound run?" //45 mph
// var question3 = "How many noses does a slug have?"//4
// var question4 = "What is the only mammal capable of flight?"//bat
// var question5 = "What is the only animal that cannot jump?"//elephant
// var question6 = "What is a rhino's horn made out of?"//hair
// var question7 = "What is the loudest animal?" //pistol shrimp 
// var question8 = "What animal can shoot blood from its eyes?"//horned lizard
// var question9 = "What is a group of parrots called?" //pandemonium
// var question10 = "What are the only fish that have lungs and gills"//lungfish

var questions = [ 
    {
        id:"question1",
        questionText:"How many rows a whiskers does a cat have?",
        answerChoices:["1","2","3","4"],
        correctAnswer:"4",
    },
    {
        id:"question2",
        questionText:"How fast can a greyhound run(in mph?)",
        answerChoices:["20","35","45","55"],
        correctAnswer:"45",
    },
    {
        id:"question3",
        questionText:"How many noses does a slug have?",
        answerChoices:["1","2","3","4"],
        correctAnswer:"4",
    },
    {
        id:"question4",
        questionText:"What is the only mammal capable of flight?",
        answerChoices:["Bat","Flying Squrrel","Duck-billed platypus","Gary Coleman"],
        correctAnswer:"Bat",
    },
    {
        id:"question5",
        questionText:"What is the only animal that cannot jump?",
        answerChoices:["Sloth","Giraffe","Elephant","Ocelot"],
        correctAnswer:"Elephant",
    },
    {
        id:"question6",
        questionText:"What is a rhino's horn made out of?",
        answerChoices:["Skin","Hair","Bone","Teeth"],
        correctAnswer:"Hair",
    },
    {
        id:"question7",
        questionText:"What is the loudest animal?",
        answerChoices:["Howler Monkey","Lion","Sperm Whale","Pistol Shrimp"],
        correctAnswer:"Pistol Shrimp",
    },
    {
        id:"question8",
        questionText:"What animal can shoot blood from its eyes?",
        answerChoices:["Horned Lizard","Iguana","Echidna","Blood Snail"],
        correctAnswer:"Horned Lizard",
    },
    {
        id:"question9",
        questionText:"What is a group of parrots called?",
        answerChoices:["Clan","Pandemonium","Circus","Clam Bake"],
        correctAnswer:"Pandemonium",
    },
    {
        id:"question10",
        questionText:"What are the only fish that have lungs and gills",
        answerChoices:["Fish with Lungs","Lungs in a Fish","Lung Fish","This fish has both lungs and gills"],
        correctAnswer:"Lung Fish",
    },
]





function startGame(){

}


var timerCount=100;
function startTimer(){
    timer=setInterval(function(){
    timerCount--;
    timerElement.textContent=timerCount + " seconds left";  //this timer is working
    if(timerCount===0){
        clearInterval(timer)
        endGame();
    }
},1000);
}

function isQuestionCorrect(){

}