<?php
$fruits=array('banane','pomme','poire','fraise');
$nb=count($fruits);
for($i=0;$i<$nb;$i++){
echo $fruits[$i];
	if($i<$nb-1){
	echo ", ";
	}	
}
?>