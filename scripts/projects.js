function filterProjects(filter) {
  const projectsList = document.querySelectorAll(".all-projects");
  for (let i = 0; i < projectsList.length; i++) {
    projectsList[i].classList.toggle(
      "d-none",
      !projectsList[i].classList.contains(filter),
    );
  }
}
