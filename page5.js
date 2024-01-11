var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}

/* stopwatch*/
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
  
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
  
startButton.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
stopButton.addEventListener('click', function () {
    timer = false;
}); 
resetButton.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let countString = count;
        if (hour < 10) {
            hourString = "0" + hourString;
        }
        if (minute < 10) {
            minuteString = "0" + minuteString;
        }
        if (second < 10) {
            secondString = "0" + secondString;
        }
  
        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById('hour').innerHTML = hourString;
        document.getElementById('minute').innerHTML = minuteString;
        document.getElementById('second').innerHTML = secondString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
var submitButton = document.getElementById('sub');
    submitButton.addEventListener('click', function() {
        alert('Button Clicked!');
    });

// to do lista

var tasks = [];

function addTask() {
    var newTaskInput = document.getElementById('newTask');
    var taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        // Create a task object
        var task = {
            text: taskText,
            completed: false
        };
     
        tasks.push(task);
        updateTaskList();

        newTaskInput.value = '';
    }
}

function updateTaskList() {
    var taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    tasks.forEach(function (task, index) {
        var taskItem = document.createElement('div');
        taskItem.classList.add('task');

        var taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener('change', function () {
            toggleTaskCompletion(index);
        });

        var taskText = document.createElement('span');
        taskText.textContent = task.text;

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            removeTask(index);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(removeButton);

        taskListContainer.appendChild(taskItem);
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

updateTaskList();

var expenses = [
  { category: 'Groceries', amount: 50 },
  { category: 'Dining', amount: 30 },
  { category: 'Transportation', amount: 20 },
  // Add more expenses as needed
];

function displayExpenses(expensesArray = expenses) {
  var expenseListContainer = document.getElementById('expenseList');
  expenseListContainer.innerHTML = '';

  expensesArray.forEach(function (expense) {
      var expenseItem = document.createElement('div');
      expenseItem.classList.add('expense');

      var categoryText = document.createElement('span');
      categoryText.textContent = expense.category;

      var amountText = document.createElement('span');
      amountText.textContent = '$' + expense.amount;

      expenseItem.appendChild(categoryText);
      expenseItem.appendChild(amountText);

      expenseListContainer.appendChild(expenseItem);
  });

  displayExpenseSummary(expensesArray);
}

function filterExpenses(category) {
  var filteredExpenses = expenses.filter(function (expense) {
      return expense.category === category;
  });

  displayExpenses(filteredExpenses);
}

function displayExpenseSummary(expensesArray) {
  var expenseSummaryContainer = document.getElementById('expenseSummary');
  expenseSummaryContainer.innerHTML = '';

  var totalExpense = expensesArray.reduce(function (accumulator, expense) {
      return accumulator + expense.amount;
  }, 0);

  var totalText = document.createElement('p');
  totalText.textContent = 'Total Expense: $' + totalExpense;

  expenseSummaryContainer.appendChild(totalText);
}

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            answers: { a: "Paris", b: "London", c: "Berlin", d: "Rome" },
            correctAnswer: "a"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: { a: "Earth", b: "Venus", c: "Mars", d: "Jupiter" },
            correctAnswer: "c"
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: { a: "Atlantic Ocean", b: "Indian Ocean", c: "Arctic Ocean", d: "Pacific Ocean" },
            correctAnswer: "d"
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById('quiz-question');
    const answersElement = document.getElementById('quiz-answers');
    const submitButton = document.getElementById('submitAnswer');
    const nextButton = document.getElementById('nextQuestion');
    const resultElement = document.getElementById('quiz-result');

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;

        answersElement.innerHTML = Object.keys(currentQuestion.answers).map(key => 
            `<label>
                <input type="radio" name="answer" value="${key}">
                ${key}: ${currentQuestion.answers[key]}
             </label>`
        ).join('<br>');

        nextButton.style.display = 'none';
        resultElement.innerText = '';
    }

    function showResult(isCorrect) {
        const result = isCorrect ? 'Correct!' : 'Wrong!';
        resultElement.innerText = result;

        if (isCorrect) {
            score++;
        }
    }

    submitButton.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert('Please select an answer.');
            return;
        }

        const isCorrect = selectedAnswer.value === quizData[currentQuestionIndex].correctAnswer;
        showResult(isCorrect);
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';

        if (currentQuestionIndex === quizData.length - 1) {
            setTimeout(() => {
                resultElement.innerText = `Quiz Completed! Your score: ${score}/${quizData.length}`;
                submitButton.style.display = 'none';
                nextButton.style.display = 'none';
            }, 1000);
        }
    });

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            submitButton.style.display = 'block';
        }
    });

    loadQuestion();
});

class Expense {
    constructor(name, amount, date, category) {
      this.name = name;
      this.amount = amount;
      this.date = new Date(date);
      this.category = category;
    }
 
    format() {
      return `${this.name}: $${this.amount.toFixed(2)} on ${this.date.toDateString()}`;
    }
  }
  
  function validateName(name) {
    if (name.trim() === '') throw new Error('Item name is required.');
  }
  
  function validateAmount(amount) {
    if (isNaN(amount) || amount <= 0) throw new Error('Invalid amount.');
  }
  
  function validateCategory(category) {
    if (!category.match(/^[a-zA-Z]+$/)) throw new Error('Invalid category format.');
  }
  
  document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    try {
      const name = document.getElementById('item-name').value;
      const amount = Number(document.getElementById('amount').value);
      const date = document.getElementById('expense-date').value;
      const category = document.getElementById('category').value;
  
      validateName(name);
      validateAmount(amount);
      validateCategory(category);
  
      const expense = new Expense(name, amount, date, category);
      document.getElementById('expenses-list').innerHTML += `<p>${expense.format()}</p>`;
    } catch (error) {
      document.getElementById('error-message').textContent = error.message;
    }
  });
  
