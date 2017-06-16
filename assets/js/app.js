define(
	["jquery", "func", "bootstrap"],
	function ($) {
		return {
			Modal: function(options){
				var self = this;
				var el_list = $('#painel-content').find('#module-list'); // el da lista de modulos da tela
				var objSerial = obj_serial(); // criar id unico na tela do futuro objeto
				var objDiv = mk_panel(objSerial); // criar painel básico
				el_list.append(objDiv); // adicionar no dom nova tela
				
				var title = 'Painel';
				if(typeof options.title != 'undefined'){
					title = options.title;
				}

				var sizePanel = 'col-lg-4';
				if(typeof options.size_class != 'undefined'){
					sizePanel = options.size_class;
				}

				// chamada da estrutura padrao do model
				var url = url_view('interface','module_panel');
				$.post(url, {}, function (html_view) {
					var objPanelJq = el_list.find('#'+objSerial);
					objPanelJq.hide();
					objPanelJq.html(html_view);
					draggable(objSerial);

					//montando css do panel
					objPanelJq.addClass(sizePanel);
					objPanelJq.addClass('nopadding');

					// config details panel
					objPanelJq.find('#item-titulo').html(title);
					objPanelJq.find('#btn-item-fechar').click(function(){
						objDiv.parentNode.removeChild(objDiv);
					});

					// chamada do conteudo da modal requisitado
					$.post(options.url, {}, function (modal_html) {
						var el_modal = objPanelJq.find('#item-content');
						el_modal.html(modal_html);
						options.callback(el_modal);
						objPanelJq.show();
					});
				});
			}
		}
	}
);