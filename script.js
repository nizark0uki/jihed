const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;
const maxDistance = 100; 

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }

    draw() {
        ctx.fillStyle = 'rgba(173, 216, 230, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}


function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
                ctx.strokeStyle = 'rgba(173, 216, 230, 0.1)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}

init();
animate();

// Button functionality
const reconnaissance = document.getElementById("reconnaissance");
const somnelance = document.getElementById("somnelance");
const expressions = document.getElementById("expressions");
const allInOne = document.getElementById("allInOne");

reconnaissance.addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/reconnaissance')
        .then(response => response.json())
        .then(data => alert(data.message))  // Display acknowledgment
        .catch(error => console.error('Error:', error));
});

somnelance.addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/somnelance')
        .then(response => response.json())
        .then(data => alert(data.message))  // Display acknowledgment
        .catch(error => console.error('Error:', error));
});

expressions.addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/expressions')
        .then(response => response.json())
        .then(data => alert(data.message))  // Display acknowledgment
        .catch(error => console.error('Error:', error));
});

allInOne.addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/all-in-one')
        .then(response => response.json())
        .then(data => alert(data.message))  // Display acknowledgment
        .catch(error => console.error('Error:', error));
});
