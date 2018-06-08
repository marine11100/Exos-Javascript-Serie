document.getElementById('valider').addEventListener('click',calculer);
function calculer(){
    var nombre1=document.getElementsByTagName('input')[0].value;
    var nombre2=document.getElementsByTagName('input')[1].value;
    var resultat=nombre1%nombre2;
    alert('Si l\'on divise '+nombre1+' et '+nombre2+' le reste est de '+resultat+'!');

}