function compute() {
    let peso = document.getElementById("input").value;
    let ans = parseFloat(peso) * 23.89;
    document.getElementById('result').innerHTML = ans;
}
function compute2() {
    let krw = document.getElementById("input2").value;
    let ans2 = parseFloat(krw) * 0.042;
    document.getElementById('result2').innerHTML = ans2;
}
function kilometers() {
    let kilo = document.getElementById("kiloid").value;
    let ans3 = parseFloat(kilo) * 1000;
    document.getElementById('kilometer1').innerHTML = ans3;
}
function cenid() {
    let cen = document.getElementById("cen-id").value;
    let ans4 = parseFloat(cen) / 100;
    document.getElementById('cenid1').innerHTML = ans4;
}
function miles() {
    let mil = document.getElementById("miles-id").value;
    let ans5 = parseFloat(mil) / 0.62137;
    document.getElementById('miles1').innerHTML = ans5;
}