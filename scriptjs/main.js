

let position = 0
const container = document.querySelector('.slider-container')
const track = document.querySelector('.slider-track')
const item = document.querySelector('.slider-item')
const btnPrev = document.querySelector('.left')
const btnNext = document.querySelector('.right')
const progressBar = document.querySelector('.progressbar')



const itemWidth = 256
const margin = 42
const shift = itemWidth + margin
let elementIndex = 1

btnPrev.addEventListener('click', prevSlide)
btnNext.addEventListener('click', nextSlide)




function prevSlide() {
   position -= shift
   elementIndex -= 1

   if (position < -2) {
      position = (item.clientWidth + margin) * 2
   }

   if (position === shift * 2) {
      elementIndex = 3
   }
   console.log(shift * 2)
   if (elementIndex < 1) {
      elementIndex = 3
   }



   track.style.left = -position + `px`


   console.log(position, elementIndex, 'назад')
}

function nextSlide() {
   position += shift
   elementIndex += 1

   if (position > (track.clientWidth - item.clientWidth - margin)) {
      position = 0
   }

   if (elementIndex > track.childElementCount - 3) {
      elementIndex = 1
   }

   track.style.left = -position + `px`

   console.log(position, elementIndex, 'вперед',)
}



//Slider progress

btnPrev.addEventListener('click', showProgress)
btnNext.addEventListener('click', showProgress)

function showProgress() {
   progressBar.style.width = calculateProgress()
}

function calculateProgress() {
   return String(100 * elementIndex / (track.childElementCount - 3) + `%`)
}

setTimeout(showProgress, 0)
// setInterval(nextSlide, 4000);
// setInterval(showProgress, 4000);

let pressed = false
let clickX = 0
let dragX = 0
let dragShift = 0
let startX
let X = item.clientWidth


track.addEventListener('pointerdown', startDrag)
window.addEventListener('pointerup', stopDrag)


function startDrag(event) {
   startX = X
   clickX = event.clientX
   window.addEventListener("pointermove", dragging)
   console.log(clickX)
}

function stopDrag() {
   window.removeEventListener('pointermove', dragging)
}

function dragging(event) {
   dragX = event.pageX
   dragShift = dragX - clickX
   X = startX + dragShift
   setStylePosition()

}

function setStylePosition() {
   track.style.transform = `translate3d(${X}px,0,0)`
}
