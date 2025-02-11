window.initializeCustomCursor = () => {
    console.log('Custom cursor initialized');
    const cursor = document.getElementById('customCursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Adjust the value for a looser or tighter follow effect
    const mouseFollowIntensity = 0.1;
    function animateCursor() {
        cursorX += (mouseX - cursorX) * mouseFollowIntensity;  
        cursorY += (mouseY - cursorY) * mouseFollowIntensity;
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();
};
