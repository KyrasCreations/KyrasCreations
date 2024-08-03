document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let amount = document.getElementById('amount').value;

    alert(`Payment of $${amount} from ${name} (${email}) has been processed!`);

    // Reset form
    e.target.reset();
});
