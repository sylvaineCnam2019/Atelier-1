var rep1=false;
var rep2=false;
var rep3=false;
var rep4=false;
var rep5=false;

var tabrep=['false','false','false','false','false'];
var rep=false;

var nom;
var pren;
var adr;
var ville;
var cp;
var valeur=0;

var reg=new RegExp("^[0-9]{5}$");

function valbutton(){
document.getElementById("bouton").disabled=true;
}



function valNom(){
nom=document.forms["client"].elements["nom"].value;
if(nom.length<2||nom.length>30){
tabrep[0]=false;
document.forms["client"].elements["nom"].style.backgroundColor="red";}
else{
tabrep[0]=true;
document.forms["client"].elements["nom"].style.backgroundColor="white";}
for(var i=0;i<tabrep.length;i++){
if(tabrep[i]==false){
rep=false;
break;}
else{
rep=true;}
}
if(rep==true){
document.getElementById("bouton").disabled=false;}
else{
document.getElementById("bouton").disabled=true;}
}

function valPrenom(){
pren=document.forms["client"].elements["prenom"].value;
if(pren.length<2||pren.length>30){
tabrep[1]=false;
document.forms["client"].elements["prenom"].style.backgroundColor="red";}
else{
tabrep[1]=true;
document.forms["client"].elements["prenom"].style.backgroundColor="white";}
for(var i=0;i<tabrep.length;i++){
if(tabrep[i]==false){
rep=false;
break;}
else{
rep=true;}
}
if(rep==true){
document.getElementById("bouton").disabled=false;}
else{
document.getElementById("bouton").disabled=true;}
}

function valAdr(){
adr=document.forms["client"].elements["adresse"].value;
if(adr.length<2||adr.length>30){
tabrep[2]=false;
document.forms["client"].elements["adresse"].style.backgroundColor="red";}
else{
tabrep[2]=true;
document.forms["client"].elements["adresse"].style.backgroundColor="white";}
for(var i=0;i<tabrep.length;i++){
if(tabrep[i]==false){
rep=false;
break;}
else{
rep=true;}
}
if(rep==true){
document.getElementById("bouton").disabled=false;}
else{
document.getElementById("bouton").disabled=true;}
}


function valVille(){
ville=document.forms["client"].elements["ville"].value;
if(ville.length<2||ville.length>30){
tabrep[3]=false;
document.forms["client"].elements["ville"].style.backgroundColor="red";}
else{
tabrep[3]=true;
document.forms["client"].elements["ville"].style.backgroundColor="white";}
for(var i=0;i<tabrep.length;i++){
if(tabrep[i]==false){
rep=false;
break;}
else{
rep=true;}
}
if(rep==true){
document.getElementById("bouton").disabled=false;}
else{
document.getElementById("bouton").disabled=true;}
}

function valCp(){
cp=document.forms["client"].elements["cp"].value;
if(reg.test(cp)==false){
tabrep[4]=false;
document.forms["client"].elements["cp"].style.backgroundColor="red";}
else{
tabrep[4]=true;
document.forms["client"].elements["cp"].style.backgroundColor="white";}
for(var i=0;i<tabrep.length;i++){
if(tabrep[i]==false){
rep=false;
break;}
else{
rep=true;}
}
if(rep==true){
document.getElementById("bouton").disabled=false;}
else{
document.getElementById("bouton").disabled=true;}
}