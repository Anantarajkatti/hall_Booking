document.getElementById('catForm').addEventListener('submit', function(event) {
     event.preventDefault();

       const errorCode = document.getElementById('errorCode').value;

    // Fetch cat image using the HTTP Cat API
    fetch(`https://httpcats.com/${errorCode}.jpg`)
        .then(response => {
            console.log(response)
            if (!response.status===200) {
                throw new Error('HTTP Error Code not found');
            }
            return response.blob();
        })
        .then(blob => {
            // Convert blob to URL
            const imageURL = URL.createObjectURL(blob);

            // Create and display image
            const catImage = document.createElement('img');
            catImage.setAttribute('src', imageURL);
            catImage.setAttribute('alt', `HTTP Cat for Error Code ${errorCode}`);
            catImage.setAttribute('width', '400');
            document.getElementById('catImageContainer').innerHTML = '';
            document.getElementById('catImageContainer').appendChild(catImage);
        })
        .catch(error => {
          console.log(error)
        });
});

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = 'https://http.cat/{status_code}'; // Replace {status_code} with the actual HTTP status code

// fetch(proxyUrl + apiUrl)
//     .then(response => response.blob())
//     .then(blob => {
//         const imageURL = URL.createObjectURL(blob);
//         const catImage = document.createElement('img');
//         catImage.setAttribute('src', imageURL);
//         catImage.setAttribute('alt', 'HTTP Cat');
//         document.getElementById('catImageContainer').appendChild(catImage);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });