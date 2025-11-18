function navigateToPage() {
    const select = document.getElementById('pageSelector');
    const selectedValue = select.value;
    
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

// Opcional: Atualizar o select para mostrar a página atual
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const select = document.getElementById('pageSelector');
    
    for (let i = 0; i < select.options.length; i++) {
        const optionValue = select.options[i].value;
        if (optionValue && optionValue.includes(currentPage)) {
            select.selectedIndex = i;
            break;
        }
    }
});