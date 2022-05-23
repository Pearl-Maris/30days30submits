const displayKey = document.querySelector('.key h2')
const displayKeyCode = document.querySelector('.keyCode h2')
const KeyCodeDiv = document.querySelector('.keyCode')
const overlay = document.querySelector('.overlay')

window.addEventListener('keydown', (e) => {
  overlay.classList.add('hide')
  displayKey.innerText = e.key
  displayKeyCode.innerText = e.keyCode
  if(e.keyCode === 32 ){
    displayKey.innerText = `space bar`
  }
})

KeyCodeDiv.addEventListener('click', (e) => {
  const textArea = document.createElement('textarea')
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'absolute'
  textArea.value = KeyCodeDiv.querySelector('h2').innerText
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  KeyCodeDiv.querySelector('p').innerText = 'Copied'
  setTimeout(() => {
    KeyCodeDiv.querySelector('p').innerText = 'Click To copy'
  },1000)
})