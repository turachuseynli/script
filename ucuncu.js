function add() {
    let namea = document.getElementById('name').value
    let pricea = Number(document.getElementById('unit price').value)
    let quantitya = Number(document.getElementById('quantity').value)
    let yes= document.getElementById('radio1')
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    if(quantitya>=5){
        pricea *=0.9
    }
    if(yes.checked){
        pricea *=0.85
    }
    else{
        pricea
    }
            paragraph.innerHTML = namea+pricea*quantitya;
            
    }