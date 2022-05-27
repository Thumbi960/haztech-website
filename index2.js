function Hope() {
    var conti = document.getElementById("cont");
    var moreText = document.getElementById("para");
    var btnText = document.getElementById("myButton");
  
    if (conti.style.display === "none") {
      conti.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      conti.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 
  function Faith() {
    var continua = document.getElementById("threedots");
    var moreinfo = document.getElementById("proceed");
    var btnT = document.getElementById("myButton2");
  
    if (continua.style.display === "none") {
      continua.style.display = "inline";
      btnT.innerHTML = "Read more";
      moreinfo.style.display = "none";
    } else {
      continua.style.display = "none";
      btnT.innerHTML = "Read less";
      moreinfo.style.display = "inline";
    }
  } 
  function Goodness() {
    var continual = document.getElementById("pause");
    var moredet = document.getElementById("andalso");
    var btnTn = document.getElementById("myButton3");
  
    if (continual.style.display === "none") {
      continual.style.display = "inline";
      btnTn.innerHTML = "Read more";
      moredet.style.display = "none";
    } else {
      continual.style.display = "none";
      btnTn.innerHTML = "Read less";
      moredet.style.display = "inline";
    }
  } 