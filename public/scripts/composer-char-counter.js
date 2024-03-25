// New tweet character limit count down//

$(document).ready(function() {
  const textCount = $('#tweet-text');

  textCount.on('input', () => {
    let textLength = textCount.val().length;
    const maxText = 140;
    const number = $('.counter');
    number.text(maxText - textLength);
    if ((maxText - textLength) <= 0) {
      $(number).addClass("max-exceeded");
    } else {
      $(number).removeClass("max-exceeded");
    }
  });
});