define(
	["jquery", "bootstrap"],
	function ($) {
		return {
			Title: 'Cores',
			SizeClass: 'col-lg-8',
			Url: function(view){
				return url_view('cores',view);
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
				//el_content.find('#estrutura');
			}
		}
	}
);