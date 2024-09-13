function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

    document.addEventListener('DOMContentLoaded', function () {
const images = document.querySelectorAll('img');
    let mouseX = window.innerWidth / 2; // Default to center

    function handleMouseMove(event) {
        mouseX = event.clientX;
}

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const rect = img.getBoundingClientRect();
                const imgCenterX = rect.left + rect.width / 2;
                const middleX = window.innerWidth / 2;

                if (!img.classList.contains('stay-visible')) {
                    img.classList.add('stay-visible'); 
                }

                if (!img.classList.contains('animate-left') && !img.classList.contains('animate-right')) {
                    if (mouseX < middleX) {
                        img.classList.add(img.dataset.index % 2 === 0 ? 'animate-left' : 'animate-right');
                    } else {
                        img.classList.add(img.dataset.index % 2 === 0 ? 'animate-right' : 'animate-left');
                    }
                }

               
                setTimeout(() => {
                    img.classList.remove('animate-left', 'animate-right');
                }, 10000);
            }
        });
}

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 
});

images.forEach((img, index) => {
        img.dataset.index = index; 
    observer.observe(img);
});

    document.addEventListener('mousemove', handleMouseMove);
});



document.addEventListener('DOMContentLoaded', function () {
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body'); 


function showSidebar() {
sidebar.style.display = 'block';
body.classList.add('sidebar-open'); 
}

// Function to hide the sidebar
function hideSidebar() {
sidebar.style.display = 'none';
body.classList.remove('sidebar-open'); 
}

// Attach the hideSidebar function to the sidebar close button
document.querySelector('.sidebar li a').addEventListener('click', hideSidebar);
});