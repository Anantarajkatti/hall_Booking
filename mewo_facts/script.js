document.getElementById('getFactsButton').addEventListener('click', function() {
    const factCount = document.getElementById('factCount').value;
    if (!factCount || factCount <= 0) {
      alert('Please enter a valid number of facts');
      return;
    }
  
    fetch(`https://meowfacts.herokuapp.com/?count=${factCount}`)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const factList = document.getElementById('factList');
        factList.innerHTML = ''; // Clear existing facts
        data.data.forEach(fact => {
          const li = document.createElement('li');
          li.textContent = fact;
          factList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });