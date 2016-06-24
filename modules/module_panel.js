define(
	["jquery", "func", "func_number", "bootstrap"],
	function ($, func) {
		return {
			Url: function(view){
				return url_view('module_panel',view);
			},
			Init: function(el_list, module_option){
				var self = this;
				var url = this.Url('form');
				var objSerial = obj_serial();

				// make div to model
				var objDiv = mk_panel(objSerial,'col-lg-4'); // controle do tamanho
				el_list.append(objDiv);
				var objPanelJq = el_list.find('#'+objSerial);

				// call basic view panel 
				$.post(url, {}, function (html_view) {
					objPanelJq.html(html_view);

					// call module and config panel
					self.LoadModule(objPanelJq, module_option, objDiv);
				});
			},
			LoadModule: function(el_content, module_option, objDiv){
				var self = this;

				// make content panel with module
				var el_item_option = el_content.find('#item-content');
				require([module_option], function(module_option){
					module_option.Init(el_item_option);

					var title = 'Painel';
					if(typeof module_option.Title != 'undefined'){
						title = module_option.Title;
					}
					// config details panel
					el_content.find('#item-titulo').html(title);
					el_content.find('#btn-item-fechar').click(function(){
						objDiv.parentNode.removeChild(objDiv);
					});
				});
			}
		}
	}
);