const canvas = document.getElementById('universeCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

function drawStars() {
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawNebula() {
    for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100 + 50;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(128, 0, 128, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateTransition(drawFunc, duration) {
    const start = performance.now();
    function animate(time) {
        const elapsed = time - start;
        if (elapsed < duration) {
            drawFunc(elapsed / duration);
            requestAnimationFrame(animate);
        } else {
            drawFunc(1);
        }
    }
    requestAnimationFrame(animate);
}

function drawExplosion(x, y, radius, progress) {
    const explosionRadius = radius * progress;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, explosionRadius);
    gradient.addColorStop(0, `rgba(255, 165, 0, ${1 - progress})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, explosionRadius, 0, Math.PI * 2);
    ctx.fill();
}

function drawBigBang(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    drawExplosion(canvas.width / 2, canvas.height / 2, 50, progress);
}

function drawMilkyWayFormation(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    ctx.fillStyle = `rgba(0, 0, 255, ${progress})`;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50 * progress, 0, Math.PI * 2);
    ctx.fill();
}

function drawSolarSystemFormation(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    ctx.fillStyle = `rgba(255, 255, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 30 * progress, 0, Math.PI * 2);
    ctx.fill();
}

function drawPlanets(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    
    const sunX = canvas.width / 2;
    const sunY = canvas.height / 2;

    ctx.fillStyle = `rgba(255, 255, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 30, 0, Math.PI * 2);
    ctx.fill();

    const planets = [
        { name: 'Mercúrio', color: 'gray', distance: 50, size: 5 },
        { name: 'Vênus', color: 'yellow', distance: 70, size: 8 },
        { name: 'Terra', color: 'blue', distance: 90, size: 10 },
        { name: 'Marte', color: 'red', distance: 110, size: 8 },
        { name: 'Júpiter', color: 'orange', distance: 150, size: 20 },
        { name: 'Saturno', color: 'gold', distance: 200, size: 18 },
        { name: 'Urano', color: 'lightblue', distance: 250, size: 15 },
        { name: 'Netuno', color: 'blue', distance: 300, size: 15 }
    ];

    planets.forEach(planet => {
        ctx.fillStyle = `rgba(${planet.color}, ${progress})`;
        ctx.beginPath();
        ctx.arc(sunX + planet.distance * progress, sunY, planet.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawLifeOnMars(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const marsX = canvas.width / 2;
    const marsY = canvas.height / 2;
    
    ctx.fillStyle = `rgba(255, 0, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(marsX, marsY, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(0, 255, 0, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Vida em Marte', marsX - 30, marsY + 20);
}

function drawMarsCoreSolidification(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const marsX = canvas.width / 2;
    const marsY = canvas.height / 2;
    
    ctx.fillStyle = `rgba(255, 0, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(marsX, marsY, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(128, 128, 128, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Núcleo Solidificado', marsX - 50, marsY + 20);
}

function drawSolarWindOnMars(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const marsX = canvas.width / 2;
    const marsY = canvas.height / 2;
    
    ctx.fillStyle = `rgba(255, 0, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(marsX, marsY, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = `rgba(255, 255, 0, ${progress})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(marsX - 50, marsY);
    ctx.lineTo(marsX + 50, marsY);
    ctx.stroke();

    ctx.fillStyle = `rgba(255, 255, 0, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Ventos Solares', marsX - 30, marsY + 20);
}

function drawMoonFormation(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const earthX = canvas.width / 2;
    const earthY = canvas.height / 2;
    
    ctx.fillStyle = `rgba(0, 0, 255, ${progress})`;
    ctx.beginPath();
    ctx.arc(earthX, earthY, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(128, 128, 128, ${progress})`;
    ctx.beginPath();
    ctx.arc(earthX + 15 * progress, earthY, 3, 0, Math.PI * 2);
    ctx.fill();
}

function drawLifeOnEarth(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const earthX = canvas.width / 2;
    const earthY = canvas.height / 2;
    
    ctx.fillStyle = `rgba(0, 0, 255, ${progress})`;
    ctx.beginPath();
    ctx.arc(earthX, earthY, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(0, 255, 0, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Vida na Terra', earthX - 30, earthY + 20);
}

function drawTheiaImpact(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const earthX = canvas.width / 2;
    const earthY = canvas.height / 2;

    ctx.fillStyle = `rgba(0, 0, 255, ${progress})`;
    ctx.beginPath();
    ctx.arc(earthX, earthY, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(128, 0, 128, ${progress})`;
    ctx.beginPath();
    ctx.arc(earthX - 20 * progress, earthY, 10, 0, Math.PI * 2);
    ctx.fill();
}

function drawSaturnRings(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const saturnX = canvas.width / 2;
    const saturnY = canvas.height / 2;

    ctx.fillStyle = `rgba(255, 215, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(saturnX, saturnY, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(saturnX, saturnY, 25, 0, Math.PI * 2);
    ctx.stroke();
}

function drawPlutoDiscovery(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const plutoX = canvas.width / 2;
    const plutoY = canvas.height / 2;

    ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.beginPath();
    ctx.arc(plutoX, plutoY, 8, 0, Math.PI * 2);
    ctx.fill();
}

function drawHypotheticalPlanets(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const hypotheticalX = canvas.width / 2;
    const hypotheticalY = canvas.height / 2;

    ctx.fillStyle = `rgba(128, 0, 128, ${progress})`;
    ctx.beginPath();
    ctx.arc(hypotheticalX - 60 * progress, hypotheticalY, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(0, 0, 128, ${progress})`;
    ctx.beginPath();
    ctx.arc(hypotheticalX + 80 * progress, hypotheticalY, 12, 0, Math.PI * 2);
    ctx.fill();
}

function drawSunDeath(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawNebula();
    const sunX = canvas.width / 2;
    const sunY = canvas.height / 2;

    ctx.fillStyle = `rgba(255, 0, 0, ${progress})`;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 40, 0, Math.PI * 2);
    ctx.fill();

    drawExplosion(sunX, sunY, 50, progress);

    ctx.fillStyle = `rgba(255, 165, 0, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Morte do Sol', sunX - 30, sunY + 60);
}

function drawDegenerateEra(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(0, 0, 0, ${progress})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Era Degenerada', canvas.width / 2 - 50, canvas.height / 2);
}

function drawProtonDecay(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(0, 0, 0, ${progress})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Decaimento do Próton', canvas.width / 2 - 70, canvas.height / 2);
}

function drawBlackHoleEra(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(0, 0, 0, ${progress})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Era dos Buracos Negros', canvas.width / 2 - 80, canvas.height / 2);
}

function drawBlackHoleDeath(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(0, 0, 0, ${progress})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Morte dos Buracos Negros', canvas.width / 2 - 90, canvas.height / 2);
}

function drawBigFreeze(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(0, 0, 0, ${progress})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
    ctx.font = '16px Arial';
    ctx.fillText('Big Freeze', canvas.width / 2 - 30, canvas.height / 2);
}

function animateUniverseHistory() {
    animateTransition(drawBigBang, 2000);
    setTimeout(() => animateTransition(drawMilkyWayFormation, 2000), 2000);
    setTimeout(() => animateTransition(drawSolarSystemFormation, 2000), 4000);
    setTimeout(() => animateTransition(drawPlanets, 2000), 6000);
    setTimeout(() => animateTransition(drawLifeOnMars, 2000), 8000);
    setTimeout(() => animateTransition(drawMarsCoreSolidification, 2000), 10000);
    setTimeout(() => animateTransition(drawSolarWindOnMars, 2000), 12000);
    setTimeout(() => animateTransition(drawMoonFormation, 2000), 14000);
    setTimeout(() => animateTransition(drawLifeOnEarth, 2000), 16000);
    setTimeout(() => animateTransition(drawTheiaImpact, 2000), 18000);
    setTimeout(() => animateTransition(drawSaturnRings, 2000), 20000);
    setTimeout(() => animateTransition(drawPlutoDiscovery, 2000), 22000);
    setTimeout(() => animateTransition(drawHypotheticalPlanets, 2000), 24000);
    setTimeout(() => animateTransition(drawSunDeath, 2000), 26000);
    setTimeout(() => animateTransition(drawDegenerateEra, 2000), 28000);
    setTimeout(() => animateTransition(drawProtonDecay, 2000), 30000);
    setTimeout(() => animateTransition(drawBlackHoleEra, 2000), 32000);
    setTimeout(() => animateTransition(drawBlackHoleDeath, 2000), 34000);
    setTimeout(() => animateTransition(drawBigFreeze, 2000), 36000);
}

animateUniverseHistory();
