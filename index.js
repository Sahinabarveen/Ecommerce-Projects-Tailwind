//selecting top close top
var navTop = document.getElementById("nav-top")
var close = document.getElementById("close")

close.addEventListener("click",function(){
  navTop.style.display="none"
})

//selecting sidenav bar open and close
var sideNav = document.getElementById("sideNav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("closeNav")

menuicon.addEventListener("click",function(){
  sideNav.style.left=0
})

closeNav.addEventListener("click",function(){
  sideNav.style.left="-50%"
})

//sliderimage functions
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

//like button
document.querySelectorAll('.heart-btn').forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('liked');
  });
});


//collection page
// document.addEventListener("DOMContentLoaded", () => {
//   const searchBox = document.getElementById("searchBox");
//   const checkboxes = document.querySelectorAll(".filter");
//   const products = document.querySelectorAll(".product");

//   // Function to filter products
//   function filterProducts() {
//       let checkedFilters = Array.from(checkboxes)
//           .filter(checkbox => checkbox.checked)
//           .map(checkbox => checkbox.value);

//       products.forEach(product => {
//           let productCategories = product.getAttribute("data-category").split(" ");
//           let matchesFilter = checkedFilters.length === 0 || checkedFilters.some(filter => productCategories.includes(filter));
         
//           product.style.display = matchesFilter ? "block" : "none";
//       });
//   }

//   // Function to search products
//   function searchProducts() {
//       let searchValue = searchBox.value.toLowerCase();

//       products.forEach(product => {
//           let productName = product.getAttribute("data-name").toLowerCase();
//           let matchesSearch = productName.includes(searchValue);

//           product.style.display = matchesSearch ? "block" : "none";
//       });
//   }

//   // Add event listeners
//   checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterProducts));
//   searchBox.addEventListener("input", searchProducts);
// });







