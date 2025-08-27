// Prompt user to enter name upon page load
function confirmName() {
  let name = document.getElementById("nameField").value.trim();
  
  let display= document.getElementById("displayname");
    
  if (name === "") {
    alert("Please enter a valid name.");
  } else {
    alert("Welcome " + name + "!");
    
    display.innerText = "Hello " + name + "!" + " tis Graeme here.";
  }
}
