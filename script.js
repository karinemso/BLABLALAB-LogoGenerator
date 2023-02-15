shapes = ['shapes/shape01.png',
'shapes/shape01.png',
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




let squares = document.querySelectorAll('.shapes')
let colorsquare1 = 0
let colorsquare2 = 0
let colorsquare3 = 0
let colorsquare4 = 0
let colorsquare5 = 0
let colorsquare6 = 0
let colorsquare7 = 0
let colorsquare8 = 0
let colorsquare9 = 0
let random = document.querySelector('#random')
let img01 = document.querySelector('#img1')
let img02 = document.querySelector('#img2')
let img03 = document.querySelector('#img3')
let img04 = document.querySelector('#img4')
let img05 = document.querySelector('#img5')
let img06 = document.querySelector('#img6')
let img07 = document.querySelector('#img7')
let img08 = document.querySelector('#img8')
let img09 = document.querySelector('#img9')


function change(e){
    let square = e.target
    
    if(square.id == 'img1'){
        if(colorsquare1 == shapes.length - 1){
            colorsquare1 = 0
        }
        colorsquare1++
        img01.src = shapes[colorsquare1]
        
    }
    else if(square.id == 'img2'){
        if(colorsquare2 == shapes.length - 1){
            colorsquare2 = 0
        }
        colorsquare2++
        img02.src = shapes[colorsquare2]
        
    }
    else if(square.id == 'img3'){
        if(colorsquare3== shapes.length - 1){
            colorsquare3= 0
        }
        colorsquare3++
        img03.src = shapes[colorsquare3]
        
    }
    else if(square.id == 'img4'){
        if(colorsquare4== shapes.length - 1){
            colorsquare4= 0
        }
        colorsquare4++
        img04.src = shapes[colorsquare4]
        
    }
    else if(square.id == 'img5'){
        if(colorsquare5== shapes.length - 1){
            colorsquare5= 0
        }
        colorsquare5++
        img05.src = shapes[colorsquare5]
        
    }
    else if(square.id == 'img6'){
        if(colorsquare6 == shapes.length - 1){
            colorsquare6 = 0
        }
        colorsquare6++
        img06.src = shapes[colorsquare6]
        
    }
    else if(square.id == 'img7'){
        if(colorsquare7 == shapes.length - 1){
            colorsquare7 = 0
        }
        colorsquare7++
        img07.src = shapes[colorsquare7]
        
    }
    else if(square.id == 'img8'){
        if(colorsquare8 == shapes.length - 1){
            colorsquare8 = 0
        }
        colorsquare8++
        img08.src = shapes[colorsquare8]
       

    }
    else if(square.id == 'img9'){
        if(colorsquare9 == shapes.length - 1){
            colorsquare9 = 0
        }
        colorsquare9++
        img09.src = shapes[colorsquare9]
        
    }

}



squares.forEach(element => {
    element.addEventListener('click', change)
});

function generate(){
    indice = parseInt(Math.random * squares.length)
    img01.src = shapes[parseInt(Math.random() * 29)]
    img02.src = shapes[parseInt(Math.random() * 29)]
    img03.src = shapes[parseInt(Math.random() * 29)]
    img04.src = shapes[parseInt(Math.random() * 29)]
    img05.src = shapes[parseInt(Math.random() * 29)]
    img06.src = shapes[parseInt(Math.random() * 29)]
    img07.src = shapes[parseInt(Math.random() * 29)]
    img08.src = shapes[parseInt(Math.random() * 29)]
    img09.src = shapes[parseInt(Math.random() * 29)]
  
}

random.addEventListener('click',generate)