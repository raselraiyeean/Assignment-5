// to hide donate page and to show history page
document.getElementById('donate-history-button').addEventListener('click', function() {
    document.getElementById('history-page').classList.remove('hidden');
    document.getElementById('donate-page').classList.add('hidden');
    document.getElementById('donate-money-button').classList.remove('bg-green-400')
    document.getElementById('donate-history-button').classList.add('bg-green-400')
    
});

    document.getElementById('donate-money-button').addEventListener('click', function() {
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('donate-page').classList.remove('hidden');
    document.getElementById('donate-money-button').classList.add('bg-green-400')
    document.getElementById('donate-history-button').classList.remove('bg-green-400')
    
});

// js of flood donation for noakhali
document.getElementById('noakhali-donate-button').addEventListener('click', function(event) {
    event.preventDefault();
    const donationAmountForNoakhali = inputValueById('donation-amount-for-naokhali');
    const mainBalanceDonationPage = textValueById('main-balance-of-donation-page');
    const donationBalanceForNoakhali = textValueById('donation-balance-for-Noakhali');
    if((donationAmountForNoakhali > mainBalanceDonationPage) || 
        (donationAmountForNoakhali <= 0) || isNaN(donationAmountForNoakhali)  
        ) {
            alert('Invalid Input!! Give a valid Input.');
        }
        else {
            const newMainBalance = mainBalanceDonationPage - donationAmountForNoakhali;
            const newBalanceForNoakhaliDonationFund = donationBalanceForNoakhali + donationAmountForNoakhali;
            document.getElementById('main-balance-of-donation-page').innerText = newMainBalance;
            document.getElementById('donation-balance-for-Noakhali').innerText = newBalanceForNoakhaliDonationFund;
            my_modal_5.showModal();
            const historyContainer = document.getElementById('history-page');
            const historyText = document.createElement('p');
            let currentDate = new Date();
            historyText.setAttribute("class", "card-normal");
            historyText.innerHTML = donationAmountForNoakhali + 
            ' Taka is donated for Flood at Noakhali, Bangladesh.' + '<br>' + currentDate;
            historyText.setAttribute("class", "card-normal");
            historyText.classList.add('card-body', 'border-2', 'my-5', 'font-semibold', 'text-2xl');
            
            historyContainer.appendChild(historyText);
            
        }
    
})

// js of flood donation for feni flood affected people
document.getElementById('donate-btn-for-feni').addEventListener('click', function(event) {
    event.preventDefault();
    const donationAmountForFeni = inputValueById('donation-amount-for-feni');
    const mainBalanceDonationPage = textValueById('main-balance-of-donation-page');
    const donationBalanceForFeni = textValueById('donation-balance-for-feni');
    if((donationAmountForFeni > mainBalanceDonationPage) || 
    (donationAmountForFeni <= 0) || isNaN(donationAmountForFeni) 
    ) {
        alert('Invalid Input!! Give a valid Input.');
    }

    else {
        const newMainBalance = mainBalanceDonationPage - donationAmountForFeni;
        const newBalanceForFeniDonationFund = donationBalanceForFeni + donationAmountForFeni;
        document.getElementById('main-balance-of-donation-page').innerText = newMainBalance;
        document.getElementById('donation-balance-for-feni').innerText = newBalanceForFeniDonationFund;
        my_modal_5.showModal();
        const historyContainer = document.getElementById('history-page');
            const historyText = document.createElement('p');
            let currentDate = new Date();
            
            historyText.innerHTML = donationAmountForFeni + 
            ' Taka is donated for Flood at Feni, Bangladesh.' + '<br>' + currentDate;
            historyText.setAttribute("class", "card-normal");
            historyText.classList.add('card-body', 'border-2', 'my-5', 'font-semibold', 'text-2xl');
            historyContainer.appendChild(historyText);
    }  
})

// Aid js for injured person in the movement of 2024
document.getElementById('aid-btn-for-quota-movement-injured').addEventListener('click', function(event) {
    event.preventDefault();
    const donationAmountForInjuredPeople = inputValueById('aid-amount-injured-people');
    const mainBalanceDonationPage = textValueById('main-balance-of-donation-page');
    const donationBalanceForInjuredPeople = textValueById('main-balance-for-injured-people');
    if((donationAmountForInjuredPeople > mainBalanceDonationPage) || 
    (donationAmountForInjuredPeople <= 0) || isNaN(donationAmountForInjuredPeople)
    ) {
        alert('Invalid Input!! Give a valid Input.');
    }

    else {
        const newMainBalance = mainBalanceDonationPage - donationAmountForInjuredPeople;
        const newBalanceForInjuredPeople = donationBalanceForInjuredPeople + donationAmountForInjuredPeople;
        document.getElementById('main-balance-of-donation-page').innerText = newMainBalance;
        document.getElementById('main-balance-for-injured-people').innerText = newBalanceForInjuredPeople;
        my_modal_5.showModal();
        const historyContainer = document.getElementById('history-page');
            const historyText = document.createElement('p');
            let currentDate = new Date();
            
            historyText.innerHTML = donationAmountForInjuredPeople + 
            ' Taka is donated for injured people in 2024 freedom fight, Bangladesh.' + '<br>' + currentDate;
            historyText.setAttribute("class", "card-normal");
            historyText.classList.add('card-body', 'border-2', 'my-5', 'font-semibold', 'text-2xl');
            historyContainer.appendChild(historyText);
    }  

})

// js to go blog page and return to home page
document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = "../blog/index.html";
})





