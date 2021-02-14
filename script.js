// Check width
var priceMobile = window.matchMedia("(max-width: 375px)");

function priceResponesive(priceMobile) {
  if (priceMobile.matches) {
    document.getElementById("price-desktop").style.display = "none";
    document.getElementById("price-mobile").style.display = "block";
    document.getElementById("discount").innerHTML = "25%"
  }
  else {
    document.getElementById("price-desktop").style.display = "block";
    document.getElementById("price-mobile").style.display = "none";
    document.getElementById("discount").innerHTML = "25% discount"
  }
}
priceResponesive(priceMobile);
priceMobile.addListener(priceResponesive);
// Get values
var price = document.getElementsByClassName("price");
var view = document.getElementById("view");
var myValue = document.getElementById("range");
// Array containts values
var viewList = [10 + "K", 50 + "K", 100 + "K", 500 + "K", 1 + "M"];
var priceList = [8, 12, 16, 24, 36];

// Check discount
var checkDiscount = document.getElementById("discountCheckbox");
var discount = 1;

function cDiscount() {
  if (checkDiscount.checked) {
    discount = 0.75;
    myValue.oninput();
  }
  else {
    discount = 1;
    myValue.oninput();
  }
}

// Set values on range
view.innerHTML = myValue.value;

myValue.oninput = function() {
  // Set multiple color for slider
  var thumbRange = (this.value - this.min)/(this.max - this.min)*100
  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + thumbRange + '%, rgba(0, 0, 0, 0.055) ' + thumbRange + '%, rgba(0, 0, 0, 0.055) 100%)'
  // Set price for all class name = price
  for (var i = 0; i < price.length; i++) {
    price[i].innerHTML = eval(priceList[this.value] * discount) + ".00";
  }
  view.innerHTML = viewList[this.value];
};

myValue.oninput(); // Set default