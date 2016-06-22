var obj_gerador_docs = {
	Url: function(view){
		return url_view('gerador_docs',view);
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

		el_content.find('#btn-gerar-cpf').click(function(){
			var campo = el_content.find('#result-doc');
			self.GerarCPF(campo);
		});

		el_content.find('#btn-gerar-cnpj').click(function(){
			var campo = el_content.find('#result-doc');
			self.GerarCNPJ(campo);
		});
	},
	GerarCPF: function(el_result){
		var comPontos = true;
		var min = 0;
		var max = 9;
		var n1 = randomIntFromInterval(min,max);
		var n2 = randomIntFromInterval(min,max);
		var n3 = randomIntFromInterval(min,max);
		var n4 = randomIntFromInterval(min,max);
		var n5 = randomIntFromInterval(min,max);
		var n6 = randomIntFromInterval(min,max);
		var n7 = randomIntFromInterval(min,max);
		var n8 = randomIntFromInterval(min,max);
		var n9 = randomIntFromInterval(min,max);
		var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
		d1 = 11 - ( mod(d1,11) );

		if (d1>=10) d1 = 0;

		var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
		d2 = 11 - ( mod(d2,11) );

		if (d2>=10) d2 = 0;

		var cpf = '';
		if(comPontos)
			cpf=''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
		else
			cpf=''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;

		el_result.val(cpf);
	},
	GerarCNPJ: function(el_result){
		var comPontos = true;
		var min = 0;
		var max = 9;
		var n1 = randomIntFromInterval(min,max);
		var n2 = randomIntFromInterval(min,max);
		var n3 = randomIntFromInterval(min,max);
		var n4 = randomIntFromInterval(min,max);
		var n5 = randomIntFromInterval(min,max);
		var n6 = randomIntFromInterval(min,max);
		var n7 = randomIntFromInterval(min,max);
		var n8 = randomIntFromInterval(min,max);
	    var n9 = 0; //randomiza(n);
	    var n10 = 0; //randomiza(n);
	    var n11 = 0; //randomiza(n);
	    var n12 = 1; //randomiza(n);

	    var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
	    d1 = 11 - ( mod(d1,11) );
	    if (d1>=10) d1 = 0;
	    var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
	    d2 = 11 - ( mod(d2,11) );
	    if (d2>=10) d2 = 0;

		var cnpj = '';
 		if(comPontos)
				cnpj = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
    	else
			cnpj = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;

		el_result.val(cnpj);
	}
}