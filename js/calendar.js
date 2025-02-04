document.getElementById("dateInput").addEventListener("click", function () {
  document.getElementById("hiddenDate").showPicker();
});

document.getElementById("hiddenDate").addEventListener("change", function () {
  document.getElementById("dateInput").value = this.value;
});

document
  .getElementById("dateInputSecond")
  .addEventListener("click", function () {
    document.getElementById("hiddenDateSecond").showPicker();
  });

document
  .getElementById("hiddenDateSecond")
  .addEventListener("change", function () {
    document.getElementById("dateInputSecond").value = this.value;
  });
