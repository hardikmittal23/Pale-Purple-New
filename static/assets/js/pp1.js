let slideIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
        setTimeout(showSlidesAuto, 4000);
}


function plusSlides(n) {
        slideIndex += n - 1;
        if (slideIndex < 0) slideIndex = 0;
        showSlidesAuto();
}
function currentSlide(n) {
        slideIndex = n - 1;
        showSlidesAuto();
}

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
            const product_id = this.getAttribute('data-product-id');
            const product_name = this.getAttribute('data-product-name');
            const quantity = this.getAttribute('data-quantity');

            fetch('http://localhost:3000/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ product_id, product_name, quantity })
            })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    alert('Added to cart!');
                } else {
                    alert('Failed to add to cart.');
                }
            })
            .catch(() => alert('Server error!'));
    });
});