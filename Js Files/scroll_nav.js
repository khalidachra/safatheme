// Toggle the .pa-fixed-header class when the user
// scroll 100px

window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  // Target elements
  const navBar = document.getElementById("navBar");

  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("pa-fixed-header");
  } else {
    navBar.classList.remove("pa-fixed-header");
  }
};
