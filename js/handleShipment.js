async function logShipment(id) {
  const response = await fetch(
    `https://be-balikpapan-21-production.up.railway.app/api/shipment/${id}`
  );
  const shipment = await response.json();
  return shipment.data
}

let form = document.getElementById("search-receipt");
let result = document.querySelector(".result");
let origin = document.querySelector("#origin")
let destination = document.querySelector("#destination")
let status = document.querySelector("#status")
let orderedAt = document.querySelector("#orderedAt")
let pickedAt = document.querySelector("#pickedAt")
let arrivedAt = document.querySelector("#arrivedAt")
let not_found = document.querySelector(".not-found")

form.addEventListener("submit", async(event) => {
  event.preventDefault();

  let receipt_id = event.target.receipt_id.value;

  const data = await logShipment(receipt_id);

  if(data) {
      not_found.classList.add("none-display")
      result.classList.remove("none-display")

      origin.innerHTML = ""
      destination.innerHTML = ""
      status.innerHTML = ""
      orderedAt.innerHTML = ""
      pickedAt.innerHTML = ""
      arrivedAt.innerHTML = ""

      origin.innerHTML += data.origin
      destination.innerHTML += data.destination
      status.innerHTML += data.status
      orderedAt.innerHTML += new Date(data.orderedAt).toLocaleString()
      pickedAt.innerHTML += new Date(data.pickedAt).toLocaleString()
      arrivedAt.innerHTML += new Date(data.arrivedAt).toLocaleString()
  }

  if(!data) {
      result.classList.add("none-display")

      not_found.classList.remove("none-display")
  }
});