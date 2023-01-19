const popupOnHover = document.getElementsByClassName("popup-on-hover");

const displayOnHover = document.getElementsByClassName("display-on-hover");


for (var i = 0; i < popupOnHover.length; i++) {
    popupOnHover.onmouseover = function() {
      displayOnHover[i].style.display = "block";
    }

    popupOnHover.onmouseout = function() {
      displayOnHover[i].style.display = "none";
    }
  }

