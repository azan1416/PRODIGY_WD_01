// Change navbar background color on scroll
Document.addEventListener("DomContentLoaded",()=>{
    const navbar = Document.queryselector("#navbar");




window.addEventListener('scroll', function() {
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
});
