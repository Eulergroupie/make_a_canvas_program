function draw() {
    const plot = document.getElementById('plot');
    const ctx_plot = plot.getContext('2d');

    const x_max = document.getElementById('x-max');
    x_max.textContent = plot.width;
    const y_max = document.getElementById('y-max');
    y_max.textContent = plot.height;

    /* Color the background */
    ctx_plot.fillStyle = '#000';
    ctx_plot.fillRect(0, 0, plot.width, plot.height);

    /* Make a grid */
    const a_min = document.getElementById('a-min');
    const a_max = document.getElementById('a-max');
    const b_min = document.getElementById('b-min');
    const b_max = document.getElementById('b-max');
    let amin = -10, amax = 10;
    let bmin = -10, bmax = 10;
    a_min.textContent = amin;
    a_max.textContent = amax;
    b_min.textContent = bmin;
    b_max.textContent = bmax;
    make_axes(amin, amax, bmin, bmax, plot, ctx_plot);

    plot.addEventListener('mousedown', (event) => {
        switch(event.button) {
            case 0:
                ctx_plot.fillStyle = '#f00';
                ctx_plot.fillRect(event.offsetX, event.offsetY, 2, 2);
                break;
            case 1:
                ctx_plot.fillStyle ='#0f0';
                ctx_plot.fillRect(event.offsetX, event.offsetY, 2, 2);
                break;
            case 2:  
                ctx_plot.fillStyle ='#00f';
                ctx_plot.fillRect(event.offsetX, event.offsetY, 2, 2);
                break;
            default:
                break;
        }
    });
}

function make_axes(amin, amax, bmin, bmax, canvas, context) {  
    /* crosshairs */
    context.fillStyle = '#999';
    context.fillRect(0, canvas.height / 2, canvas.width, 1);
    context.fillRect(canvas.width / 2, 0, 1, canvas.height);

    /* canvas coordinates (x, y) vs reticle coordinates (a, b) */
    const a_coord = document.getElementById('a-coord');
    const b_coord = document.getElementById('b-coord');
    const x_coord = document.getElementById('x-coord');
    const y_coord = document.getElementById('y-coord');
    canvas.addEventListener('mousemove', (event) => {
        a_coord.innerHTML = ((amax - amin) / canvas.width * event.offsetX + amin).toFixed(3);
        b_coord.innerHTML = ((bmin - bmax) / canvas.height * event.offsetY + bmax).toFixed(3);
        x_coord.innerHTML = event.offsetX;
        y_coord.innerHTML = event.offsetY;
        });  
}
