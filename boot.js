;(function( undefined ) {
	'use strict';

	require.config({  
		name: 'Painel',
		baseUrl: "modules",
		paths: {
			'jquery': '../assets/js/jquery-2.2.4.min',
			'bootstrap': '../assets/bootstrap/dist/js/bootstrap.min',
			'metisMenu': '../assets/metisMenu/dist/metisMenu.min',
			'func' : '../assets/js/func',
			'func_date' : '../assets/js/func_date',
			'func_number' : '../assets/js/func_number',
			'func_search' : '../assets/js/func_search'
		}
	});

	require(['jquery', 'interface'], function($, Interface){
		var el_local = $('#painel-content');
		Interface.Init(el_local);
	});
})();
