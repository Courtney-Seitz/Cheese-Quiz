
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

function startQuizTemplate() {
  return `
  <h2>Are You a Cheese Science Wiz?</h2>
  <div class="start-quiz">
    <button type="submit"><img src="IMAGES/CheeseTime.png" alt="Submit" id="mycheese"></button>
  </div>
  `;
}

function questionAndScoreTemplate() {
  return `
    <div class="question-and-score">
      <h2 id="question-number">
        You are on ${STORE.currentQuestion + 1} out of ${STORE.questions.length} questions!
      </h2>
      <h2 id="score">
        You have answered ${STORE.score} of the ${STORE.questions.length} questions correctly!
      </h2>
    </div>
  `;
}

function answersTemplate() {
  const answersArray = STORE.questions[STORE.currentQuestion].answers;
  let answersHtml = '';
  let i = 0;

  answersArray.forEach(answer => {
    answersHtml += `
      <div id="option-container-${i}">
        <input type="radio" name="options" id="option${i + 1}" value="${answer}" tabindex="${i + 1}" required>
        <label for="option${i + 1}"> ${answer}</label>
      </div>
    `;
    i++;
  });
  return answersHtml;
}

function questionsTemplate() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  return `
    <form id="question-form" class="question-form">
      <fieldset>
        <div class="question">
          <legend> ${currentQuestion.question}</legend>
        </div>
        <div class="options">
          <div class="answers">
            ${answersTemplate()}
          </div>
        </div>
        <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
        <button type="button" id="next-question-btn" tabindex="6" disabled="true"> Next </button>
      </fieldset>
    </form >
  `;
}

function resultsTemplate() {
  return `
    <div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <h2>
              <legend>Your final score is ${STORE.score} correct answers out of ${STORE.questions.length} questions</legend>
          </h2>

          <div>
              <button type="button" id="restart"> Restart Quiz </button>
          </div>
        </fieldset>
    </form>
    </div>
  `;
}

function questionFeedbackTemplate(answerStatus) {
  let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    $('fieldset').append(`<div class="correct-answer">YOU ARE CORRECT! Great Job!</div>`);
  } else if (answerStatus === 'incorrect') {
    $('fieldset').append(`<div class="wrong-answer">INCORRECT. The correct answer is ${correctAnswer}.</div>`);
  }
  return html;
}

/********** RENDER FUNCTION **********/

function render() {
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(startQuizTemplate());
    return;
  } else if (STORE.currentQuestion >= 0 && STORE.currentQuestion < STORE.questions.length) {
    html = questionAndScoreTemplate();
    html += questionsTemplate();
    $('main').html(html);
  } else {
    $('main').html(resultsTemplate());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartClick() {
  $('main').on('click', '#mycheese', function(event) {
    STORE.quizStarted = true;
    render();
  });
}

function handleNextQuestionClick() {
  $('body').on('click', '#next-question-btn', (event) => {
    render();
  });
}

function handleQuestionFormSubmission() {
  $('body').on('submit', '#question-form', function(event) {
    event.preventDefault();
    const currentQuestion = STORE.questions[STORE.currentQuestion];

    let selectedOption = $('input[name=options]:checked').val();

    let optionContainerId = `#option-container-${currentQuestion.answers.findIndex(i => i === selectedOption)}`;

    if (selectedOption === currentQuestion.correctAnswer) {
      STORE.score++;
      $(optionContainerId).append(questionFeedbackTemplate('correct'));
    } else {
      $(optionContainerId).append(questionFeedbackTemplate('incorrect'));
    }
    STORE.currentQuestion++;

    $('#submit-answer-btn').hide();

    $('input[type=radio]').each(() => {
      $('input[type=radio]').attr('disabled', true);
    });

    $('#next-question-btn').removeAttr('disabled');

  });
}

function restartQuiz() {
  STORE.quizStarted = false;
  STORE.currentQuestion = 0;
  STORE.score = 0;
}

function handleRestartButtonClick() {
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

$(handleQuizApp);
