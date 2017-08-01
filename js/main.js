/*-----------CONSTRUCTEUR-----------------*/

function player (nom , attaque , defense , santée){
  this.nom=nom,
  this.attaque=attaque,
  this.defense=defense,
  this.santée=santée,
  this.getName= function (){

  alert("nom : " + this.nom + " -puissance d'attaque : "
  + this.attaque + " -defense : "
   + this.defense + " -santée : " + this.santée);

};
}
/*--------------OBJET-HERO---------------*/
var hero=new player ("GI JO ", 15 , 10 , 100);

/*--------------APPEL DE L'OBJET HERO------------*/
  hero.getName();
/*---------------ADVERSAIRE----------------------*/

var adv1=new player ("guerrier trump", 25 , 13 , 100);

/*----------------appel TRUMP---------------------*/

adv1.getName();

/*----------------adversaire 2---------------------*/

var adv2=new player ("guerrier laden", 15 , 8 , 100);

/*-----------------appel laden----------------------*/

adv2.getName();

/*--------------- COMBAT GI JO VS TRUMP---------------*/
alert(hero.nom + "attaque " + adv1.nom);
adv1.santée=adv1.santée-hero.attaque;
alert("la santé de " + adv1.nom + " est de " + adv1.santée);
adv1.getName();

/*--------------- COMBAT laden VS GI JO---------------*/

alert(adv2.nom + " en profite et attaque " + hero.nom + " 3 fois " );
hero.santée=hero.santée-adv2.attaque *3;
alert("la santé de " + hero.nom + " est de " + hero.santée);
hero.getName();

/*constructeur----------MAGICIEN------------------------*/


function magicien (nom , attaque , defense , santée , mana){
  this.nom=nom,
  this.attaque=attaque,
  this.defense=defense,
  this.santée=santée,
  this.mana=mana,
  this.getName= function (){

  alert("nom : " + this.nom + " -puissance d'attaque : " + this.attaque + " -defense : " + this.defense + " -santée : " + this.santée + " -mana =" + this.mana);

};
}

/*--------------------objet MAGICIEN------------------*/

alert("un soigneur connu de tout le monde passé par la, c etait")

var soigneur=new magicien( "merlin", 15 , 8 , 100 , 20);

soigneur.getName();

alert("le " + adv1.nom + " le " + adv2.nom + " attaque notre "
 + soigneur.nom);

 soigneur.santée= soigneur.santée - (adv1.attaque + adv2.attaque);
 soigneur.getName();
 
soin=function(){
if (soigneur.mana<=10) {
  soigneur.mana=10;
  soigneur.santé=soigneur.santé-10;
  alert("merlin n'a plus assez de mana pour ce soigner");
}
else if(soigneur.santée <100){
  soigneur.mana=soigneur.mana -10;
  soigneur.santée=soigneur.santée +10;
  alert("merlin se soigne ca vie est de " + soigneur.santée);
  alert("malheureusement en se soignant il perd 10 point de mana et ne lui en reste plus que " + soigneur.mana);
}
else {
  alert("c'est chaud");
}
};
soin();

soigneur.getName();

alert(adv1.nom + "decide de l attaquer dans le dos");
soigneur.santé=soigneur.santé-adv1.attaque;
soigneur.getName();
soin();
