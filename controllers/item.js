var obj_item = {
	Url: function(view){
		return url_view('item',view);
	},
	Init: function(el_item_list, item_option){
		var self = this;
		var url = this.Url('form');
   		var objSerial = obj_serial();

		var objDiv = mk_panel(objSerial,'col-lg-4'); // controle do tamanho
		el_item_list.append(objDiv);
		var objPanelJq = el_item_list.find('#'+objSerial);

		$.post(url, {}, function (html_view) {
			objPanelJq.html(html_view);
			self.Render(objPanelJq, item_option);
		});
	},
	Render: function(el_content, item_option){
		var self = this;

		el_content.find('#item-titulo').html('teste titulo fixo');

		el_content.find('#btn-item-fechar').click(function(){
			alert('fechar item!');
		});

		//cria item objetivo
		var el_item_option = el_content.find('#item-content');
		eval('obj_'+item_option).Init(el_item_option);
	}
}
