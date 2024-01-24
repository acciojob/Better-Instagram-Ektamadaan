function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    // Swap background images
    var temp = event.target.style.backgroundImage;
    event.target.style.backgroundImage = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = temp;
}