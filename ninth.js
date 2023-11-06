function add() {
    let num = Number(document.getElementById('number').value)
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    if(isNaN(num)) {
        paragraph.innerHTML="Please enter valid number"
    } else {
        for(let i = 1; i <= 1000; i++) {
            if(i % num == 0) {
                console.log(i)
                paragraph.innerHTML+=i+" ";
            }
        }
    }
}