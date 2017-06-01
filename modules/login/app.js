define(
	["jquery", "func", "bootstrap"],
	function ($, func, func_number) {
		return {
			Title: 'Acesso Restrito',
			SizeClass: 'col-lg-12',
			Url: function(view){
				return url_view('login',view);
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

				//el_content.find('#btn-gerar-cnpj').click(function(){
				//	var campo = el_content.find('#result-doc');
				//	self.GerarCNPJ(campo, true);
				//});
			}
			//GerarCPF: function(el_result, comPontos){
			//	el_result.val(mk_cpf(comPontos));
			//}
		}
	}
);