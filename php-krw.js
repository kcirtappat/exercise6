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