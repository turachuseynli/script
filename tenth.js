 function add() {
        let  year= Number(document.getElementById('year').value)
        let  amount= Number(document.getElementById('initial').value)
        let  per = Number(document.getElementById('per').value)
        let button = document.getElementById('btn')
        let paragraph = document.getElementById('div')
        if(isNaN(amount) || isNaN(year) || isNaN(per)) {
            paragraph.innerHTML="Please enter valid number"
        } else {
            for(let i = 0; i < year; i++) {
                amount += (amount / 100) * per
                    paragraph.innerHTML=amount;
                }
            }
 }
    
