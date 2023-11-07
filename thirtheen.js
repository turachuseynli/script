function add() {
    let money = Number(document.getElementById('money').value)
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    let a = 0 ;
    let b = 0;
    let c= 0;
    let d= 0;
    let e= 0;
    let f= 0;
    if (isNaN(money) || money < 0) {
        paragraph.innerHTML = "Please enter valid number"
    }
    if (money > 1) {
        //157
        a = Math.floor(money % 5) //2

        if (money > 5) {
            d = Math.floor(((money % 10) - (money % 5)) / 5) //1
            if (money > 10) {
                b = Math.floor((((money % 100) - Math.floor((money % 100) / 50)*50 )-(Math.floor(((money % 100) - Math.floor((money % 100) / 50)*50 ) / 20)*20)-(money% 10)) / 10)
                if (money > 20) {
                    e = Math.floor((Math.floor((money % 100) - (Math.floor((money % 100) / 50)*50 )) )/20)
                    if (money > 50) {
                        f = Math.floor(((money % 100) - (money % 50)) / 50)
                        if (money > 100) {
                            c = Math.floor(money / 100)
                        }

                    }
                }
               
            }
        }
        }
    
   
    
    paragraph.innerHTML = c + "-" + "100manat" + " " + f + "-" + "50manat" + " " + e + "-" + "20manat" + " " + b + "-" + "10manat" + " " + d + "-" + "5manat" + " " + a + "-" + "1manat";
}