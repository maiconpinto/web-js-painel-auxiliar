<?php
	$cidades = array(
		'3591' => 'Novo Hamburgo',
		'5092' => 'Sapiranga',
		'1929' => 'Estância Velha',
		'237' => 'Porto Alegre',
		'3994' => 'Pinherinho do Vale',
		'3511' => 'Nova Esperança do Sul',
	);
?>

<div class="row">
	<div class="col-lg-12">
		<?php foreach($cidades as $cod => $cidade){ ?>
		<button type="button" class="btn btn-sm btn-default prev-clima" data-cidade="<?=$cod?>"><?=$cidade?></button> 
	    <?php } ?> 
    </div>
</div>