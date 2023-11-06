function add() {
    let number = Number(document.getElementById('number').value)
    let place;
    let button = document.getElementById('btn')
    let paragraph = document.getElementById('div')
    if(number >= 20) {
        if(place == 1) {
            switch(number) {
                case 2: return "Twenty"
                case 3: return "Thirty"
                case 4: return "Forty"
                case 5: return "Fifty"
                case 6: return "Sixty"
                case 7: return "Seventy"
                case 8: return "Eighty"
                case 9: return "Ninety"
            }
        } else {
            switch(number) {
                case 1: return "one"
                case 2: return "two"
                case 3: return "three"
                case 4: return "four"
                case 5: return "five"
                case 6: return "six"
                case 7: return "seven"
                case 8: return "eight"
                case 9: return "nine"
                case 0: return ""
            }
        }
    } else if(place == 2) {
        switch(number) {
            case 0: return "Ten"
            case 1: return "Eleven"
            case 2: return "Twelve"
            case 3: return "Thirteen"
            case 4: return "Fourteen"
            case 5: return "Fifteen"
            case 6: return "Sixteen"
            case 7: return "Seventeen"
            case 8: return "Eighteen"
            case 9: return "Nineteen"
        }
    } else {
        return ""
    }
    paragraph.innerHTML=add();
}
