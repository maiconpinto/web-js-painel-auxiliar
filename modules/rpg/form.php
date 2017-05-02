<?php include('list_basic.php'); ?>
<div id="teste">
	<form  id="formDadosPerson" >
		<div class="optCriar">
			<label>Sexo:</label>
			<select name="sexo">
				<option value="">Aleatório</option>
				<?php foreach ($sexo as $opt) { ?>
					<option><?php echo $opt; ?></option>
				<?php } ?>
			</select>
		</div>
		<div class="optCriar">
			<label>Raça:</label>
			<select name="raca">
				<option value="">Aleatório</option>
				<?php foreach ($raca as $opt) { ?>
					<option><?php echo $opt; ?></option>
				<?php } ?>
			</select>
		</div>

		<div class="optCriar">
			<label>Classe:</label>
			<select name="classe">
				<option value="">Aleatório</option>
				<?php foreach ($classe as $opt) { ?>
					<option><?php echo $opt; ?></option>
				<?php } ?>
			</select>
		</div>

		<div class="optCriar">
			<label>Idade:</label>
			<input type="text" name="idade_min" value="16">até<input type="text" name="idade_max" value="55"/> anos
		</div>
		<div class="optCriar">
			<label>Peso:</label>
			<input type="text" name="peso_min" value="45">até<input type="text" name="peso_max" value="120"/>kg
		</div>
		<div class="optCriar">
			<label>Altura:</label>
			<input type="text" name="altura_min" value="100">até<input type="text" name="altura_max" value="220"/>cm
		</div>
	</form>

	
</div>

<div class="row">
	<div class="col-lg-12">
	    <input class="form-control" id="cript-text" placeholder="Texto">
    </div>
</div>
<div class="row">
	<div class="col-lg-12" id="personagem-result"></div>
</div>