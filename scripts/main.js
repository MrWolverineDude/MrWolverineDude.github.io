var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, World!';

// An event
document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!');
}
