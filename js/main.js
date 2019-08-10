// declare the variable that a will use
const entryElt = document.getElementById("entryWrite"),
addButtonElt = document.getElementById("addButton"),
listElt = document.getElementById("list"),
clearAllButtonElt = document.getElementById("clearAllButton");

// when i click on the ADD button
addButtonElt.addEventListener("click", () => {
    // create a li element and set attributes
    let li = document.createElement("li");

    // first way how it's possible to do
    li.textContent = `${entryElt.value} `;
    // create a button with his attributes
    let buttonRemove = document.createElement("button");
    buttonRemove.type = "button";
    buttonRemove.classList.add("deleteButton");
    // create an icon with his attributes
    let iconElt = document.createElement("i");
    iconElt.classList.add("fas", "fa-times");

    // second way to do
    // li.innerHTML = `${entryElt.value} <button type="button" class="deleteButton"><i class="fas fa-times"></i></button>`;

    // append 
    // i in button
    buttonRemove.appendChild(iconElt);
    // button in li and 
    li.appendChild(buttonRemove);
    // li in ul
    listElt.appendChild(li);
});

// get all button with class deleteButton all second
// declare a variable (objet) and loop on it
// when i click on one of the delete buttons
// it delete the li parent of it
setInterval( () => {
    const deleteButtonElems = document.querySelectorAll("button.deleteButton");
    for (let button of deleteButtonElems) {
        button.addEventListener("click", function() {
           this.parentNode.remove();
        })
    }
}, 1000);

// When i click on the Clear All the ul list 
clearAllButtonElt.addEventListener("click", () => {
    listElt.innerHTML = "";
});