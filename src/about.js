import "./styles.css";

export function aboutPage() {
    console.log("About function called");
    const contentBox = document.querySelector("#content");
    if (!contentBox) {
      console.error("Content box not found!");
      return;
    }
  
    contentBox.innerHTML = "";
    const title = document.createElement("h1");
    title.textContent = "FLEEEEEEEEEEEEEEEEEEEEEEEEEEEMMME (pardon je viens de finir une journée de cours O'clock)";
   
    contentBox.appendChild(title);
  }