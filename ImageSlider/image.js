var slidering=document.querySelectorAll(".slider-img");
var imageslist=['IMG1.JPG','IMG3.JPG','IMG4.JPG','IMG5.JPG','IMG6.JPG','IMG7.JPG'];
var i=0

function prev()
{
    if(i<=0) i = imageslist.length;
    i--;
    return setImg;

}
function Next()
{
   if(i>=imageslist.length - 1) i=-1;
   i++;
   return setImg();
}

function setImg()
{
    return slidering.setAttribute('src','imageslist/'+imageslist[i])
}
9304380318
