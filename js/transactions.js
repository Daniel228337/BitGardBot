document.addEventListener("DOMContentLoaded", function() {
    const bellIcon = document.querySelector('.header-cabinet-icon_bell');
    const messageBox = document.querySelector('.message');

    bellIcon.addEventListener('click', function() {
        messageBox.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        if (!messageBox.contains(e.target) && !bellIcon.contains(e.target)) {
            messageBox.classList.remove('show');
        }
    });
});