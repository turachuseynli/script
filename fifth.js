function temperature() {
    let az =Number(document.getElementById('first').value)
    let ru =Number(document.getElementById('second').value)
    let america = Number(document.getElementById('third').value)
    let paragraph = document.getElementById('div')
    let temps = [az,ru,america];
    for(let i = 0; i < temps.length; i++) {
        for(let j = 0; j < temps.length-1; j++) {
            if(temps[j] < temps[j+1]) {
                let a = temps[j+1]
                temps[j+1] = temps[j]
                temps[j] = a
            }
        }
    }
    let result = ""

    for(i in temps) {
        if(i < temps.length-1) {
            result += temps[i] + ", "
        } 
        else {
            result += temps[i]
        }
    }
paragraph.innerHTML=result;
}
