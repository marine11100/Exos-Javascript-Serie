document.getElementsByTagName('button')[0].addEventListener('click',changeColor);
function changeColor(){
    var a=document.getElementsByTagName('input')[0].value;
    document.body.style.backgroundColor=a;

}