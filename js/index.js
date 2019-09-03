// Your code goes here

const headings = document.querySelectorAll("h2");

headings.forEach((heading) =>{
    heading.addEventListener('mouseover', (event) => {
        event.target.style.color = '#17A2B8';
    
        setTimeout(() => {
            event.target.style.color = '';
        }, 500);
    }, false);
});
