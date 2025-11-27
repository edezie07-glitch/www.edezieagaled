document.write("This is a JS code");
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".eye").forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const pupil = eye.querySelector(".pupil");

        const maxMove = 6;
        const x = Math.cos(angle) * maxMove;
        const y = Math.sin(angle) * maxMove;

        pupil.style.transform = `translate(${x}px, ${y}px)`;

        
    });
});


