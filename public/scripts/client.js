/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
const createTweetElement = function(tweetData) {
  const $tweet = $(`
  <article class="tweet">
    <header class="tweet-header">
      <div class="user-info">
        <img src="${tweetData.user.avatars}" class="user-icon"/>
        <span class="name">${tweetData.user.name}</span>
      </div>
        <span class="handle">${tweetData.user.handle}</span>
    </header>
    <div class="posted-tweet">
      <p>${tweetData.content.text}</p>
    </div>
    <footer>
      <span class="date">${new Date(tweetData.created_at).toLocaleString()}</span>
      <span class="icons">
      <i class="fa-solid fa-font-awesome"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
    </footer>
  </article>
  `);
  return $tweet;
}


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// to see what it looks like
$('main.container').append($tweet);
console.log($tweet);
console.log($('main.container')) // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});