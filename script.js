const fileInput = document.getElementById("fileInput");
const dropZone = document.getElementById("drop-zone");
const verifyBtn = document.getElementById("verifyBtn");
const result = document.getElementById("result");
const toggleTheme = document.getElementById("toggleTheme");

const VALID_IDS = ["V1234", "V5678", "V9999"]; // Dummy IDs

dropZone.addEventListener("click", () => fileInput.click());

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.background = "#d0f0ff";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.style.background = "";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.background = "";
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

function handleFile(file) {
  if (file && file.type.startsWith("image/")) {
    result.textContent = `Uploaded: ${file.name}`;
  } else {
    result.textContent = "Please upload an image file.";
  }
}

verifyBtn.addEventListener("click", () => {
  const certId = document.getElementById("certId").value.trim();
  if (!certId) {
    result.textContent = "❌ Please enter a Certificate ID.";
    result.style.color = "red";
    return;
  }

  if (VALID_IDS.includes(certId.toUpperCase())) {
    result.textContent = `✅ Certificate ID ${certId} is VALID.`;
    result.style.color = "green";
  } else {
    result.textContent = `❌ Certificate ID ${certId} is INVALID.`;
    result.style.color = "red";
  }
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
