document.addEventListener('DOMContentLoaded', function() {
    // Form submission alert
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Search functionality
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                const name = product.getAttribute('data-name').toLowerCase();
                if (name.includes(query)) {
                    product.style.display = 'inline-block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }

    // Add to Cart and Buy Now functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });

    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', function() {
            alert('Proceeding to checkout!');
        });
    });
});
