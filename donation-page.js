// to hide donate page and to show history page
document.getElementById('donate-history-button').addEventListener('click', function() {
    document.getElementById('history-page').classList.remove('hidden');
    document.getElementById('donate-page').classList.add('hidden');
    
});

    document.getElementById('donate-money-button').addEventListener('click', function() {
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('donate-page').classList.remove('hidden');
    
});