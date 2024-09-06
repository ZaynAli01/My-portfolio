
const text = "Front-end Developer";
let index = 0;
const speed = 100; // typing speed in milliseconds
const delayBetweenRepeats = 1000; // delay before restarting the animation

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typing-text").textContent = ""; // Clear the text
      index = 0; // Reset the index
      setTimeout(typeText, speed); // Restart typing
    }, delayBetweenRepeats); // Wait before restarting
  }
}

// Start typing animation when the page loads
window.onload = typeText;

