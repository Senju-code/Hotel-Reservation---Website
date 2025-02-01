document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    if (new Date(checkout) <= new Date(checkin)) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    const message = `Thank you, ${name}! Your reservation for a ${roomType} from ${checkin} to ${checkout} has been confirmed.`;
    
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = message;
    confirmationMessage.classList.remove('hidden');

    this.reset();
});
