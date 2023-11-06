function add(){
    let length = Number(document.getElementById('length').value)
    let height =Number( document.getElementById('height').value)
    let width = Number(document.getElementById('width').value)
    let weight= Number(document.getElementById('weight').value)
    let distance=  Number(document.getElementById('distance').value)
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')

if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight) || isNaN(distance)) {
    paragraph.innerHTML="Please enter valid values"
} else {
    if(length + width + height <= 150) {
        if(length <= 100 && width <= 100 && height <= 100) {
            if(weight <= 10) {
                if(distance >= 3 && distance <= 10) {
                   paragraph.innerHTML="It is available for shipping"
                } 
                else {
                    paragraph.innerHTML="Distance must be between 3km and 10km"
                }
            } else {
                paragraph.innerHTML="Weight can not exceed 10 kg"
            }
        } else {
            paragraph.innerHTML="None of the measurements can exceed 100 cm"
        }
    } else {
        paragraph.innerHTML="Sum of length, width and height can not exceed 150 cm"
    }
}
}