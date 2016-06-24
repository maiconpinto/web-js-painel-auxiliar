define(
	["jquery", "func", "func_search", "bootstrap"],
	function ($, func) {
		return {
			Url: function(view){
				return url_view('search',view);
			},
			Init: function(el_local,tipo_busca){
				var self = this;
				var url = this.Url('form');

				$.post(url, {}, function (html_view) {
					el_local.html(html_view);
					self.Render(el_local);
				});
			},
			Render: function(el_content){
				var self = this;

				el_content.find('.search-opt').click(function(){
					var s_option = $(this).data('option');
					var el_active_search = el_content.find('#search-content');

					var url = self.Url('search-'+s_option);
					$.post(url, {}, function (html_view) {
						el_active_search.html(html_view);
						self.RenderSearch(el_active_search, s_option);
					});
				});
			},
			RenderSearch: function(el_content, s_option){
				var self = this;

				el_content.find('#busc-gerar').click(function(){
					self.ExecutarBusca(el_content, s_option);
				});

				el_content.find('#busc-texto').keyup(function(event){
					if(event.which == 13) {
						self.ExecutarBusca(el_content, s_option);
					}
				});
			},
			ExecutarBusca: function(el_content, s_option){
				var self = this;
				var str_busca = el_content.find('#busc-texto').val();

				if(s_option == 'all'){
					self.BuscarGeral(str_busca);
				} else if(s_option == 'whois'){
					self.BuscarWhois(str_busca);
				} else if(s_option == 'map'){
					self.BuscarMapa(str_busca);
				}
			},
			BuscarGeral: function(str_busca){
				search_all(str_busca);
			},
			BuscarWhois: function(str_busca){
				search_whois(str_busca);
			},
			BuscarMapa: function(str_busca){
				search_map(str_busca);
			}
		}
	}
);