document.addEventListener("DOMContentLoaded", function() {
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            
            const imageUrl = data.message;
            const imageElement = document.getElementById("randomImage");
            imageElement.src = imageUrl;
        })
        .catch(error => {
            console.error("Hiba történt:", error);
        });
});