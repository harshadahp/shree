var first=0;
function autoslide(){
  setTimeout(autoslide,4000);
  var pics;
  const img=document.querySelectorAll('img');
for(pics=0;pics<img.length;pics++)
    {
        img[pics].style.display="none";
    }
    first++;
    if(first>img.length){
      first =1;
    }
    img[first -1].style.display="block";
}
autoslide();


$('#menu-btn').click(function(){
  $('.nav ul').addClass('active')
});
$('#menu-close').click(function(){ 
  $('.nav ul').removeClass('active')
});
