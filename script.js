let shapes = ['shapes/shape01.png',
'shapes/shape02.png',
'shapes/shape03.png',
'shapes/shape04.png',
'shapes/shape05.png',
'shapes/shape06.png',
'shapes/shape07.png',
'shapes/shape08.png',
'shapes/shape09.png',
'shapes/shape10.png',
'shapes/shape12.png',
'shapes/shape13.png',
'shapes/shape14.png',
'shapes/shape15.png',
'shapes/shape16.png',
'shapes/shape17.png',
'shapes/shape18.png',
'shapes/shape19.png',
'shapes/shape20.png',
'shapes/shape21.png',
'shapes/shape22.png',
'shapes/shape23.png',
'shapes/shape24.png',
'shapes/shape25.png',
'shapes/shape26.png',
'shapes/shape27.png',
'shapes/shape28.png',
'shapes/shape29.png'
]


let random = document.querySelector('#random')
let imgs = document.querySelectorAll('.shapes');


function change({currentTarget}){
    let imgIndex = currentTarget.dataset.index;
    const currentShape = shapes[currentTarget.dataset.index];
    if(currentShape) {
        currentTarget.src = currentShape;
        imgIndex++;
        currentTarget.dataset.index = imgIndex;
    } else {
        currentTarget.dataset.index = 0;
    }
}

imgs.forEach(element => element.addEventListener('click', change));

function generate(){
    imgs.forEach(img => img.src = shapes[parseInt(Math.random() * shapes.length)])
}

random.addEventListener('click',generate)