<?php

	// [key chamada] = texto exibir descrição
	$menuList = array(
		'login' => 'Login',
		'bootstrap_help' => 'Bootstrap',
		'calc' => 'Calculadora',
		'cores' => 'Cores',
		'search' => 'Busca',
		'gerador_docs' => 'Gerar Docs',
		'cript' => 'Cript'
	);

?>
<div class="navbar-default sidebar" role="navigation">
	<div class="sidebar-nav navbar-collapse">
		<ul class="nav" id="side-menu">
			<?php foreach($menuList as $keyChamada => $descricao){ ?>
				<li>
					<a href="javascript:;" class="get-module" data-option="<?=$keyChamada?>"><?=$descricao?></a>
				</li>
			<?php } ?>
			<!-- guardado para exemplo
			<li> 
				<a href="#">Cadastros <span class="fa arrow"></span></a>
				<ul class="nav nav-second-level">
					<li>
						<a href="flot.html">Pessoas</a>
					</li>
					<li>
						<a href="flot.html">Colaboradores</a>
					</li>
					<li>
						<a href="flot.html">Clientes</a>
					</li>
					<li>
						<a href="flot.html">Financeiro</a>
					</li>
					<li>
						<a href="flot.html">Produtos</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="flot.html">Movimentos</a>
			</li>
			<li>
				<a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Gráficos<span class="fa arrow"></span></a>
				<ul class="nav nav-second-level">
					<li>
						<a href="flot.html">Vendas Bruto e Líquido</a>
					</li>
					<li>
						<a href="flot.html">Inadimplentes(%)</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="#"><i class="fa fa-dashboard fa-fw"></i> BI<span class="fa arrow"></span></a>
				<ul class="nav nav-second-level">
					<li>
						<a href="flot.html">Vendas Bruto e Líquido</a>
					</li>
					<li>
						<a href="flot.html">DRE</a>
					</li>
				</ul>
			</li -->
		</ul>
	</div>
	<!-- /.sidebar-collapse -->
</div>