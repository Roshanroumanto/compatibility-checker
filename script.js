
document.getElementById('partner1-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the data from Partner 1's form
    const partner1FirstName = document.getElementById('partner1-first-name').value;
    const partner1LastName = document.getElementById('partner1-last-name').value;
    const partner1Gender = document.getElementById('partner1-gender').value;
    const partner1Age = document.getElementById('partner1-age').value;
    
    // Process the form data and store it as needed
    console.log('Partner 1 Info:', partner1FirstName, partner1LastName, partner1Gender, partner1Age);
    
    // Optionally, redirect to the next page or show the questions
    alert('Partner 1 Info Submitted');
});
