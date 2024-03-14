$(document).ready(function() {
  const textCount = $('#tweet-text');

  textCount.on('input', () => {
    let textLength = textCount.val().length;
    const number = $('.counter');
    number.text(140 - textLength);
    if ((140 - textLength) <= 0) {
      $(number).addClass("max-exceeded");
    } else {
      $(number).removeClass("max-exceeded");
    }
  });
});