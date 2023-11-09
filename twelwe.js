function add() {
    let number = Number(document.getElementById('number').value)
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    let a = Math.floor(number/100) ;
    let b =Math.floor(number/10)- Math.floor(number/100)*10;
    let c= number%10;
    let d=a+b+c;
    if(isNaN(number)) {
        paragraph.innerHTML ="Please enter valid code"
    } else {
        paragraph.innerHTML ="Sum of digits is " + d;
    }
}
//this code is Considered for a 3-digit numbers.