<div class="row">
	<div class="col-lg-12">
	    
    </div>
</div>
<div class="row">
	<div class="col-lg-12">
	    <button type="button" class="btn btn-info" id="clima-atualizar">Atualizar</button> 
    </div>
</div>


<?php 

$ch = curl_init();
// informar URL e outras funções ao CURL
curl_setopt($ch, CURLOPT_URL, "http://servicos.cptec.inpe.br/XML/cidade/3591/previsao.xml");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Acessar a URL e retornar a saída
$output = curl_exec($ch);
// liberar
curl_close($ch);
// Substituir ‘Google’ por ‘PHP Curl’
//$output = str_replace('Google', 'PHP Curl', $output);
// Imprimir a saída
echo $output;

?>