//Declare variables
const baseAmount = document.getElementById('base-amount');
const interestRate = document.getElementById('interest-rate');
const period = document.getElementById('period');
const deposit = document.getElementById('deposit');
const intervalYearly = document.getElementById('yearly');
const intervalQuarterly = document.getElementById('quarterly');
const intervalMonthly = document.getElementById('monthly');
const calculateBtn = document.getElementById('calculate');

//Hide Elements of next state.
document.getElementById('loading').style.display = 'none'
document.getElementById('results').style.display = 'none';

//Call Main function
calculateBtn.addEventListener('click', function(){
    //Display loading
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    
    //Run Calculation after 2 seconds
    setTimeout(runApp, 2000);

    
    function runApp () {
        document.getElementById('loading').style.display = 'none';
        
        //Declare shorter var names to improve readability
        let PV = baseAmount.value;
        let i = interestRate.value/100;
        let n = period.value;
        let A = deposit.value;
    
        //Compute functions for different Time periods
        function computeYearly () {
            let annuity = Math.round(A * (Math.pow(1 + i, n) - 1)/ i)
            let yearlyResult = Math.round(PV * Math.pow(1 + i, n)) + annuity;
            let interestValue = yearlyResult - baseAmount.value;
            
            //Display results and use Regex to include commas in numbers
            document.getElementById('total-value').textContent = "$" + yearlyResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //
            document.getElementById('interest-earned').textContent = "$" + interestValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            document.getElementById('results').style.display = 'block';
        }

        function computeQuarterly () {
            let quarterlyResult = Math.round(PV * Math.pow(1 + (i / 3), n * 3));
            let interestValue2 = quarterlyResult - PV;

            document.getElementById('total-value').textContent = "$" + quarterlyResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            document.getElementById('interest-earned').textContent = "$" + interestValue2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            document.getElementById('results').style.display = 'block';
        }
        
        function computeMonthly () {
            let monthlyResult = Math.round(PV * Math.pow(1 + (i / 12), n * 12));
            let interestValue3 = monthlyResult - PV;

            document.getElementById('total-value').textContent = "$" + monthlyResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('interest-earned').textContent = "$" + interestValue3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('results').style.display = 'block';
        }
        
        //Check which option is selected
        if (intervalYearly.checked == true) {
            computeYearly()
        } else if (intervalQuarterly.checked == true) {
            computeQuarterly()
        } else if (intervalMonthly.checked == true) {
            computeMonthly()
        } else {
            
        }

    }
});

