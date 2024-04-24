let son1 = Number(prompt("birinchi soni kriting"));
let son2 = Number(prompt("Ikkinchi soni kriting"));
let amal = String(prompt("Amalni kriting(+, - * /): "));

if (amal === "+") {
    let yegindi = son1 + son2;
    alert(son1 + " + " + son2 + " = " + yegindi)
}

if (amal === "-") {
    let ayirma = son1 - son2;
    alert(son1 + " - " + son2 + " = " + ayirma)
}


if (amal === "+") {
    let bolima = son1 / son2;
    alert(son1 + " / " + son2 + " = " + bolima)
}

if (amal === "+") {
    let kopaytiruv = son1 * son2;
    alert(son1 + " * " + son2 + " = " + kopaytiruv)
}


