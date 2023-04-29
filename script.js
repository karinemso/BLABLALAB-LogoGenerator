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

cont = [[img01,'#img1', 0],[img02,'#img2', 0],[img03,'#img3', 0],[img04,'#img4', 0],[img05,'#img5', 0],[img06,'#img6', 0],[img07,'#img7', 0],[img08,'#img8', 0],[img09,'#img9', 0]]

console.log(cont[1][2])
function change(e){
    let square = e.target
    for (let i = 1; i <= 9; i++) {
        let square_id = `img${i}`
        
        
        if(square.id == square_id){
            let square_id = `img${i}`
            console.log(square_id, square.id)
        
            let img = cont[i-1][0]
            console.log(img)
    

            if(cont[i-1][2]== shapes.length - 1){
                cont[i-1][2]  = 0
                img.src = shapes[cont[i-1][2]]
            }else {
                cont[i-1][2]+=1
                img.src = shapes[cont[i-1][2]]
            }
            
            break
        }  
    }

    

    

}



squares.forEach(element => {
    element.addEventListener('click', change)
});

function generate(){
     
    squares.forEach(element => {
        element.src = shapes[parseInt(Math.random() * 29)]
    });
    
  
}

random.addEventListener('click',generate)


let gestalt = document.querySelector('#gestalt')
let main = document.querySelector('main')


gestalt.addEventListener('click', () => {
    main.classList.toggle('dark')
})