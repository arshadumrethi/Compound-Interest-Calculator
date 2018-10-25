const principal = document.getElementById('principal');
const interest = document.getElementById('interest');

const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(){
    let PV = principal.value;
    let FV = 1000000000;
    let i = interest.value/100;
    let n;

    n = Math.log(FV/PV) / Math.log(1 + i);

    document.getElementById('num-years').textContent = n;
})