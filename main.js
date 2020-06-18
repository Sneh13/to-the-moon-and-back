//Select element function
const selectElement = (element) => {
    return document.querySelector(element);
};

const menuToggler = selectElement('.meneutoggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});

//for pass
let clickButton = document.querySelector('#button');


// pass
let to = document.querySelector('#to');

function submit() {
    // adding class
    let gpass = document.querySelector('.getpass');
    gpass.classList.add('showing')
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let name = `${fname} ${lname}`;

    let country = document.querySelector('#country').value;

    // display
    let na = document.querySelector('#na');
    na.innerHTML = `${name}`;
    na.style.fontSize = '3rem';

    let from = document.querySelector('.from');
    from.innerHTML = country;




}

function main() {
    clickButton.addEventListener('click', submit);
}

main();

// scrollReavel

ScrollReveal().reveal('.tile', {
    interval: 16,
    reset: true
});


sr.reveal('.imgLeft', {
    origin: 'left',
    duration: 100,
    distance: '25rem',
    delay: 10,
});




sr.reveal('.animation-right', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300,
});


sr.reveal('.animation-Up', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600,
});