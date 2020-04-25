let clickButton = document.querySelector('#button');


// pass

// let to = document.querySelector('#to');



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
    na.innerHTML = `<h5>Name:</h5> ${name}`;
    na.style.fontSize = '1rem';

    let from = document.querySelector('.from');
    from.innerHTML = country;




}

function main() {
    clickButton.addEventListener('click', submit);
}

main();