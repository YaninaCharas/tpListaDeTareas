const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
let arrayTask = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    arrayTask.push(text);

    document.querySelector("span").innerHTML = `
    <ul>
    ${generarElementos(arrayTask)}
    </ul>
    `;

    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

function generarElementos(arg) {
  let itemsArray = "";
  let totalElementos = 0;

  for (let i = arrayTask.length - 1; i >= 0; i--) {
    if (totalElementos < 5) {
      itemsArray += `<li>${arrayTask[i]}</li>`;
    }
    totalElementos++;
  }
  return itemsArray;
}
