const elem = document.getElementById("swipeSection");

let xDown = null;
let yDown = null;

elem.addEventListener("pointerdown", handleTouchStart, false);
elem.addEventListener("pointermove", handleTouchMove, false);

function handleTouchStart(evt) {
    xDown = evt.clientX;
    yDown = evt.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = evt.clientX;
    const yUp = evt.clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { // horizontal swipe detected
        if (xDiff > 0) {
            console.log("swipe left");
        } else {
            console.log("swipe right");
        }
    }

    // reset values
    xDown = null;
    yDown = null;
}
