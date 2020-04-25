var fname = document.querySelector('#fnsame');
var lname = document.querySelector('#lnsame');
var country = document.querySelector('#country');
var gpass = document.querySelector('.getpass');

var clickButton = document.querySelector('#button');



function submit() {
    gpass.classList.add('showing');


}

function main() {
    clickButton.addEventListener('click', submit);
}

main();