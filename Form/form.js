document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foodChoices = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(food => food.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Add form values to table
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cells = [
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell()
    ];
    cells[0].textContent = firstName;
    cells[1].textContent = lastName;
    cells[2].textContent = address;
    cells[3].textContent = pincode;
    cells[4].textContent = gender;
    cells[5].textContent = foodChoices.join(', ');
    cells[6].textContent = state;
    cells[7].textContent = country;

    // Clear form fields
    document.getElementById('myForm').reset();
});