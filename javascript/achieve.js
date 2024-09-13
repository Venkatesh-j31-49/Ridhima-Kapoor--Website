function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.body.classList.add('sidebar-open');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('sidebar-open');
}

// Function to toggle the dropdown visibility
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

/*hide*/
document.addEventListener('DOMContentLoaded', () => {
    const tournamentsItem = document.getElementById('tournaments');
    const sidebarItems = document.querySelectorAll('#sidebar > li:not(#tournaments)');

    tournamentsItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.toggle('hide');
        });
    });

    // Optionally, you may want to hide the dropdown and show the other items when clicking outside
    document.addEventListener('click', (event) => {
        if (!tournamentsItem.contains(event.target)) {
            sidebarItems.forEach(item => {
                item.classList.remove('hide');
            });
        }
    });
});
