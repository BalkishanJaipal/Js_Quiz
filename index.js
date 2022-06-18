var quizdata = [
    
      {  
        question: 'Which framework is for JavaScript?',

        a:'React',
        b:'flask',
        c:'.net',
        d:'django',
        correct:'a'
      },

      {
        question: 'Which is not a programming language?',
        a :'HTML',
        b: 'Java',
        c: 'C++',
        d: 'Javascript',
        correct :'a'
      },


      {
        question: 'Which is not a framework?',
        a :'Django',
        b: 'React',
        c: 'Anguar',
        d: 'Javascript',
        correct :'d'
      },

      {
        question: 'CSS stands for?',
        a :'Cascading style state',
        b: 'Cascading style sheet',
        c: 'Cascading sheet of style ',
        d: 'none',
        correct :'b'
      }

    
]


var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question =  document.getElementById('question')

var option_a  = document.getElementById('a_value')
var option_b  = document.getElementById('b_value')
var option_c  = document.getElementById('c_value')
var option_d  = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion =0
var quizscore = 0

loadQuiz()
function loadQuiz(){
      
       deselect()

      question.innerHTML = quizdata[currentQuestion].question

      option_a.innerText = quizdata[currentQuestion].a

      option_b.innerText = quizdata[currentQuestion].b

      option_c.innerText = quizdata[currentQuestion].c

      option_d.innerText = quizdata[currentQuestion].d

}

 function deselect()
 {
         answer.forEach(answer=>answer.checked = false)
 }

 submitbtn.addEventListener('click', ()=>{


    var selectedOption;

    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedOption = answer.id
        }
    })

    if(selectedOption == quizdata[currentQuestion].correct)
    {
        quizscore = quizscore+1
    }

    currentQuestion = currentQuestion+1

   if(currentQuestion == quizdata.length)
   {
       document.getElementById('quizdiv').innerHTML = ` <h3> You have answered ${quizscore}/${ quizdata.length} questions correctly.</h3><br>
    

       `

     


   }
   else{
    loadQuiz()
   }

      

 })
//  var reloadbutton = document.getElementById('reload');

//  reloadbutton.addEventListener('click' ,()=>
//  {
//      currentQuestion = 0;
//      loadQuiz();
//  })