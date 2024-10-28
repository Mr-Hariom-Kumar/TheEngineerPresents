document.addEventListener('DOMContentLoaded', function() {
    const sidebarButton = document.getElementById('sidebar_hover');
    const sidebar = document.querySelector('.side_nav_bar');

    sidebarButton.addEventListener('mouseover', function() {
        sidebar.style.transform = 'translateX(0)';
    });

    sidebarButton.addEventListener('mouseout', function() {
        sidebar.style.transform = 'translateX(-100%)';
    });

    sidebar.addEventListener('mouseover', function() {
        sidebar.style.transform = 'translateX(0)';
    });

    sidebar.addEventListener('mouseout', function() {
        sidebar.style.transform = 'translateX(-100%)';
    });
});
