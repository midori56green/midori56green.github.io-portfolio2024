<?php

//video.php

$data = array(
	'status' => 'true',
	'uri' => 'http://localhost///live.mp4',
	'created_at' => date('Y/m/d H:i:s'),
);

$data2 = array(
	'status' => 'false',
	'created_at' => date('Y/m/d H:i:s'),
);


if(rand(0,11)%2 == 0){
	print json_encode($data);
}else{
	print json_encode($data2);
}

?>