const counterSpan = document.querySelector('.main__counter-text')
const counterUpBtn = document.querySelector('.main__counter-up')
const counterDownBtn = document.querySelector('.main__counter-down')
const homePaths = document.querySelectorAll('.main__home path')
let currentFloor = 2

function saveFloorCounter() {
  homePaths.forEach((el) => el.classList.remove('selected'))
  document.querySelector(`[data-floor="${currentFloor}"]`).classList.add('selected')
  counterSpan.innerText = currentFloor.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })
}

homePaths.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    const selectedFloor = +e.target.dataset.floor
    currentFloor = selectedFloor
    saveFloorCounter()
  })
})

counterUpBtn.addEventListener('click', () => {
  if (currentFloor >= 18) return
  currentFloor++
  saveFloorCounter()
})

counterDownBtn.addEventListener('click', () => {
  if (currentFloor <= 2) return
  currentFloor--
  saveFloorCounter()
})
