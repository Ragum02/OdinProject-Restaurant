import "./styles.css";

export function menuPage() {
    console.log("Menus function called");
    const contentBox = document.querySelector("#content");
    if (!contentBox) {
      console.error("Content box not found!");
      return;
    }
  
    contentBox.innerHTML = "";
    const title = document.createElement("h1");
    title.textContent = "Restaurant menu";

    const menuBox = document.createElement("div");
    menuBox.className = "menu-container";


    const menu = document.createElement("p");
    menu.textContent = "Blàblàblàblàblà (€)"

    menuBox.appendChild(menu)
    contentBox.appendChild(title);
    contentBox.appendChild(menuBox);
  }