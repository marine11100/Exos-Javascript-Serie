document.getElementsByTagName('button')[0].addEventListener('click',image);
function image(){
    var a=document.getElementsByTagName('input')[0].value;
    var b=document.createElement('img');
    b.src=a;
    document.getElementsByTagName('body')[0].appendChild(b);

}