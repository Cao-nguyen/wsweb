// Sidebar
const siderItems = document.querySelectorAll('.sider-item'); 
const currentPath = window.location.pathname; 

siderItems.forEach(item => {
    const link = item.querySelector('a.sider-link'); 
    if (link && link.getAttribute('href') === currentPath) {
        item.classList.add('active'); 
    }

    item.addEventListener('click', () => {
        siderItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});