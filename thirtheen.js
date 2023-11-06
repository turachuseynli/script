function add() {
    let money = Number(document.getElementById('money').value)
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
     let a;
     let b;
     let c;
    if (isNaN(money) || money < 0) {
        paragraph.innerHTML = "Please enter valid number"
    }
        if (money > 100) {
             a = Math.floor(money / 100)

            if (money > 10) {
                 b = Math.floor(((money% 100)-(money%10))/10)


                if (money > 1) {
                   c = Math.floor(money % 10)
                }
                else{
                    paragraph.innerHTML = "0"
                }
                
            }else{
                paragraph.innerHTML = "0"
        }
    }
    else{
        paragraph.innerHTML = "0"
}

    paragraph.innerHTML = a+"-"+"100manat"+" "+b+"-"+"10manat"+" "+c+"-"+"1manat";
}

