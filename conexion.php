<?php

function conectar(){
	$user="root";
	$pass="";
	$server="localhost";
	$db="proyecto";
	$con=mysqli_connect($server,$user,$pass)or die("Error al conectar la base de datos".mysqli_error());
	mysqli_select_db($con, $db);
	return $con;
}

function imprimir_tabla(){
	$con=conectar();
	$query_notas = "SELECT * FROM notas";
	$notas =  mysqli_query($con, $query_notas);
	return $notas;
}
?>