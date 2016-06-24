define(
	["jquery", "func", "bootstrap"],
	function ($, func) {
		return {
			Url: function(view){
				return url_view('bootstrap_help',view);
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
				var help_content = el_content.find('#help-content');

				el_content.find('.help-opt').click(function(){
					var help_option = $(this).data('help');
					self.InitHelp(help_content,help_option);
				});
			},
			InitHelp: function(el_help_content,help_option){
				var self = this;
				var url = this.Url('help_' + help_option);
				$.post(url, {}, function (help_view) {
					el_help_content.html(help_view);
				});
			}
		}
	}
);
