 document.getElementById('calculateButton').addEventListener('click', function() {
    const mortgageAmount = document.getElementById('mortgageAmount').value;
    const mortgageTerm = document.getElementById('mortgageTerm').value;
    const interestRate= document.getElementById('interestRate').value; // Get value on click
    const amount = parseFloat(mortgageAmount,interestRate,mortgageTerm);
    if (isNaN(amount)) {
        alert("Please enter a valid number");
     }else{
        
     }
  
});

