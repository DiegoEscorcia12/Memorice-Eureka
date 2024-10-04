const slider = document.getElementById('volume-control');

slider.addEventListener('input', function() {
    const value = this.value;
    const min = this.min;
    const max = this.max;
    
    // Calcula el porcentaje del slider que se ha llenado
    const percentage = ((value - min) / (max - min)) * 100;
    
    // Actualiza el fondo del slider
    this.style.background = `linear-gradient(to right, white ${percentage}%, transparent ${percentage}%)`;
});
