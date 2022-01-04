/* script2 */
  function requiredElement() {
  if (document.formsaise.nom.value == "" )
  { alert("Le champs de nom est vide");
  document.getElementById("nom").style.background = '#CC3300';
  document.getElementById("nom").focus();
  return false ;}
  if (document.formsaise.prenom.value == "" )
  {alert("Le champs de prenom est vide");
  document.getElementById("prenom").style.background = '#CC3300';
  document.getElementById("prenom").focus();
  return false ;}
  if (document.formsaise.email.value == "" )
  { alert("Le champs de est emailvide");
  document.getElementById("email").style.background = '#CC3300';
  document.getElementById("email").focus();
  return false ;}
                           }
  function nomValidate(){
    var sps=document.formsaise.nom;
    var letters = /^[A-Za-z]+$/;
      if (sps.value.match(letters)) {
           return true;}
      else {
  alert(" Le nom ne doit contenir que des lettres");
}}
  function prenomVAlidate(){
    var sps=document.formsaise.prenom;
    var letters = /^[A-Za-z]+$/;
      if (sps.value.match(letters)) {
           return true;}
      else {
  alert(" Le prenom ne doit contenir que des lettres");
    }}
  function checkEmail(email) {
                 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 return re.test(email);
             }
  function validateEmail() {
                 var email = document.getElementById("email").value;

                 if (checkEmail(email)) {
                     return true;
                 } else {
                     alert('Adresse e-mail non valide');
                 }
                 return false;
             }