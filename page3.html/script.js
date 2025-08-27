
function confirmName() {
  let name = document.getElementById("nameField").value.trim();
  if (name === "") {
    alert("Please enter a valid name.");
  } else {
    alert("Welcome " + name + "!");
  }
}