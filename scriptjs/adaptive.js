
const mobileBtnPrev = document.querySelector('.mobile-left')
const mobileBtnNext = document.querySelector('.mobile-right')
const mobileSliderItem = document.querySelector('.mobile-slider-item')
const mobileTrack = document.querySelector('.mobile-slider-track')
const mobileProgressBar = document.querySelector('.mobile-progressbar')

const mobileMargin = 42
mobileSliderItemWidth = 258
const timeOut = 4000
let mobilePosition = 0

const mobileShift = mobileSliderItemWidth + mobileMargin
let currentElementIndex = 1

mobileBtnPrev.addEventListener('click', showPrevSlide)
mobileBtnNext.addEventListener('click', showNextSlide)

function showNextSlide() {
   mobilePosition += mobileShift
   currentElementIndex += 1
   if (mobilePosition > mobileTrack.clientWidth * mobileTrack.childElementCount) {
      mobilePosition = 0
   }

   if (currentElementIndex > mobileTrack.childElementCount) {
      currentElementIndex = 1
   }
   console.log(mobilePosition, currentElementIndex)
   mobileTrack.style.left = -mobilePosition + `px`
}

function showPrevSlide() {
   mobilePosition -= mobileShift
   currentElementIndex -= 1

   if (mobilePosition < 0) {
      mobilePosition = mobileTrack.childElementCount * mobileSliderItem.clientWidth - 48
   }

   if (mobilePosition === mobileTrack.childElementCount * mobileSliderItem.clientWidth - 48) {
      currentElementIndex = 6
   }

   mobileTrack.style.left = -mobilePosition + `px`

   console.log(mobilePosition, currentElementIndex)
}



//ProgressLine

mobileBtnNext.addEventListener('click', showMobileProgress)
mobileBtnPrev.addEventListener('click', showMobileProgress)

function showMobileProgress() {
   mobileProgressBar.style.width = calculateMobileProgress()
}

function calculateMobileProgress() {
   return String(100 * (currentElementIndex / mobileTrack.childElementCount) + `%`)
}


setTimeout(showMobileProgress, 1)
// setInterval(showNextSlide, timeOut)
// setInterval(showMobileProgress, timeOut)


let MobclickX = 0
let MobdragX = 0
let MobdragShift = 0
let MobstartX
let MobX = item.clientWidth


mobileTrack.addEventListener('pointerdown', MstartDrag)
window.addEventListener('pointerup', MstopDrag)


function MstartDrag(event) {
   MobstartX = MobX
   MobclickX = event.clientX
   window.addEventListener("pointermove", Mdragging)
   console.log(MobclickX)
}

function MstopDrag() {
   window.removeEventListener('pointermove', Mdragging)
}

function Mdragging(event) {
   MobdragX = event.pageX
   MobdragShift = MobdragX - MobclickX
   MobX = MobstartX + MobdragShift
   MsetStylePosition()

}

function MsetStylePosition() {
   mobileTrack.style.transform = `translate3d(${MobX}px,0,0)`
}