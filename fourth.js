function add() {
    let input1 = document.getElementById('inputvalue1').value
    let button = document.getElementById('btn')
let paragraph = document.getElementById('div')

if(isNaN(input1) || input1 < 0) {
    window.alert("Please enter valid number");
}

else {
    if(input1 >= 0 && input1<= 2) {
    paragraph.innerHTML="Take small table"
    }

    else if(input1 > 2 && input1 <= 4) {
        paragraph.innerHTML="Take medium table"
    }

    else if(input1 > 4 && input1 <= 8) {
        paragraph.innerHTML="Take large table"
    }
    else {
        let eights = Math.floor(input1 / 8)

        if(input1 % 8 > 0 && input1 % 8 <= 2) {
            paragraph.innerHTML="Take " + eights + " large and 1 small tables"
        }

        else if(input1 % 8 > 2 && input1 % 8 <= 4) {
            paragraph.innerHTML="Take " + eights + " large and 1 medium tables"
        }

        else if((input1 % 8 > 4 && input1 % 8 <= 8)) {
            paragraph.innerHTML="Take " + (eights + 1) + " large table"
        }

        else {
            paragraph.innerHTML="Take " + eights + " large table"
        }
    }
}
}