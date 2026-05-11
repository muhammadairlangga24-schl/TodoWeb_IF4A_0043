const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("inputTanggal");

btnTambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value;
  let tanggalTugas = inputTanggal.value;
  let statusTugas = "On Progress";

  if (teksTugas === "" || tanggalTugas === "") {
    alert("Data harus dimasukkan!");
    return;
  }

  let listbaru = document.createElement("li");
  let spanbaru = document.createElement("span");

  spanbaru.innerHTML = `
  ${teksTugas} - ${tanggalTugas} - 
  <span class="status">${statusTugas}</span>
`;

  let btnDone = document.createElement("button");
  btnDone.textContent = "Done";

  let selesai = false;

  btnDone.addEventListener("click", function () {
    const status = spanbaru.querySelector(".status");

    if (!selesai) {
      status.textContent = "Done";
      status.style.color = "green";

      spanbaru.style.textDecoration = "line-through";

      spanbaru.style.color = "green";

      btnDone.textContent = "Undo";

      selesai = true;
    } else {
      status.textContent = "On Progress";
      status.style.color = "red";

      spanbaru.style.textDecoration = "none";
      spanbaru.style.color = "red";

      btnDone.textContent = "Done";

      selesai = false;
    }
  });

  listbaru.appendChild(spanbaru);
  listbaru.appendChild(btnDone);

  daftarTugas.appendChild(listbaru);
  spanbaru.style.color = "red";

  inputTanggal.value = "";
  inputTugas.value = "";
});