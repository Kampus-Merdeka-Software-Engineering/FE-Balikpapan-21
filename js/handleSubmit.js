async function logShipment(id) {
    const response = await fetch(
      `http://localhost:3000/api/shipments/${id}`
    );
    const shipment = await response.json();
    return shipment.data
}

  let form = document.getElementById("search-receipt");
  let result = document.querySelector(".result");
  let origin = document.querySelector("#origin")
  let destination = document.querySelector("#destination")
  let status = document.querySelector("#status")
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

        origin.innerHTML += data.origin
        destination.innerHTML += data.destination
        status.innerHTML += data.status
    }

    if(!data) {
        result.classList.add("none-display")

        not_found.classList.remove("none-display")
    }
  });