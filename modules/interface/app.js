define(
	["jquery", "func", "func_number", "bootstrap"],
	function ($) {
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
					var mod_name = $(this).data('option');
					require([(mod_name+'/app')], function(mod_name){
						mod_name.Init();
					});
				});
			}
		}
    }
);