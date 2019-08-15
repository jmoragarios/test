function handleOnClickImg(e) {
  document.getElementById('id01').style.display='block';

  const btnId = e.id;
  let imgSrc = "";
  switch (btnId) {
    case "btnImg1":
        imgSrc = "images/carro1.jpg";
      break;
    default:

  }

  const imgModal = document.getElementById("modalImg");
  imgModal.src = imgSrc;
}
