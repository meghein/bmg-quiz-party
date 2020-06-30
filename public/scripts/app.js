// const escape = require('./escape.js')

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/users"
//   }).done((users) => {
//     console.log(users);
//     for (user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
// });


// MAIN QUIZ CONTAINER FUNCTIONALITY TO LOAD QUIZ CARDS //

const createQuizElement = function(quiz) {
  console.log(quiz);
  const $quizElement = `
    <article id="quiz">
      <a class="text-reset" href="/quizzes/${quiz.id}">
        <header>
          <h4>${quiz.name}</h4>
        </header>
      </a>
      <a class="text-reset" href="/quizzes/results/${quiz.id}">
        <footer>
          <h6>Results</h6>
        </footer>
      </a>
    </article>
    `;
  return $quizElement;
};

const renderQuizzes = function(quizzes) {
  // console.log(quizzes)
  const quizArr = [];
  for (let title in quizzes) {
    const quizObj = quizzes[title];
    for (let quiz of quizObj) {
      console.log(quiz);
      quizArr.push(createQuizElement(quiz));
    }
  }
  $('#quizzes-container').append(quizArr);
};

const loadQuizzes = function() {
  $.ajax({
    url: '/quizzes/json',
    method: 'GET',
    dataType: 'JSON'
  }).then(function(response) {
    console.log(response);
    renderQuizzes(response);
  });
};

$(document).ready(() => {
  console.log('ready');
  loadQuizzes();

<<<<<<< HEAD
=======

  // SPECIFIC QUIZ RENDER //



>>>>>>> 0bb5d0604382e84a173af946643ccfa5e1c3c352
  let shown = false;
  $("#create_new_quiz").on('click', function() {
    if (!shown) {
      console.log("WHEE")
      $("#new_quiz_container").slideDown();
      $("#new_quiz_container").css("display", "block");
      shown = true;
    } else {
      console.log("GOODBYE")
      $("#new_quiz_container").slideUp();
      shown = false;
    }
  });
  /////////////////////////////////

  // let error = false;
  // $('#new_quiz_form').submit(function(evt) {
  //   evt.preventDefault();
  //   $(".isa_error").css("display", "none");

  //   $.ajax({
  //     url: '/tweets',
  //     method: 'POST',
  //     data: $(this).serialize(),
  //   })
  // })
  /////////////////////////////////////
})



// event listener for submit button, prevent default and then do ajax post with form data, response json object (info), create html modal (bootstrap), disable inputs and button after



  // $.ajax({
  //   method: "GET",
  //   url: "/quizzes/new"
  // }).then(())


  // $.fn.loadNewQuizForm = function() {
  //   $.ajax('/quizzes/new', { method: 'GET' })
  //     .then(function(data) {
  //       // $('#tweets-container').empty();
  //       console.log(data)
  //       $('#new_quiz_container').
  //     });

    // })
    //  POST REQUEST STRUCTURE
    // // $.ajax({
    //   url: '/tweets',
    //   method: 'POST',
    //   data: $(this).serialize(),
    // })
    //   .then(function() {
    //     $('#tweet-text').val('');
    //     $('#char-counter').text(140);
    //     $.fn.loadTweets();
    //   });


// That’s where our jQuery should go for the newQuiz slider for example.
