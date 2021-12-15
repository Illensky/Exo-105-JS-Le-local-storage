localStorage.setItem('nombre', '18');
localStorage.setItem('mate', 'Material')
localStorage.setItem('bla', 'Black')

function draw () {
    console.log("Théme " + localStorage.getItem('bla') + ", type " + localStorage.getItem('mate')+
        " et police de caractéres " + localStorage.getItem('nombre') + "px")
}

draw()

localStorage.setItem("array", JSON.stringify([1,2,3,4]))
console.log(JSON.parse(localStorage.getItem("array")))