// Select all images with the class 'card-image'
const images = document.querySelectorAll('.card-image');

// Function to play sound on hover
const playSoundOnHover = (event) => {
    const audio = new Audio(event.target.dataset.sound); // Get sound file from data attribute
    event.target.audio = audio; // Attach audio object to the image element
    audio.play();
};

// Function to stop sound when hover ends
const stopSoundOnHoverEnd = (event) => {
    if (event.target.audio) {
        event.target.audio.pause(); // Pause the audio
        event.target.audio.currentTime = 0; // Reset audio to the start
        event.target.audio = null; // Remove the audio reference
    }
};

// Add event listeners to each image
images.forEach(image => {
    image.addEventListener('mouseover', playSoundOnHover);
    image.addEventListener('mouseout', stopSoundOnHoverEnd);
});

    document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById('background-audio');
        var cardImages = document.querySelectorAll('.card-image');

        // Check if audio element exists
        if (!audio) {
            console.error('Audio element not found!');
            return;
        }

        // Play audio
        audio.loop = true; // Optional: Loop the audio if needed
        audio.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });

        // Stop audio on card image hover
        cardImages.forEach(function(img) {
            img.addEventListener('mouseover', function() {
                audio.pause();
            });

            img.addEventListener('mouseleave', function() {
                audio.play().catch(function(error) {
                    console.error('Error resuming audio:', error);
                });
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const audio = new Audio('https://storage.googleapis.com/intercon_zoe_sounds/commercial-aircraft-pre-flight-instructions-56658.mp3');
        let isPlaying = false;
    
        function playAudio() {
            if (!isPlaying) {
                audio.play().catch(error => {
                    console.error('Error playing audio:', error);
                });
                isPlaying = true;
            }
        }
    
        function stopAudio() {
            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0; // Reset audio to the beginning
                isPlaying = false;
            }
        }
    
        document.addEventListener('mouseover', function () {
            playAudio();
        });
    
        document.querySelectorAll('.card-image').forEach(card => {
            card.addEventListener('mouseover', function () {
                stopAudio();
            });
        });
    
        document.querySelectorAll('.card-image').forEach(card => {
            card.addEventListener('mouseout', function () {
                playAudio();
            });
        });
    });
    