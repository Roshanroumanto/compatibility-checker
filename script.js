document.getElementById('start-quiz').addEventListener('click', function() {
    const firstName = document.getElementById('partner1-first-name').value;
    if (firstName) {
        document.getElementById('partner1-form').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        document.getElementById('partner-name').innerText = firstName;
    } else {
        alert('Please enter your first name to proceed.');
    }
});
