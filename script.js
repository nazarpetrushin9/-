document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
