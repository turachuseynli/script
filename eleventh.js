function add() {
    let num = Number(document.getElementById('number').value)
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    if(isNaN(num)) {
        paragraph.innerHTML="Please enter valid number"
    } else {
        let previous = 0
        let newww = 1

        for(let i = 1; i < num; i++) {
            console.log("new:" + newww)
            console.log("previous:" + previous)
            let newww1 = newww
            newww += previous
            previous = newww1
        }
                paragraph.innerHTML=newww;
            }
        }
    
