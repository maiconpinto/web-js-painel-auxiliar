define(
	["jquery", "app", "func", "bootstrap"],
	function ($, App) {
		return {
			Url: function(view){
				return url_view('clima',view);
			},
			Init: function(){
				var self = this;
				App.Modal({
					title: 'Clima',
					url: self.Url('form'),
					size_class: 'col-lg-4',
					callback: function(div){
						self.Render(div);
					}
				});
			},
			Render: function(el_content){
				var self = this;
				var elString = el_content.find('#cript-text');

				// #webservice previsao do tempo
				// http://servicos.cptec.inpe.br/XML/listaCidades?city=porto%20alegre // para buscar cods
				// http://servicos.cptec.inpe.br/XML/listaCidades // 237 = poa, 5092 sapirang, 1929 estancia velha, 3591 nh, 4969 sao leo
				// http://servicos.cptec.inpe.br/XML/cidade/3591/previsao.xml // previsao do tempo prox 4 dias
				// http://servicos.cptec.inpe.br/XML/cidade/7dias/3591/previsao.xml // previsao do tempo prox 7 dias
				// http://servicos.cptec.inpe.br/XML/cidade/7dias/-22.90/-47.06/previsaoLatLon.xml // 7 dias para latitudo e longitude, pegando a cidade mais proxima
				// http://servicos.cptec.inpe.br/XML/cidade/3591/estendida.xml // 7 dias depois dos 7 normais, totalizando 14 dias de previsao
				// http://servicos.cptec.inpe.br/XML/#estacoes-metar
			}
		}
	}
);