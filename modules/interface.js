define(
	["jquery", "func", "bootstrap"],
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
				el_content.find('.get-module').click(function(){
					var m_list = el_content.find('#module-list');
					var m_option = $(this).data('option');

					require(['module_panel'], function(module_panel){
						module_panel.Init(m_list,m_option);
					});
				});
			}
		}
    }
);