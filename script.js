const timeSlots = document.querySelectorAll(".time-slot");
const selectionMessage = document.getElementById("selection-message");

timeSlots.forEach((slot) => {
  slot.addEventListener("click", () => {
    if (slot.disabled) return;

    timeSlots.forEach((item) => {
      item.classList.remove("selected");
    });

    
    slot.classList.add("selected");

    selectionMessage.textContent =
      `Selected time: ${slot.textContent.trim()}`;
  });
});
  