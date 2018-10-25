const principal = document.getElementById('principal');
const interest = document.getElementById('interest');

const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(){
    let PV = principal.value;
    let FV = 1000000000;
    let i = interest.value/100;
    let n;

    n = Math.round(Math.log(FV/PV) / Math.log(1 + i));

    document.getElementById('num-years').textContent = `It would take $${PV.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}, ${n} years to reach $1 Billion at ${interest.value}% interest rate.`;
})