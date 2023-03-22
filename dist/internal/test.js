import { sendMouse } from '@web/test-runner-commands';
export async function clickOnElement(el, position = 'center', offsetX = 0, offsetY = 0) {
    const { x, y, width, height } = el.getBoundingClientRect();
    const centerX = Math.floor(x + window.pageXOffset + width / 2);
    const centerY = Math.floor(y + window.pageYOffset + height / 2);
    let clickX;
    let clickY;
    switch (position) {
        case 'top':
            clickX = centerX;
            clickY = y;
            break;
        case 'right':
            clickX = x + width - 1;
            clickY = centerY;
            break;
        case 'bottom':
            clickX = centerX;
            clickY = y + height - 1;
            break;
        case 'left':
            clickX = x;
            clickY = centerY;
            break;
        default:
            clickX = centerX;
            clickY = centerY;
    }
    clickX += offsetX;
    clickY += offsetY;
    await sendMouse({ type: 'click', position: [clickX, clickY] });
}
