function draw() {
    /* set-up canvas and context DOM references */
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    /* set-up cursor coordinate DOM references */
    const column = document.getElementById('column');
    const row = document.getElementById('row');

    /* paint canvas black */
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* detect mouse movement */
    canvas.addEventListener('mousemove', (event) => {
        /* send cursor coordinates to document */
        column.textContent = event.offsetX;
        row.textContent = event.offsetY;
        /* Make a dot at the cursor */
        ctx.fillStyle = 'white';
        ctx.fillRect(event.offsetX, event.offsetY, 1, 1);
    });
}