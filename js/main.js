// declare the variable that a will use
const entryElt = document.getElementById("entryWrite"),
buttonElt = document.getElementById("button"),
listElt = document.getElementById("list");

// create a counter
let count = 1;

// when i click on the button
buttonElt.addEventListener("click", () => {
    // create a li element and set attributes
    let li = document.createElement("li");
    //li.id = `myId${count}`;

    // first way how it's possible to do
    li.textContent = entryElt.value;
    // create a button 
    let buttonRemove = document.createElement("button");
    buttonRemove.type = "button";
    buttonRemove.classList.add("deleteButton");
    //buttonRemove.id = count;
    // create an icon
    let iconElt = document.createElement("i");
    iconElt.classList.add("fas", "fa-times");

    // second way to do
    // li.innerHTML = `${entryElt.value} <button type="button" id="${count}" class="deleteButton"><i class="fas fa-times"></i></button>`;

    // append 
    // i in button
    buttonRemove.appendChild(iconElt);
    // button in li and 
    li.appendChild(buttonRemove);
    // li in ul
    listElt.appendChild(li);
    count++;
});

// function deleteElemLi(elemId) {
//     const theDeleteLi = document.querySelector(`ul li#myId${elemId}`);
//     console.log(theDeleteLi);
// }

setInterval( () => {
    const deleteButtonElems = document.querySelectorAll("button.deleteButton");
    for (let button of deleteButtonElems) {
        button.addEventListener("click", function() {
           this.parentNode.remove()
        })
    }
}, 1000);