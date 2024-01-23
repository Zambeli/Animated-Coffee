const coords = { x: 0, y: 0};
const circles = document.querySelectorAll('.circlemouse')


circles.forEach(function (circle) {
    circle.x = 0
    circle.y = 0
})

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX
    coords.y = e.clientY

    
    animateCircles();


});


function animateCircles() {

    let x = coords.x
    let y = coords.y

    circles.forEach(function (circle, index) {
        circle.style.left = coords.x - 12 + "px";
        circle.style.top = coords.y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length

        x += 10;
        y += 10;

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x -x) * 0.5
        y += (nextCircle,y -y) * 0.5
    });

    requestAnimationFrame(animateCircles)
}

animateCircles()

