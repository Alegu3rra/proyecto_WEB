<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="styles.css">
	<title>Proyecto X</title>
	<?php include("conexion.php");
	$con = conectar(); ?>

</head>

<body>
	<!-- <table align="center" border="0">
		<tr>
			<th>ID</th>
			<th>Título</th>
			<th>Cuerpo</th>
		</tr>
		<?php
		$notas = imprimir_tabla();
		while ($not = mysqli_fetch_assoc($notas)) {
		?>
		<tr>
			<th><?php echo $not['id']; ?></th>
			<th><?php echo $not['titulo']; ?></th>
			<th><?php echo $not['cuerpo']; ?></th>
		</tr>
		<?php
		}
		?>

	</table> -->
	<header>
		<nav>
			<a href="index.php"><img class="prrenvios" src="logo\logo.png" alt="logo"></img></a>
			<ul class="">
				<li class="li_nav"><a class="a_nav" href="Sobre_nosotros.php">Sobre nosotros</a></li>
				<li class="li_nav"><a class="a_nav" href="#">Contáctanos</a></li>
				<li class="li_nav"><a class="a_nav" href="#">Colaboradores</a></li>
			</ul>
		</nav>
		<a class="a_nav" href="#">¿Ocurrió un problema?</a>
	</header>
	<section>
		<div class="form_section">
			<h1 class="header_form pt-2">Envía tus correos <br> </h1>
			<h3 class="header_form">y ayuda a los gatos en situación de calle.</h2>
				<form action="POST" class="form">
					<label for="">Destino del correo</label>
					<input type="correo" class="form_correo" name="correo">
					<label for="">Asunto</label>
					<input type="text" class="form_text" name="asunto">
					<label for="">Mensaje</label>
					<input type="radio" id="other" name="gender" value="other">
					<label for="other">Other</label>
					<textarea class="form_mensaje" name="mensaje" id="form_mensaje" rows="5"></textarea>
					<button class="form_boton" type="submit">Enviar</button>
				</form>
		</div>
		<div class="form_section b-0">
			<img class="img_change" src="media/ash-edmonds-Co_hWX_XtEk-unsplash.jpg" alt="">
			<div class="div_consejo">
				<h3 class="num_consejo">Consejo #3:</h3>
				<p class="consejo">El rango de visión de un gato no incluye la zona por debajo de su nariz.</p>
			</div>
		</div>
	</section>

</body>

</html>