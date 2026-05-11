const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("inputTanggal");
const kosong = document.getElementById("kosong");
const modalEdit = document.getElementById("modalEdit");
const editTugas = document.getElementById("editTugas");
const editTanggal = document.getElementById("editTanggal");
const simpanEdit = document.getElementById("simpanEdit");
const batalEdit = document.getElementById("batalEdit");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalOk = document.getElementById("modalOk");
const modalCancel = document.getElementById("modalCancel");

function bukaModal(judul, pesan) {
  modal.style.display = "flex";

  modalTitle.textContent = judul;
  modalText.textContent = pesan;
}

btnTambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value;
  let tanggalTugas = inputTanggal.value;
  let statusTugas = "On Progress";

  if (teksTugas === "" || tanggalTugas === "") {
   bukaModal("Peringatan", "Data harus dimasukkan!");
    modalCancel.style.display = "none";

    modalOk.onclick = function () {
      modal.style.display = "none";
    };

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

  let btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";

  btnEdit.addEventListener("click", function () {
  modalEdit.style.display = "flex";

  editTugas.value = teksTugas;
  editTanggal.value = tanggalTugas;

  simpanEdit.onclick = function () {
    teksTugas = editTugas.value;
    tanggalTugas = editTanggal.value;

    spanbaru.innerHTML = `
      ${teksTugas} - ${tanggalTugas} -
      <span class="status">
        ${selesai ? "Done" : "On Progress"}
      </span>
    `;

    modalEdit.style.display = "none";
  };

  batalEdit.onclick = function () {
    modalEdit.style.display = "none";
  };
});

  let btnHapus = document.createElement("button");
btnHapus.textContent = "Hapus";

btnHapus.classList.add("hapus");

btnHapus.addEventListener("click", function () {
  bukaModal("Konfirmasi", "Yakin ingin menghapus tugas ini?");

modalCancel.style.display = "block";

modalOk.onclick = function () {
  listbaru.remove();

    if (daftarTugas.children.length === 0) {
      kosong.style.display = "block";
    }

    modal.style.display = "none";
  };

  modalCancel.onclick = function () {
    modal.style.display = "none";
  };
});

let aksi = document.createElement("div");
aksi.classList.add("aksi");

aksi.appendChild(btnDone);
aksi.appendChild(btnEdit);
aksi.appendChild(btnHapus);

  listbaru.appendChild(spanbaru);
  listbaru.appendChild(aksi);

  daftarTugas.appendChild(listbaru);
  kosong.style.display = "none";
  spanbaru.style.color = "red";

  inputTanggal.value = "";
  inputTugas.value = "";
});