// Create random stars in the background
function generateStars() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 300; // Number of stars in the background
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize position, size, and animation duration
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const starSize = Math.random() * 2 + 1 + 'px'; // Random star size from 1px to 3px
        const animationDelay = Math.random() * 3 + 's'; // Random animation delay
        
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;
        star.style.width = starSize;
        star.style.height = starSize;
        star.style.animationDelay = animationDelay;
        
        starContainer.appendChild(star);
    }
}

// Run the star generation when the page loads
window.onload = generateStars;
