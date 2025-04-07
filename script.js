
document.getElementById('calculateButton').addEventListener('click', function(event) {
    
    const mortgageAmount = document.getElementById('mortgageAmount').value;
    const mortgageTerm = document.getElementById('mortgageTerm').value;
    const interestRate = document.getElementById('interestRate').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = ''; 

    if (mortgageAmount.trim() === '' || mortgageTerm.trim() === '' || interestRate.trim() === '') {
        return( errorMessage.textContent = 'Error: All fields are required.') ;
       
    }

    console.log('Inputs:', mortgageAmount, mortgageTerm, interestRate);
});

