//i need this to gather up the names of all the characters that the person has so that
//it can send a list of those characters to the randomizer to be used later
document.getElementById('submit-selection').addEventListener('click', function () {
    // 1. Find all checkboxes that are checked
    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    
    // 2. Get the IDs of those checkboxes (which are the operator names)
    const selectedOperators = checked.map(cb => cb.id);
    console.log('selection made, printing selection');
    console.log('chosen operators:', selectedOperators); 
    /*
    // 3. Send the list to the server using fetch (POST request)
    fetch('/randomize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operators: selectedOperators })
    })
    .then(response => response.json())
    .then(data => {
        // 4. Handle the server's response (optional)
        console.log(data);
        // You could redirect, display a message, etc.
    })
    .catch(err => console.error(err));
    */
});