define(
	["jquery", "func", "func_number", "bootstrap"],
	function ($, func) {
		return {
			Url: function(view){
				return url_view('interface',view);
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

				el_content.find('.get-module').click(function(){
					var m_list = el_content.find('#module-list');
					var m_option = $(this).data('option');
					self.ModulePanel(m_list,m_option);
				});
			},
			ModulePanel: function(el_list, module_option){
				var self = this;
				var url = this.Url('module_panel');
				var objSerial = obj_serial();

				// make div to model
				var objDiv = mk_panel(objSerial); // controle do tamanho
				el_list.append(objDiv);
				var objPanelJq = el_list.find('#'+objSerial);

				// call basic view panel 
				$.post(url, {}, function (html_view) {
					objPanelJq.html(html_view);

					// call module and config panel
					objPanelJq.hide();
					self.LoadModule(objPanelJq, module_option, objDiv);
				});
			},
			LoadModule: function(el_content, module_option, objDiv){
				var self = this;

				// make content panel with module
				var locationModule = module_option+'/app'; // default module: nome_module_dir/app.js
				var el_item_option = el_content.find('#item-content');
				require([locationModule], function(module_option){
					module_option.Init(el_item_option);

					var title = 'Painel';
					if(typeof module_option.Title != 'undefined'){
						title = module_option.Title;
					}

					var sizePanel = 'col-lg-4';
					if(typeof module_option.SizeClass != 'undefined'){
						sizePanel = module_option.SizeClass;
					}

					//montando css do panel
					el_content.addClass(sizePanel);
					el_content.addClass('nopadding');

					// config details panel
					el_content.find('#item-titulo').html(title);
					el_content.find('#btn-item-fechar').click(function(){
						objDiv.parentNode.removeChild(objDiv);
					});
					el_content.show();
				});
			}
		}
    }
);