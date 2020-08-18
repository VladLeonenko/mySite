const carouselText = [
    'Вы получите быстро и чётко понимание о реализации вашей идеи и стоимости услуги.',
    'text2',
    'text3'
]
const sliderText = document.getElementById('slidertext')
const leftButton = document.getElementById('scrollleft')
const rightButton = document.getElementById('scrollright')

function scrollSlider () {
    let i = 0
    sliderText.innerHTML = carouselText[0]


    rightButton.addEventListener('click', function () {
        i++
        if (i == carouselText.length) {
            i = 0
        }
        sliderText.innerHTML = carouselText[i]
    })


    leftButton.addEventListener('click', function () {
        i--
        if (i == -1) {
            i = carouselText.length - 1
        }
        sliderText.innerHTML = carouselText[i]
    })
}

scrollSlider()

