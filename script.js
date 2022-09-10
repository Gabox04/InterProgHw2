
const startButton = document.getElementById('start-bnt');
const cancelBtn = document.getElementById('cancel-btn');
const containerPage= document.getElementById('container-page');
const finishButton = document.getElementById('finishBtn');
const qCounter = document.getElementById('question-counter');


const btnBack1= document.getElementById('backbtn');
const btnNext1= document.getElementById('nextbtn');
const btnSubmit= document.getElementById('submitbtn');
const resume= document.getElementById('Resume');


btnBack1.style.display ="none"; 
btnNext1.style.display ="none"; 
btnSubmit.style.display = "none";
resume.style.display = "none";



let counter =0;
var questionCounter= document.getElementById('question-counter');
var questionsList=[{question:'Which element do HTML uses to use the JavaScript?',
                                answer1:'script',
                                answer2:'js',
                                answer3:'scripting',
                                answer4:'javascript',
                                correctAns: 'script', id:1
                              },

                              {question:'Where is the correct place to insert a JavaScript?',
                               answer1:'body',
                               answer2:'head',
                               answer3:'Both head and body',
                               answer4:'none of above',
                               correctAns: 'Both head and body', id:2
                              },

                              {question:'What is the correct syntax for referring to an<br>external script called "xxx.js"?',
                               answer1:'sript hre',
                               answer2:'script src',
                               answer3:'script id',
                               answer4:'script name',
                               correctAns: 'script src', id:3
                              },

                              {question:'How do you create a function in JavaScript?',
                              answer1: 'function:: myFunction()',
                              answer2:'function = myFuntion()',
                              answer3:'function myFuntion()',
                              answer4:'function: myFunction()',
                              correctAns:'function myFuntion()', id:4
                             },

                             {question:'What does HTML stand for?',
                             answer1:'Hyper Text Markup Language',
                             answer2:'Home Tool Markup Language',
                             answer3:'Hyperlinks and Text Markup Language',
                             answer4:'Hyper Transit Module Language',
                             correctAns: 'Hyper Text Markup Language', id:5
                            },

                            {question:'How can you make a numbered list?',
                            answer1:'list',
                            answer2:'ul',
                            answer3:'ol',
                            answer4:'dl',
                            correctAns: 'ol', id:6
                           },

                           {question:'What is the correct HTML for making a text area?',
                           answer1:'input type="textarea"',
                           answer2:'textarea',
                           answer3:'textbox',
                           answer4:'input type="textbox"',
                           correctAns: 'textarea', id:7
                          },

                          {question:'How do you select elements with class name "test"?',
                          answer1:'test',
                          answer2:'*test',
                          answer3:'#test',
                          answer4:'.test',
                          correctAns: '.test', id:8
                         },

                         {question:'What is the default value of the position property?',
                         answer1:'absolute',
                         answer2:'relative',
                         answer3:'fixed',
                         answer4:'static',
                         correctAns: 'static', id:9
                        },

                        {question:'Which CSS property controls the text size?',
                        answer1:'text-style',
                        answer2:'font-size',
                        answer3:'font-style',
                        answer4:'text-size',
                        correctAns: 'font-size', id:10
                       }

 ];



function startQuiz(){
    startButton.classList.add('hide');
    cancelBtn.classList.add('hide');
    containerPage.classList.remove('hide');
  }


function  showQuestions(){
      var AllQuestions=document.getElementById('AllQuestions');
      var html = "";
    for(let i=0; i<questionsList.length;i++){
      html +=`
      <div id="question${questionsList[i].id}"  style="display : none;" class=" container-page container"> 
      <div >${questionsList[i].question} </div>
      
      <div>
      <input id="ans${questionsList[i].id}" type="radio"  class ="btn" name="${questionsList[i].id}" value="${questionsList[i].answer1}">
      <label for="ans${questionsList[i].id}">${questionsList[i].answer1}</label>
      </div>

      <div>
      <input id="ans${questionsList[i].id}" type="radio" class ="btn" name="${questionsList[i].id}" value="${questionsList[i].answer2}">
      <label for="ans${questionsList[i].id}">${questionsList[i].answer2}</label>
      </div>
      
      <div>
      <input id="ans${questionsList[i].id}" type="radio" class ="btn" name="${questionsList[i].id}" value="${questionsList[i].answer3}">
      <label for="ans${questionsList[i].id}">${questionsList[i].answer3}</label>
      </div>
      
      <div>
      <input id="ans${questionsList[i].id}" type="radio" class ="btn" name="${questionsList[i].id}" value="${questionsList[i].answer4}" >
      <label for="ans${questionsList[i].id}">${questionsList[i].answer4}</label>
      </div>

      </div>`;
    }

    AllQuestions.innerHTML = html;
  }


function btnSubmitF(){
  
   resume.style.display = "block";
    var grade = 0;
    var questionResume=document.getElementById('tbodyQuestion');
    var grade1=document.getElementById('grade');
    var AllQuestions=document.getElementById('AllQuestions');

    AllQuestions.style.display = "none";
    btnBack1.style.display ="none"; 
    btnNext1.style.display ="none"; 
    btnSubmit.style.display = "none";
    finishButton.classList.remove('hide')
   qCounter.classList.add('hide')
    var html = "";

    for(let i=0; i<questionsList.length;i++){
      var ansSelected = GetAnswer(questionsList[i].id);

      if(ansSelected != null ){
        var correctAns = "No";
        if(ansSelected == questionsList[i].correctAns){
          grade++;
          correctAns = "Yes";
        }
        html += `<tr >
        <td>${questionsList[i].question}</td>
        <td> ${ansSelected}</td>
        <td> ${questionsList[i].correctAns}</td>
        <td>${correctAns}</td>
        </tr>`;
      }
      else{
        html += `<tr>
        <td>${questionsList[i].question}</td>
        <td>No answer selected</td>
        <td>${questionsList[i].correctAns}</td>
        <td>No</td>
        </div>`;
      }
      
    }
    questionResume.innerHTML = html;
    grade1.innerText = 'Your Score is: '+  grade+ '/'+questionsList.length;
  }


function GetAnswer(str){
    var radioButtons = document.getElementsByName(str);
    for(var i = 0; i < radioButtons.length; i++){
     if(radioButtons[i].checked){
       return radioButtons[i].value;
     }
    }
   return null;
  }


function btnStart(){
    startQuiz();
    showQuestions();
    counter = 1;
    document.getElementById("question"+counter).style.display ="block"; 
    btnBack1.style.display ="block"; 
    btnNext1.style.display ="block"; 
    btnSubmit.style.display = "none";
    questionCounter.innerText = counter+"/"+questionsList.length;
 }

function btnBack(){
    const questionCounter= document.getElementById('question-counter');

    if(counter > 1){
      var temp = counter;
      counter--;
      document.getElementById("question"+temp).style.display  = "none"; 
      document.getElementById("question"+counter).style.display ="block"; 
      questionCounter.innerText = counter+"/"+questionsList.length;

      ShowSubmitBtn();
    }
  }

function btnNext(){
    if(counter < questionsList.length){
      var temp = counter;
      counter++;
      document.getElementById("question"+temp).style.display  = "none"; 
      document.getElementById("question"+counter).style.display ="block"; 
      questionCounter.innerText = counter+"/"+questionsList.length;
    }
    ShowSubmitBtn();
  }


function ShowSubmitBtn(){
    if(counter == questionsList.length){
     btnSubmit.style.display = "block";
      btnNext1.style.display ="none"; 
    }
   else{
     btnSubmit.style.display = "none";
     btnNext1.style.display ="block"; 
    }
  } 






