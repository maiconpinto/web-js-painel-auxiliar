;(function( undefined ) {
	'use strict';

	require.config({  
		name: 'Painel',
		paths: {
			'jquery': 'assets/js/jquery-2.2.4.min',
			'bootstrap': 'assets/bootstrap/dist/js/bootstrap.min',
			'metisMenu': 'assets/metisMenu/dist/metisMenu.min',
		}
	});

	require([
		'jquery',
		'bootstrap',
		'metisMenu',
		'assets/js/functions',
		'controllers/base',
		'controllers/bootstrap',
		'controllers/calculadora',
		'controllers/cores',
		'controllers/busca_painel',
		'controllers/busca',
		'controllers/item',
		'controllers/item_teste',
		'controllers/gerador_docs'
	], function() {
		var el_local = $('#painel-content');
		obj_base.Init(el_local);
	});
})();
