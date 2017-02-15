<?php
	$menuList = array(
		'login' => 'Login',
		'prog' => array(
			'desc'=>'Programação',
			'menu'=> array(
				'bootstrap_help' => 'Bootstrap',
				'cores' => 'Cores'
			)
		),
		'calc' => 'Calculadora',
		'search' => 'Busca',
		'gerador_docs' => 'Gerar Docs',
		'cript' => 'Criptografia'
	);
?>
<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			<span class="sr-only"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="index.html">Painel Multifunção</a>
	</div>
	<div class="navbar-default sidebar" role="navigation">
		<div class="sidebar-nav navbar-collapse">
			<ul class="nav" id="side-menu">
				<?php
					foreach($menuList as $keyChamada => $descricao){
						if(is_array($descricao)){
				?>
					<li> 
						<a href="javascript:;"><?=$descricao['desc']?> <span class="fa arrow"></span></a>
						<ul class="nav nav-second-level">
							<?php foreach($descricao['menu'] as $subKeyChamada => $subDescricao){ ?>
							<li>
								<a href="javascript:;" class="get-module" data-option="<?=$subKeyChamada?>"><?=$subDescricao?></a>
							</li>
							<?php } ?>
						</ul>
					</li>
				<?php
						} else {
				?>
					<li>
						<a href="javascript:;" class="get-module" data-option="<?=$keyChamada?>"><?=$descricao?></a>
					</li>
				<?php 
						} 
					}
				?>
			</ul>
		</div>
	</div>
</nav>
