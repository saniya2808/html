// Smooth scrolling to section when clicking on nav link
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    bgMusic.volume = 0.3;

    const playMusicButton = document.getElementById("play-music");
    playMusicButton.addEventListener("click", () => {
        bgMusic.play();
    });

    // Play hover sound effect on start button hover
    const startButton = document.querySelector(".lets-play");
    const hoverSound = document.getElementById("hover-sound");
    startButton.addEventListener("mouseover", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});

// ...


