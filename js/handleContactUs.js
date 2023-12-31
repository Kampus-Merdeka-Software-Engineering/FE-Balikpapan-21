
async function submitContactUs(data) {
    try {
      const response = await fetch("https://be-balikpapan-21-production.up.railway.app/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();

      contactUsForm.reset();
      toggleModal();
      console.log(result);
      

    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  let contactUsForm = document.getElementById("contactUsForm");

  function toggleModal() {
    let modal = document.querySelector(".modal");
    modal.classList.toggle("active");
  }
  
  contactUsForm.addEventListener("submit", async(event) => {
    event.preventDefault();
  
    let nama = event.target.nama.value;
    let email = event.target.email.value;
    let nomorHp = event.target.nomorhp.value;
    let pesan = event.target.pesan.value;
  
    let data = {
      nama,
      email,
      nomorHp,
      pesan
    }
  
    submitContactUs(data)
  })