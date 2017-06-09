define(
	["jquery", "app", "func", "bootstrap"],
	function ($, App) {
		return {
			Url: function(view){
				return url_view('finance',view);
			},
			Init: function(){
				var self = this;
				App.Modal({
					title: 'Indicadores Financeiros',
					url: self.Url('form'),
					size_class: 'col-lg-4',
					callback: function(div){
						self.Render(div);
					}
				});
			},
			Render: function(el_content){
				var self = this;

				el_content.find('.f-opt').click(function(){
					var s_option = $(this).data('option');
					if(s_option == 'juros'){
						self.Juros();
					}
				});
			},
			Juros: function(){
				var self = this;
				App.Modal({
					title: 'Finan Juros',
					url: self.Url('juros'),
					size_class: 'col-lg-4',
					callback: function(div){
						self.Render(div);
					}
				});
			}
		}
	}
);