function handleOnClickImg(e) {
  document.getElementById('id01').style.display='block';

  const btnId = e.id;
  let imgSrc = "";
  switch (btnId) {
    case "btnImg1":
        imgSrc = "images/carro1.jpg";
      break;
      case "btnImg2":
          imgSrc = "images/carro2.jpg";
        break;
        case "btnImg3":
          imgSrc = "images/carro3.png";
        break;
        case "btnImg4":
          imgSrc = "images/carro4.jpg";
        break;
        case "btnImg5":
          imgSrc = "images/carro5.png";
        break;
    default:

  }

  const imgModal = document.getElementById("modalImg");
  imgModal.src = imgSrc;
}
