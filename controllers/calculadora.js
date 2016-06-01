var obj_calculadora = {
	Url: function(view){
		return url_view('calculadora',view);
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
			self.EventoCalc(comando,el_content);
		});

		el_content.find('#result-calc').keyup(function( event ){
			if ( event.which == 13 ) {
				event.preventDefault();
				self.EventoCalc('=',el_content);
			}
		});
	},
	EventoCalc: function(comando,el_content){
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
