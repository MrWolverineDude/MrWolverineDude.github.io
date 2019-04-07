var myImage = document.querySelector('img');

myImage.onclick = function() {
  mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox_logo.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox_logo.png');
  }
}
