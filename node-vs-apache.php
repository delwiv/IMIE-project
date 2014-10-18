<?php
$db = new PDO('mysql:host=localhost;dbname=*****', 'wp', '*****'); 
$all = $db
	->query('SELECT * FROM wp_options limit 50;')
	->fetchAll();
	
echo json_encode($all);
