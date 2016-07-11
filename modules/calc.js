define(
	["jquery", "func", "func_number", "bootstrap"],
	function ($) {
		return {
			Title: 'Calculadora',
			SizeClass: 'col-lg-3',
			Url: function(view){
				return url_view('calc',view);
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
				el_content.find('.btn-num-calc').click(function(){
					var comando = $(this).data('comando');
					self.EventoComandoCalc(comando,el_content);
				});

				el_content.find('#result-calc').keyup(function( event ){
					if ( event.which == 13 ) {
						event.preventDefault();
						self.EventoComandoCalc('=',el_content);
					}
				});
			},
			EventoComandoCalc: function(comando,el_content){
				var result_calc = el_content.find('#result-calc');
				if(comando == 'c'){
					result_calc.val('');
				} else if(comando == '='){
					result_calc.val(eval(result_calc.val()));
					//Calc.Input.value = eval(Calc.Input.value)
				} else {
					result_calc.val(result_calc.val()+comando);
				}
			}
		}
	}
);