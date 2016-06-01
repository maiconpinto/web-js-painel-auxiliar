

function url_view(tela, view){
	return location+'views/'+tela+'/'+view+'.html';
}

function lalala(nome_obj){
	$.getScript(nome_obj+".js", function(){
		var el_local = $('#painel-content');
		
		obj_base.Init(el_local);
		nome_obj.Init
	});
}

function is_numeric(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

function is_year(value) {
   return /^\d{4}$/.test(value) && value > 1799 && value < 2501;
}

function is_int(value) {
   return /^\d+$/.test(value);
}

function is_date_br(s) {
   var first_test = /^\d{2}\/\d{2}\/\d{4}$/.test(s);
   if (!first_test)
      return false;
   var bits = s.split('/');
//   var d = new Date(bits[2], bits[1] - 1, bits[0]);
   var d = new Date(Date.UTC(bits[2]+'', (bits[1] - 1)+'', bits[0]+'','24'));
   
   return d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[0]);
}

function is_date_us(s) {
   var first_test = /^\d{4}\-\d{2}\-\d{2}$/.test(s);
   if (first_test === false)
      return false;
   var bits = s.split('-');
//   var d = new Date(bits[0], bits[1] - 1, bits[2]);
   var d = new Date(Date.UTC(bits[0]+'', (bits[1] - 1)+'', bits[2]+'','24'));
   return d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[2]);
}

function is_number_br(value) {
   return /^(-)?([0-9]{1,3})(\.[0-9]{3})*(\,[0-9]{1,}){0,1}$/.test(value);
}

function number_to_us(valor) {
   if (valor !== '' && valor !== '0' && valor.length > 0) {
      return parseFloat(valor.replaceAll('.', '').replace(',', '.'));
   }
}

function number_to_br(valor, decimals) {
   if (is_numeric(valor)) {
      return number_format(valor, decimals || 2, ',', '.');
   }
}

function number_format(number, decimals, dec_point, thousands_sep) {
   number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
   var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
         var k = Math.pow(10, prec);
         return '' + Math.round(n * k) / k;
      };
   // Fix for IE parseFloat(0.55).toFixed(0) = 0;
   s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
   if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
   }
   if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
   }
   return s.join(dec);
}

function date_to_br(date) {
   if (is_date_us(date)) {
      var dat = date.split('-');
      return dat[2] + '/' + dat[1] + '/' + dat[0];
   }
}

function date_to_us(date) {
   if (is_date_br(date)) {
      var dat = date.split('/');
      return dat[2] + '-' + dat[1] + '-' + dat[0];
   }
}


