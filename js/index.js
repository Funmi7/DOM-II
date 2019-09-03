// Your code goes here

const headings = document.querySelectorAll('h2');
const mainHeadings = document.querySelector('h1');
const navs = document.querySelectorAll('a');
const subHeadings = document.querySelector('.footer');
const text = document.querySelector('input');
const selectedText = document.querySelector('#selectedMessage')
const buttons = document.querySelectorAll('.btn');

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
