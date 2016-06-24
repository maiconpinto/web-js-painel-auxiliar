var obj_item_teste = {
	Url: function(view){
		return url_view('item_teste',view);
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

		el_content.find('#btn-test').click(function(){
			alert('test click!');
		});
	}
}
