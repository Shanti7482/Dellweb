const myBtn = document.getElementById('myBtn')

    
// When the user scrolls down 10px from the top of the document, show the button

const scrollFunction = () =>{
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) 
    {
        myBtn.style.display = "block";
    } 
    else 
    {
        myBtn.style.display = "none";
    }
}
window.onscroll = () => {scrollFunction()};



// When the user clicks on the button, scroll to the top of the document

const topFunction = () => {
document.body.scrollTop = 0;                // For Safari
document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
}