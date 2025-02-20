let color

window.addEventListener('DOMContentLoaded', function() {
  this.document.querySelector('#btn').addEventListener('click', function() {
    onClickMeClicked()
  })
})

function onClickMeClicked() {
  updateBg()
}

/**
 * Model
 */
function updateBg() {
  color = getBgColor()      // update state
  renderBg()                // render based on the updated state
}

function getBgColor() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const hex = [...letters, ...digits]

  let randomColor = '#'
  for (let i = 1; i <= 6; i++) {
    let randomHex = Math.floor(Math.random() * hex.length)
    randomColor += hex[randomHex]
  }

  return randomColor;
}

/**
 * View - UI rendering
 */
function renderBg() {
  document.querySelector('#hex').innerHTML = color
  document.body.style.backgroundColor = color
}

