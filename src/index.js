import './styles/scss.scss'
const fs = ('fs')
const path = ('path')

const stars = document.querySelectorAll('.star')
const rating = document.querySelector('.rating')



const starActived = element => {
    element.addEventListener('click', () =>{
        const arrayOfStars = Array.from(element.parentElement.querySelectorAll('.star'))
        const indexOfClickedStar = arrayOfStars.indexOf(element)

        console.log('prevClickIndex', prevClickIndex)
        console.log('indexOfClickedStar', indexOfClickedStar)
        
        // if (prevClickIndex > indexOfClickedStar) {
        //     return
        // }

        element.classList.remove('inactive__star')
        element.classList.add('active__star')
        
        for (let i = 0; i < indexOfClickedStar; i++) {
            arrayOfStars[i].classList.remove('inactive__star')
            arrayOfStars[i].classList.add('active__star')
        }

        
        rating.innerHTML = indexOfClickedStar + 1
        const prevClickIndex = indexOfClickedStar
    })
}


stars.forEach(starActived)




    