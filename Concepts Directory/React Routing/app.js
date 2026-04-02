window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.hook-section')
    const navLinks = document.querySelectorAll('.nav-link')
    let current = "";
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 270) {
            current = section.getAttribute('id')
        }
    })
    navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active')
        }
    })
})



// --------------------
// --------------------
// --------------------


function simulateNavigate() {
    document.getElementById('browser-url').innerHTML = '/'

    const detail = document.getElementById('content-detail')
    const home = document.getElementById('content-home')

    detail.classList.add('opacity-0')

    setTimeout(() => {
        detail.classList.add('hidden');
        home.classList.remove('hidden');
        setTimeout(() => home.classList.remove('opacity-0'), 10)
    }, 300);
}

function resetSimulate() {
    document.getElementById('browser-url').innerHTML = '/user/<span class="text-indigo-400 font-bold">99</span>'
    
    const detail = document.getElementById('content-detail')
    const home = document.getElementById('content-home')

    home.classList.add('opacity-0')

    setTimeout(() => {
        home.classList.add('hidden');
        detail.classList.remove('hidden');
        setTimeout(() => detail.classList.remove('opacity-0'), 10);
    }, 300);
}







