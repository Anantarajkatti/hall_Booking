document.addEventListener('DOMContentLoaded', function() {
    const duckContainer = document.getElementById('duckContainer');
    const newDuckButton = document.getElementById('newDuckButton');

    // Function to fetch and display a random duck image
    function fetchRandomDuck() {
        fetch('https://random-d.uk/api/v2/random')
            .then(response => response.json())
            .then(data => {
                const duckImage = document.createElement('img');
                duckImage.setAttribute('src', data.url);
                duckImage.setAttribute('alt', 'Random Duck');
                duckContainer.innerHTML = '';
                duckContainer.appendChild(duckImage);
            })
            .catch(error => {
                console.error('Error fetching duck image:', error);
            });
    }

    // Fetch random duck image when the page loads
    fetchRandomDuck();

    // Add event listener to the button to fetch another duck image
    newDuckButton.addEventListener('click', fetchRandomDuck);
});