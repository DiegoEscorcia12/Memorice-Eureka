function simulateLoading() {
    var loadingBar = document.getElementById('loading-bar');
    
    setTimeout(function() {
        loadingBar.style.width = '100%';
        
        setTimeout(function() {
            window.location.href = 'clasificacion.html';
        }, 1000);
    }, 1500);
}

simulateLoading();
