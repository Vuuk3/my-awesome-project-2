function addNote(elem) {
  const note = elem.nextElementSibling.value;
  const percent = elem.nextElementSibling.nextElementSibling.value;
  const div1 = document.createElement("div");
  div1.style.width = "40%";
  const div2 = document.createElement("div");
  div2.classList.add("d-flex", "align-items-center");
  const li1 = document.createElement("li");
  li1.classList.add("ms-2", "me-2");
  li1.textContent = note;
  const progress = document.createElement("div");
  progress.classList.add("progress", "flex-grow-1");
  progress.role = "progressbar";
  progress.ariaValueNow = `${percent}`;
  progress.ariaValueMin = "0";
  progress.ariaValueMax = "100";
  progressbar = document.createElement("div");
  progressbar.classList.add("progress-bar");
  progressbar.style.width = `${percent}%`;
  const li2 = document.createElement("li");
  li2.textContent = `${percent}%`;
  progress.appendChild(progressbar);
  div2.appendChild(li1);
  div2.appendChild(progress);
  div2.appendChild(li2);
  div1.appendChild(div2);
  document.getElementById("coursesList").appendChild(div1);
}
