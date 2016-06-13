var obj_busca = {
	Url: function(view){
		return url_view('busca',view);
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
		var self = this;

		var el_busc_geral = el_content.find('#busc-geral');
		el_busc_geral.find('#busc-gerar').click(function(){
			var str_busca = el_busc_geral.find('#busc-texto').val();
			window.open('https://www.google.com.br/search?q='+encodeURI(str_busca), '_blank');
			window.open('http://www.bing.com/search?q='+encodeURI(str_busca), '_blank');
		});

		var el_busc_whois = el_content.find('#busc-whois');
		el_busc_whois.find('#busc-gerar').click(function(){
			var str_busca = el_busc_whois.find('#busc-texto').val();
			window.open('http://www.whois.com/whois/'+str_busca, '_blank'); //melhor buscador
			window.open('http://who.is/whois/'+str_busca, '_blank');
			window.open('https://www.whois.net/'+str_busca, '_blank');
		});

		var el_busc_mapa = el_content.find('#busc-mapa');
		el_busc_mapa.find('#busc-gerar').click(function(){
			var str_busca = el_busc_mapa.find('#busc-texto').val();
			window.open('https://www.google.com.br/maps/place/'+encodeURI(str_busca), '_blank');
			window.open('https://maps.here.com/search/'+encodeURI(str_busca), '_blank');
			window.open('http://cep.guiamais.com.br/busca/'+encodeURI(str_busca), '_blank'); // cep
		});
	}
}
