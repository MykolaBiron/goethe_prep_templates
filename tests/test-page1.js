let gapArray = [false, false, false, false]
let option1 = document.getElementById("op1")
let option2 = document.getElementById("op2")
let option3 = document.getElementById("op3")
let option4 = document.getElementById("op4")

let gap1 = document.getElementById("placeholder-1")
let gap2 = document.getElementById("placeholder-2")
let gap3 = document.getElementById("placeholder-3")
let gap4 = document.getElementById("placeholder-4")


function insertOption(word, btn) {
    if (gapArray[0] == false) {
        let gap = document.getElementById("placeholder-1")
        gap.innerText = word;
        gapArray[0] = btn;
        btn.disabled = true;
    }
    else if (gapArray[1] == false) {
        let gap = document.getElementById("placeholder-2")
        gap.innerText = word;
        gapArray[1] = btn;
        btn.disabled = true;
    }
    else if (gapArray[2] == false) {
        let gap = document.getElementById("placeholder-3")
        gap.innerText = word;
        gapArray[2] = btn;
        btn.disabled = true;
    }
    else if (gapArray[3] == false) {
        let gap = document.getElementById("placeholder-4")
        gap.innerText = word;
        gapArray[3] = btn;
        btn.disabled = true;
    }
}
function resetGap(gapId, num) {
    let gap = document.getElementById(gapId)
    gap.innerText = "______"
    gapArray[num].disabled = false;
    gapArray[num] = false;
}
