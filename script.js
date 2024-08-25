document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add event listener to the Learn More button
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Simulate form submission
            alert(`Thank you for your message, ${name}!`);
            // Reset the form
            this.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Optional: Simple image carousel (if desired)
    const images = [
        'images/library.jpg',
        'images/computer-room.jpg',
        'images/chemistry-laboratory.jpg',
        'images/physics-laboratory.jpg',
        'images/crowd-of-students.jpg'
    ];

    let currentImageIndex = 0;
    const imageElement = document.createElement('img');
    imageElement.src = images[currentImageIndex];
    imageElement.alt = 'Facilities Carousel';
    imageElement.style.width = '100%';
    imageElement.style.maxWidth = '600px';
    imageElement.style.borderRadius = '8px';
    document.querySelector('.facilities').prepend(imageElement);

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
    }, 3000); // Change image every 3 seconds
});