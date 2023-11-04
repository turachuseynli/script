let a = []
let diva = document.getElementById('div')
let count = 5
window.onload = function () {
    for (let i = 1; i < 21; i++) {
        a.push(i)
    }
    for (let i = 0; i < 5; i++) {
        let b = document.createElement('h2')
        b.innerHTML = a[i];
        diva.appendChild(b)
    }
}
function add() {
    let d = a.slice(count, count + 5);
    d.map((item) => {
        let c = document.createElement('h2')
        c.innerHTML = item;
        diva.appendChild(c)
    }
    )
    count += 5
}

