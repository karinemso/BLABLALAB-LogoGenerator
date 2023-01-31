colors = ['blue','red','purple', 'yellow', 'black', 'pink', 'orange']

let squares = document.querySelectorAll('.square')
let colorsquare1 = 0
let colorsquare2 = 0
let colorsquare3 = 0
let colorsquare4 = 0
let colorsquare5 = 0
let colorsquare6 = 0
let colorsquare7 = 0
let colorsquare8 = 0
let colorsquare9 = 0

function change(e){
    let square = e.target
    
    if(square.id == 'square1'){
        if(colorsquare1 == colors.length - 1){
            colorsquare1 = 0
        }
        colorsquare1++
        square.style.background = colors[colorsquare1]
        
    }
    else if(square.id == 'square2'){
        if(colorsquare2 == colors.length - 1){
            colorsquare2 = 0
        }
        colorsquare2++
        square.style.background = colors[colorsquare2]
        
    }
    else if(square.id == 'square3'){
        if(colorsquare3== colors.length - 1){
            colorsquare3= 0
        }
        colorsquare3++
        square.style.background = colors[colorsquare3]
        
    }
    else if(square.id == 'square4'){
        if(colorsquare4== colors.length - 1){
            colorsquare4= 0
        }
        colorsquare4++
        square.style.background = colors[colorsquare4]
        
    }
    else if(square.id == 'square5'){
        if(colorsquare5== colors.length - 1){
            colorsquare5= 0
        }
        colorsquare5++
        square.style.background = colors[colorsquare5]
        
    }
    else if(square.id == 'square6'){
        if(colorsquare6 == colors.length - 1){
            colorsquare6 = 0
        }
        colorsquare6++
        square.style.background = colors[colorsquare6]
        
    }
    else if(square.id == 'square7'){
        if(colorsquare7 == colors.length - 1){
            colorsquare7 = 0
        }
        colorsquare7++
        square.style.background = colors[colorsquare7]
        
    }
    else if(square.id == 'square8'){
        if(colorsquare8 == colors.length - 1){
            colorsquare8 = 0
        }
        colorsquare8++
        square.style.background = colors[colorsquare8]
       

    }
    else if(square.id == 'square9'){
        if(colorsquare9 == colors.length - 1){
            colorsquare9 = 0
        }
        colorsquare9++
        square.style.background = colors[colorsquare9]
        
    }

}



squares.forEach(element => {
    element.addEventListener('click', change)
});
