// Services Page Form Handling
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate form
        const formData = new FormData(bookingForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        const privacy = formData.get('privacy');
        const terms = formData.get('terms');
        
        if (!name || !email || !phone || !service || !message || !privacy || !terms) {
            alert('Please fill in all required fields and accept the privacy policy and terms.');
            return;
        }
        
        // Simulate form submission
        console.log('Booking form submitted:', {
            name,
            email,
            phone,
            service,
            message,
            privacy,
            terms
        });
        
        // Show success message
        if (bookingSuccess) {
            bookingSuccess.style.display = 'flex';
            bookingForm.reset();
            
            // Scroll to success message
            bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                bookingSuccess.style.display = 'none';
            }, 5000);
        }
    });
}
