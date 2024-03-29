/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// Function to prevent users imputting unsafe text that would break the page//

$(".errorText").hide()

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Formatting framework for new text published //

const createTweetElement = (tweet) => {
  const $tweet = $(`
  <article class="tweet">
    <header class="tweet-header">
      <div class="user-info">
        <img src="${tweet.user.avatars}" class="user-icon"/>
        <span class="name">${tweet.user.name}</span>
      </div>
        <span class="handle">${tweet.user.handle}</span>
    </header>
    <div class="posted-tweet">
      <p>${escape(tweet.content.text)}</p>
    </div>
    <footer>
      <span class="date">${timeago.format(tweet.created_at)}</span>
      <span class="icons">
      <i class="fa-solid fa-font-awesome"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
    </footer>
  </article>
  `);
  return $tweet;
};

// Add new tweet to page //

const renderTweets = (tweets) => {
  $('.tweet-container').empty();
  for (entry of tweets) {
    let createdTweet = createTweetElement(entry);
    $('.tweet-container').prepend(createdTweet);
  }
};

// Submit post event and error handling. Post submission without refreshing page // 

$( "#postTweet" ).on( "submit",( event ) => {
  event.preventDefault();
  const textCount = $('#tweet-text');
  const textLength = (textCount.val().trim().length);
  if (textLength === 0) {
    $("#errorEmptyText").slideDown(400, function() {
      setTimeout(() => { $("#errorEmptyText").slideUp(400);
      }, 1000);
    });
    return;
  }
  if (textLength >= 140) {
    $("#errorTooMuchText").slideDown(400, function() {
      setTimeout(() => { $("#errorTooMuchText").slideUp(400);
      }, 1000);
    });
    return;
  }
  let formData = ( $( "#postTweet" ).serialize() );

  $.ajax({
    type: "POST",
    url: "/tweets/",
    data: formData,
  }).then((response) => {
      loadtweets(response);
      $('#tweet-text').val('');
      $('.counter').text('140');
  }).catch((error) => {
      console.error(error);
  });
});

// Load tweet data from /tweets page //

const loadtweets = () => {
  $.ajax({
    type: "GET",
    url: "/tweets/",
  }).then((response) => {
    renderTweets(response);
  }).catch((error) => {
    console.error(error);
  });
}

loadtweets();

});