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

var adv1=new player ("guerrier trump", 5 , 13 , 100);

/*----------------appel TRUMP---------------------*/

adv1.getName();

/*----------------adversaire 2---------------------*/

var adv2=new player ("guerrier laden", 7 , 8 , 100);

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
