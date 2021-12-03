function changeColor(item,color){
  const changecolor = "img_" + item + "_" + color + ".png";
  const imgSource = "img/" + changecolor;
  const lumpImage=document.querySelectorAll(".lump")[0];
  lumpImage.setAttribute("src", imgSource);
}

function changeColor2(item,color){
  const changecolor = "img_" + item + "_" + color + ".png";
  const imgSource = "img/" + changecolor;
  const chairImage=document.querySelectorAll(".chair")[0];
  chairImage.setAttribute("src", imgSource);
  if (color === "black"){
    document.querySelector(".chair-price").innerHTML=" $203.99 After sale" + "<br>" + "reg $239.99 Save $36.00 (15% off)";
    document.querySelector(".chair-price").style.color="red";
  }else if (color === "green"){
    document.querySelector(".chair-price").innerHTML=" $203.99 After sale" + "<br>" + "reg $239.99 Save $24.00 (10% off)";
    document.querySelector(".chair-price").style.color="red";
  }else if (color === "zebra"){
    document.querySelector(".chair-price").innerHTML=" $233.99 After sale" + "<br>" + "reg $259.99 Save $26.00 (10% off)";
    document.querySelector(".chair-price").style.color="red";
  }else {
    document.querySelector(".chair-price").innerHTML="$233.99";
    document.querySelector(".chair-price").style.color="white";
  }
}

function changeColor3(item,color){
  const changecolor = "img_" + item + "_" + color + ".png";
  const imgSource = "img/" + changecolor;
  const sofaImage=document.querySelectorAll(".sofa")[0];
  sofaImage.setAttribute("src", imgSource);
   if (color === "green"){
    document.querySelector(".sofa-price").innerHTML=" $809.99 After sale" + "<br>" + "reg $899.99 Save $90.00 (10% off)";
    document.querySelector(".sofa-price").style.color="red";
  }else if (color === "blue"){
    document.querySelector(".sofa-price").innerHTML=" $539.09\n After sale" + "<br>" + "reg $598.99 Save $59.90 (10% off)";
    document.querySelector(".sofa-price").style.color="red";
  }else {
    document.querySelector(".sofa-price").innerHTML="$783.99";
    document.querySelector(".add-to-shop").innerHTML="🛒";
    document.querySelector(".sofa-price").style.color="white";
  }
}


const goTopBtn = document.getElementById("myBtn");
// When the user scrolls down 20px from the top, show the button
window.onscroll = function (){scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    goTopBtn.style.display="block";
  }else {
    goTopBtn.style.display="none";
  }
}

