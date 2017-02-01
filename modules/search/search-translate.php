<?php

	function mont_option_select_by_array($value, $desc){
		return '<option value="'.$value.'" >'.$desc.'</option>';
	}

	$optLanguage = array(
		'pt' => 'Português',
		'en' => 'Inglês',
		'es' => 'Espanhol',
		'fr' => 'Françês',
		'ru' => 'Russo'
	);
	$optionListSelect = array_map("mont_option_select_by_array", array_keys($optLanguage), $optLanguage);
?>
<div class="row">
	<div class="col-lg-6">
		De: <select id='opt-de'><?=implode(' ',$optionListSelect)?></select>
    </div>
	<div class="col-lg-6">
		Para: <select id='opt-para'><?=implode(' ',$optionListSelect)?></select>
    </div>
</div>
<div class="row">
	<div class="col-lg-12">
		<input class="form-control" id="busc-texto" placeholder="texto traduzir">
    </div>
</div>
<div class="row">
	<div class="col-lg-12">
		<p class="help-block">translate.google.com</p>
	</div>
</div>
<div class="row">
	<div class="col-lg-12">
		<button type="button" class="btn btn-info" id="busc-gerar">Traduzir</button> 
    </div>
</div>
