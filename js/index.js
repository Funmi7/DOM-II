// Your code goes here
const container = document.querySelector('.home');
const headings = document.querySelectorAll('h2');
const mainHeadings = document.querySelector('h1');
const navs = document.querySelectorAll('a');
const subHeadings = document.querySelector('.footer');
const text = document.querySelector('input');
const selectedText = document.querySelector('#selectedMessage');
const buttons = document.querySelectorAll('.btn');
const scroll = document.querySelector('.scroll');
const scrollText = document.createElement('p');
const resizedCount = document.querySelector('span');
const sunDiv = document.querySelector('.destination');
const smuButton = document.querySelector('.btn');


//Event Listeners 1
headings.forEach((heading) => {
    heading.addEventListener('mouseover', (event) => {
        event.target.style.color = '#17A2B8';
    
        setTimeout(() => {
            event.target.style.color = '';
        }, 500);
    }, false);
});

//Event Listeners 2
document.addEventListener('keydown', () => {
    mainHeadings.textContent = '';

    setTimeout(() => {
        mainHeadings.textContent = 'Fun Bus';
    }, 1000);
});

//Event Listeners 3
navs.forEach((nav) => {
    nav.addEventListener('focus', (event) => {
        event.target.style.color = '#17A2B8';
    });

    nav.addEventListener('blur', (event) => {
        event.target.style.color = '';    
    });
});

//Event Listeners 4
text.addEventListener('select', () => {
    selectedText.textContent = `The text was selected`;

    setTimeout(() => {
        selectedText.textContent = ``;
    }, 1000);
});

//Event Listeners 5
buttons.forEach((button) => {
    button.addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = '#FFEBCD';

        setTimeout(() => {
            event.target.style.backgroundColor = '';
        }, 1000);
    }); 
});



// Event Listener 6
scroll.addEventListener('scroll', () => {
    container.appendChild(scrollText);
    scrollText.textContent = `This div was scrolled`;

    setTimeout(() => {
        scrollText.textContent = ``;
    }, 1000);
});

//Event Listener 7
function myFunction() {
alert('page loaded successfully');
}

//Event listener 8
window.addEventListener('resize', resizeFunction);

let x = 0;
function resizeFunction() {
    let txt = x += 1;
    alert(`This page was resized ${txt} times`);
}

//Event listener 9
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.style.color = '#FFEBCD';
        
        setTimeout(() => {
            event.target.style.color = '';
        }, 1000);
    });
})

//Event listener 10
let count = 0;
buttons.forEach((button) => {
    button.addEventListener('mouseenter', () =>{
        count++;
        if(count > 4) {
            alert(`You hovered over this button ${count} times`);
        }
    });
});

//Preventing event propagtion
sunDiv.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = 'lime';
});

smuButton.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = 'red';
    event.target.style.border = '1px solid purple';
    event.stopPropagation();
});

//stopped navigation from refreshing the page
navs.forEach((nav) => {
    nav.addEventListener('click', (event) =>{
        event.preventDefault();
    });
});