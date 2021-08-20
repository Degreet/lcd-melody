const counterSpan = document.querySelector('.main__counter-text')
const counterUpBtn = document.querySelector('.main__counter-up')
const counterDownBtn = document.querySelector('.main__counter-down')
const homePaths = document.querySelectorAll('.main__home path')
const flatPaths = document.querySelectorAll('.modal__flats path')
const flatLinks = document.querySelectorAll('.modal__flat-link')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__close-btn')
const modalSelectedFloor = document.querySelector('.modal__selected-floor')
const viewFlatsBtn = document.querySelector('.main__view-flats-btn')
let currentFloor = 2
let currentFlat = 40

function saveFloorCounter() {
  homePaths.forEach((el) => el.classList.remove('selected'))
  document.querySelector(`[data-floor="${currentFloor}"]`).classList.add('selected')
  counterSpan.innerText = currentFloor.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })
}

function saveFlat() {
  flatPaths.forEach((el) => el.classList.remove('selected'))
  flatLinks.forEach((el) => el.classList.remove('selected'))
  document.querySelector(`path[data-flat="${currentFlat}"]`).classList.add('selected')
  document.querySelector(`.modal__flat-link[data-flat="${currentFlat}"]`).classList.add('selected')
}

function flatHoverHandler(e) {
  const selectedFlat = +e.target.dataset.flat
  currentFlat = selectedFlat
  saveFlat()
}

function toggleModal() {
  modalSelectedFloor.innerText = currentFloor.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })

  modal.classList.toggle('open')
}

flatLinks.forEach((el) => {
  el.addEventListener('mouseover', flatHoverHandler)
})

flatPaths.forEach((el) => {
  el.addEventListener('mouseover', flatHoverHandler)
})

homePaths.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    const selectedFloor = +e.target.dataset.floor
    currentFloor = selectedFloor
    saveFloorCounter()
  })

  el.addEventListener('click', toggleModal)
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

viewFlatsBtn.addEventListener('click', toggleModal)
closeModalBtn.addEventListener('click', toggleModal)
