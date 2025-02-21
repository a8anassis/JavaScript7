let color = undefined; // State of the app

/**
 * Listener
 */
$(function() {
    $('#btn').on('click', function() {
        onClickMeClicked();
    });
});

/**
 * Controller
 * Actions taken after 'Click Me' button, clicked.
 */
function onClickMeClicked() {
    updateBg();
}

/**
 * Model
 * Gets a color and updates the UI background
 */
function updateBg() {
    let color = getBgColor();
    showBgColor(color);
}

/**
 * Chooses, randomly, a color from a standard list.
 * @returns the color
 */
function getBgColor() {
    const colors = ['black', 'red', 'green', 'white', 'blue'];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * View
 * Fills the values of the corresponding UI Elements.
 * @param {string} bgColor - the given color 
 */
function showBgColor(bgColor) {
    $('#hex').text(bgColor);
    $('body').css('background-color', bgColor);
}


/*
Replaced document.addEventListener("DOMContentLoaded", ...) with $(function() {}) (jQuery's shorthand for DOM ready).
Used $('#btn').on('click', function() {}) instead of document.querySelector('#btn').addEventListener(...) (jQuery event handling).
Replaced document.querySelector('#hex').innerHTML = ... with $('#hex').text(...).
Used $('body').css('background-color', color) instead of document.body.style.backgroundColor = color.
*/