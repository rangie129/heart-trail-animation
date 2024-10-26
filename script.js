const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
    const yPos = event.offsetY;
    const xPos = event.offsetX;

    const spanEl = document.createElement('span');

    spanEl.style.top = yPos + 'px';
    spanEl.style.left = xPos + 'px';

    bodyEl.appendChild(spanEl);

    const size = Math.random() * 100;

    spanEl.style.width = size + 'px';
    spanEl.style.height = size + 'px';


    setTimeout(() => {
        spanEl.remove(); 
    }, 4000);
});