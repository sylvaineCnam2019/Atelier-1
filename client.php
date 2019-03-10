<?php
echo "Bienvenue ".$_POST["prenom"]." <b>".$_POST["nom"]."</b>.</br>";
echo "Nous avons bien noté que vous habitez à l’adresse : "
.$_POST["adresse"]." ".$_POST["ville"]." (".$_POST["cp"].")";
?>