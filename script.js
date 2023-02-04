const menu = document.getElementById("menu");
const order = document.getElementById("order");
const bar = document.getElementById("bar");

const showMenu = () => {
  if (menu.style.left == "0%" && order.style.display == "block") {
    menu.style.left = "-100%";
    order.style.display = "none";
  } else {
    menu.style.left = "0%";
    order.style.display = "block";
  }
};

bar.addEventListener("click", showMenu);
