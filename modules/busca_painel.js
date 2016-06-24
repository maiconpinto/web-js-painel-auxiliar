var obj_busca_painel = {
	Url: function(view){
		return url_view('busca_painel',view);
	},
	Init: function(el_local){
		var self = this;
		var url = this.Url('form');

		$.post(url, {}, function (html_view) {
			el_local.html(html_view);

			var containerBusca = el_local.find('#busca-painel');
			obj_busca.Init(containerBusca,'geral');
			obj_busca.Init(containerBusca,'whois');
			obj_busca.Init(containerBusca,'mapa');
		});
	}
}