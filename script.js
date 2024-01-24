let dragged;

document.addEventListener('drag', function(event) {
    // Save a reference to the dragged element
    dragged = event.target;
});

document.addEventListener('dragover', function(event) {
    // Prevent default to allow drop
    event.preventDefault();
});

document.addEventListener('drop', function(event) {
    // Prevent default action (open as link for some elements)
    event.preventDefault();

    // If the dragged element is a div, swap the background images
    if (event.target.classList.contains('draggable')) {
        // Swap background images
        let temp = event.target.style.backgroundImage;
        event.target.style.backgroundImage = dragged.style.backgroundImage;
        dragged.style.backgroundImage = temp;
    }
});
