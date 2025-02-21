const DEFAULT = 0;
let counter = DEFAULT;

$(function() {
    $('#btnDecr').on('click', () => onDecreaseClicked());
    $('#btnReset').on('click', onResetClicked);
    $('#btnIncr').on('click', onIncreaseClicked);
});

/** 
 * Actions taken after the 'Decrease' button
 * was clicked. Actions include decrease the counter.
 */
function onDecreaseClicked() {
    decreaseCounter();
}

/**
 * Actions taken after the 'Reset' button
 * was clicked. Actions include reset the counter.
 */
function onResetClicked() {
    resetCounter();
}

/**
 * Actions taken after the 'Increase' button
 * was clicked. Actions include increase the counter.
 */
function onIncreaseClicked() {
    increaseCounter();
}

// Model

/**
 * Decreases the counter by one and renders to UI.
 */
function decreaseCounter() {
    counter--;
    render();
}

/**
 * Resets the counter to zero and renders to UI.
 */
function resetCounter() {
    counter = DEFAULT;
    render();
}

/**
 * Increases the counter by one and renders to UI.
 */
function increaseCounter() {
    counter++;
    render();
}

/**
 * Assigns the counter to the corresponding UI Element.
 * And gives styling accordingly.
 */
function render() {
    // Data binding
    const $counterDOM = $('#counter');
    $counterDOM.text(counter);
    
    // Styling
    styleCounterElement($counterDOM);
}

function styleCounterElement($counterDOM) {
    $counterDOM.toggleClass('color-green', counter > 0);
    $counterDOM.toggleClass('color-red', counter < 0);
    $counterDOM.toggleClass('color-black', counter === 0);
}