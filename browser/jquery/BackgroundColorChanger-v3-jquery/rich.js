let bgColor = undefined
const btnDOM = document.querySelector('#btn')

this.addEventListener('DOMContentLoaded', () => {
    btnDOM.addEventListener('click', function() {
        onClickMeClicked()
    })
})


/**
 * Controller
 * Actions to take after the user has clicked the 'Click Me' btn
 * Actions include to update the color of the background
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 * Gets a random color, and then updates the UI
 * State and UI in sync
 */
function updateBg() {
    bgColor = getRandomBgColor()    // Manage State
    showBackground(bgColor)         // Opdate UI
}

/**
 * Builds a random color in hex format.
 * @returns the background color.
 */
function getRandomBgColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const hex = [...letters, ...digits]
    
    let color = '#' 
    for (let i = 1; i <= 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }
    
    return color   
}

/**
 * View
 * Fills the values of the corresponding HTML Elements  
 */ 
function showBackground(bgColor) {
    document.querySelector('#hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}