define(
	["jquery", "func", "func_number", "bootstrap"],
	function ($, func, func_number) {
		return {
			Url: function(view){
				return url_view('calculadora',view);
			},
			Init: function(el_local){
				var self = this;
				var url = this.Url('form');

				$.post(url, {teste: 'casa'}, function (html_view) {
					el_local.html(html_view);
					self.Render(el_local);
				});
			},
			Render: function(el_content){
				var self = this;
				self.RenderIMC(el_content.find('#estrutura-imc'));
			},
			RenderIMC: function(el_content){
				var self = this;
				el_content.find('#btn-calc-imc').click(function(){
					var peso_imc = el_content.find('#peso-imc').val();
					var altura_imc = el_content.find('#altura-imc').val();
					var resultado_imc = peso_imc / (altura_imc * altura_imc);
					el_content.find('#result-imc').val(resultado_imc);
				});
			}
		}
	}
);