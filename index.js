// Add event listeners to the items
var items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragend", handleDragEnd);
});

// Add event listeners to the containers
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");

container2.addEventListener("dragover", handleDragOver);
container2.addEventListener("dragenter", handleDragEnter);
container2.addEventListener("dragleave", handleDragLeave);
container2.addEventListener("drop", handleDrop);

// Add event listener to the reset button
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", handleReset);

// Variables to store the dragged item and success message
var draggedItem = null;
var message = document.getElementById("message");

// Function to handle the drag start event
function handleDragStart(event) {
  draggedItem = event.target;
  message.textContent = "Item is being dragged";
  event.target.classList.add("dragging");
}

// Function to handle the drag end event
function handleDragEnd(event) {
  event.target.classList.remove("dragging");
}

// Function to handle the drag over event
function handleDragOver(event) {
  event.preventDefault();
}

// Function to handle the drag enter event
function handleDragEnter(event) {
  event.target.classList.add("dragover");
}

// Function to handle the drag leave event
function handleDragLeave(event) {
  event.target.classList.remove("dragover");
}

// Function to handle the drop event
function handleDrop(event) {
  event.preventDefault();
  event.target.classList.remove("dragover");

  if (draggedItem) {
    container2.appendChild(draggedItem);
    draggedItem = null;

    message.textContent = "Item dropped successfully!";
  }
}

// Function to handle the reset button click event
function handleReset() {
  window.location.reload();
}
