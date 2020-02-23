import './styles/scss.scss'
const fs = ('fs')
const path = ('path')

const stars = document.querySelectorAll('.star')
const rating = document.querySelector('.rating')

const starActived = (elem) =>{
    const arrayOfStars = Array.from(elem.parentElement.querySelectorAll('.star'))
    const indexOfClickedStar = arrayOfStars.indexOf(elem)

    stars.forEach((star) => {
        star.classList.remove('star__active')
    })

    elem.classList.add('star__active')

    for (let i = 0; i < indexOfClickedStar; i++) {
        arrayOfStars[i].classList.add('star__active')
    }
    rating.innerHTML = indexOfClickedStar + 1
}



const eventActived = element => {
    element.addEventListener('click', () => starActived(element))
    element.addEventListener('mouseover', () => starActived(element))    
}


stars.forEach(eventActived)