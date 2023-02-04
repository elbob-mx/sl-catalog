const readMore = document.getElementById('readMore');
const readLess = document.getElementById('readLess');
const hiddenText = document.getElementById('hiddenText');

readMore.addEventListener('click', function() {
  hiddenText.style.display = 'block';
  readMore.style.display = 'none';
});

readLess.addEventListener('click', function() {
  hiddenText.style.display = 'none';
  readMore.style.display = 'block';
});
