
const photos = [
    'christina-tamihi.svg',
    'christina-tamihi.svg',
    'christina-tamihi.svg',
    'christina-tamihi.svg',
]



/*******************************
 * DISPLAY BEFORE-AFTER PHOTOS *
 *******************************/

photos.map(item => {
    let img = document.createElement('img')
    img.src = './images/' + item

    // let div = document.createElement('div')
    // div.classList.add('before-after-text')

    // let span = document.createElement('span')
    // span.innerHTML = 'before'
    // document.querySelector('.before-after-text').appendChild(span)

    

    document.querySelector('.before-after-photo-wrapper').appendChild(img)
})
// let header = document.createElement('p')
//  document.getElementById('test').innerHTML = 'heloo world oigh;aweighaw'