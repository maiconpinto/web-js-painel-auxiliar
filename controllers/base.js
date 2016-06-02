var obj_base = {
	Url: function(view){
		return url_view('base',view);
	},
	Init: function(el_local){
		var self = this;
		var url = this.Url('form');
		$.post(url, {}, function (html_view) {
			el_local.html(html_view);
			self.Render(el_local);
		});
	},
	Render: function(el_content){
		el_content.find('.painel-option').click(function(){
			var base_content = el_content.find('#base-content');
			var painel_option = $(this).data('option');
			
			if(painel_option == 'bootstrap'){
				obj_bootstrap.Init(base_content);
			} else if(painel_option == 'calculadora'){
				obj_calculadora.Init(base_content);
			} else if(painel_option == 'cores'){
				obj_cores.Init(base_content);
			} else if(painel_option == 'busca'){
				obj_busca.Init(base_content);
			}
		});
	}
}
