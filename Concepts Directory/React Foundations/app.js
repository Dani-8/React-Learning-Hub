window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = ""
    let threshold = 200

    sections.forEach(section => {
        let sectionTop = section.offsetTop
        if(window.pageYOffset >= sectionTop - threshold){
            current = section.getAttribute('id');
        }
    })


    navLinks.forEach(link => {
        link.classList.remove("active")
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
})


// -------------------------------------------------------------


