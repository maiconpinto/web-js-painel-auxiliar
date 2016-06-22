var obj_base = {
	Url: function(view){
		return url_view('base',view);
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
		el_content.find('.painel-option').click(function(){
			var base_content = el_content.find('#base-content');
			var painel_option = $(this).data('option');
			eval('obj_'+painel_option).Init(base_content);
		});

		el_content.find('.item-painel').click(function(){
			var item_list = el_content.find('#item-list');
			var item_option = $(this).data('option');
			obj_item.Init(item_list, item_option);
			
		});
	}
}
