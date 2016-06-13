var obj_busca = {
	Url: function(view){
		return url_view('busca',view);
	},
	Init: function(el_local,tipo_busca){
		var self = this;
		var url = this.Url('app-busca-'+tipo_busca);

		$.post(url, {}, function (html_view) {
			var objS = obj_serial();
			var objDiv = document.createElement('div');
			objDiv.className = 'col-lg-4 app-painel'
			objDiv.id = objS;

			el_local.append(objDiv);

			var objDivQ = el_local.find('#'+objS);
			objDivQ.attr('data-busca-tipo',tipo_busca);
			objDivQ.html(html_view);
			
			self.Render(objDivQ);
		});
	},
	Render: function(el_content){
		var self = this;

		el_content.find('#busc-gerar').click(function(){
			self.ExecutarBusca(el_content);
		});

		el_content.find('#busc-texto').keyup(function(event){
			if(event.which == 13) {
				self.ExecutarBusca(el_content);
			}
		});
	},
	ExecutarBusca: function(el_content){
		var self = this;
		var str_busca = el_content.find('#busc-texto').val();
		var tipo_busca = el_content.data('busca-tipo');

		if(tipo_busca == 'geral'){
			self.BuscarGeral(str_busca);
		} else if(tipo_busca == 'whois'){
			self.BuscarWhois(str_busca);
		} else if(tipo_busca == 'mapa'){
			self.BuscarMapa(str_busca);
		}
	},
	BuscarGeral: function(str_busca){
		window.open('https://www.google.com.br/search?q='+encodeURI(str_busca), '_blank');
		window.open('http://www.bing.com/search?q='+encodeURI(str_busca), '_blank');
	},
	BuscarWhois: function(str_busca){
		window.open('http://www.whois.com/whois/'+str_busca, '_blank'); //melhor buscador
		window.open('http://who.is/whois/'+str_busca, '_blank');
		window.open('https://www.whois.net/'+str_busca, '_blank');
	},
	BuscarMapa: function(str_busca){
		window.open('https://www.google.com.br/maps/place/'+encodeURI(str_busca), '_blank');
		window.open('https://maps.here.com/search/'+encodeURI(str_busca), '_blank');
		window.open('http://cep.guiamais.com.br/busca/'+encodeURI(str_busca), '_blank'); // cep
	}
}
