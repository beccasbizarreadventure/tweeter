/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

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
      <p>${tweet.content.text}</p>
    </div>
    <footer>
      <span class="date">${new Date(tweet.created_at).toLocaleString()}</span>
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

const renderTweets = (tweets) => {
  for (entry of tweets) {
    let createdTweet = createTweetElement(entry);
    $('.tweet-container').prepend(createdTweet);
  }
};

renderTweets(data);
});