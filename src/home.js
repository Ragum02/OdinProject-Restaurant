export function homePage() {
    console.log("HomePage function called");
    const contentBox = document.querySelector("#content");
    if (!contentBox) {
      console.error("Content box not found!");
      return;
    }
  
    contentBox.innerHTML = "";
    const title = document.createElement("h1");
    title.textContent = "My Restaurant";

    const textBox = document.createElement("div");
    textBox.className = "text-container";

    const resume = document.createElement("p");
    resume.textContent = "This is my restaurant woop woop !"

    const image = document.createElement("img");
    image.src = "https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg";

    contentBox.appendChild(title);
    textBox.appendChild(resume);
    textBox.appendChild(image);
    contentBox.appendChild(textBox);
    

  }