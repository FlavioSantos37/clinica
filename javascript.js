const menuItems= document.querySelectorAll('.menu a');
menuItems.forEach(item=>{
   item.addEventListener('click',scrollToIdOnclick);
})
function scrollToIdOnclick(event){
  event.preventDefault();
 
 
  const to = getScrollTopByhref(event.target)-80;
   scrollToPosition(to)
}

function scrollToPosition(to){
  window.scroll({
    top:to,
    behavior:'smooth',
  });

}


function getScrollTopByhref(element){
  const id= element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}