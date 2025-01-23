function echo() {
  const inputTxt = document.getElementById("inputTxt")
  const val = inputTxt.value

  const helloText = document.getElementById("helloText")
  helloText.innerHTML = val
}