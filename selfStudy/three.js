let a;
let b;
let c;

document.getElementById('submit').onclick = function() {
    a = document.getElementById('base').value;
    b = document.getElementById('perpendicular').value;

    a = Number(a);
    b = Number(b);

    a = Math.pow(a, 2);
    b = Math.pow(b, 2);
    c = a + b;
    c = Math.sqrt(c);

    document.getElementById('result').innerHTML = 'The hypotenuse is: ' + c;
}