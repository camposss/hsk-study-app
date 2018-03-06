<?php
//step1
$cSession = curl_init(); 
//step2
curl_setopt($cSession,CURLOPT_URL,"http://data.hskhsk.com/lists/HSK%20Official%202012%20L2.txt");
// curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
// curl_setopt($cSession,CURLOPT_HEADER, false); 
//step3
$result=curl_exec($cSession);
//step4
curl_close($cSession);
//step5
// $result= array();
echo 'this is the array length ' .count( $result);

// echo count($result);
echo 'this is the string length ' .strlen( $result);
for($i=0; $i<$result["length"]; $i++){
    echo $result[$i];
}

?>