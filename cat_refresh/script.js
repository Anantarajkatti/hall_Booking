document.getElementById('refreshButton').addEventListener('click', function() {
    fetch('https://cataas.com/cat') // Fetch the cat image
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob(); // Convert response to blob
      })
      .then(blob => {
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        document.getElementById('catImage').src = url; // Set image source to the blob URL
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });