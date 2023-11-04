function add() {
    let namea = document.getElementById('name').value
    let agea = document.getElementById('age').value
    let numbersa = document.getElementById('numbers').value
    let amounta= document.getElementById('amount').value
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    if(agea>60 || ( numbersa>=4 && amounta>=100) ){
        paragraph.innerHTML = "you received a discount!";    
    }
    else{
        paragraph.innerHTML = "you do not received a discount!";
    }   
    }