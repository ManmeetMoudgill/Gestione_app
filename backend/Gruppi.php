
<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
include './connessione.php';
$sql="SELECT * FROM gruppi";
$query=mysqli_query($conn,$sql);

$selectHtml="<select>";
while($res=mysqli_fetch_assoc($query)){
   $selectHtml.="<option id=".$res['id_gruppo'].">".$res['nome']."</option>";
}
$selectHtml.="</select>";


echo $selectHtml;



?>