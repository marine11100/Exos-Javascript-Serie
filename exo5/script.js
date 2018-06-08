document.getElementsByTagName('button')[0].addEventListener('click',calcul);
function calcul(){
    var age=document.getElementsByTagName('input')[0].value;
    var annee=365;
    var nbJours=age*annee;
    alert('Vous avez vécu '+nbJours+' jours!');
}
