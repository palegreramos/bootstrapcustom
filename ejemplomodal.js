
const modalToggle = new bootstrap.Modal(document.getElementById('toggleMyModal'));
function message(msg) {
  document.querySelector("#msg").innerText = `Modal ${msg}`;
  document.querySelector("#msg").classList.toggle("alert-danger");
  document.querySelector("#msg").classList.toggle("alert-success");
}
setInterval(() => { modalToggle.toggle() }, 10000);
document.getElementById('toggleMyModal').addEventListener('hidden.bs.modal', function (event) {
  message("oculto");
});
document.getElementById('toggleMyModal').addEventListener('show.bs.modal', function (event) {
  message("visible");
});