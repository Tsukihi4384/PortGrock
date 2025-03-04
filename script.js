document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const banners = document.querySelectorAll('.banner');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe 'active' de todos os botões
            buttons.forEach(btn => btn.classList.remove('active'));
            // Adiciona 'active' ao botão clicado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            banners.forEach(banner => {
                const category = banner.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    banner.classList.remove('hidden');
                } else {
                    banner.classList.add('hidden');
                }
            });
        });
    });

    // Inicia com "Todos" ativo
    document.querySelector('[data-filter="all"]').classList.add('active');
});