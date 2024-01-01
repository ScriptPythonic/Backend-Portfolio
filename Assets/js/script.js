document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector('.main');
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        customCursor.style.left = `${x}px`;
        customCursor.style.top = `${y}px`;
    });

    main.addEventListener('mouseover', () => {
        customCursor.style.width = '20px';
        customCursor.style.height = '20px';
    });

    main.addEventListener('mouseout', () => {
        customCursor.style.width = '10px';
        customCursor.style.height = '10px';
    });
});