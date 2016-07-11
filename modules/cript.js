define(
	["jquery", "func", "func_cript", "bootstrap"],
	function ($) {
		return {
			Title: 'Criptografia',
			SizeClass: 'col-lg-4',
			Url: function(view){
				return url_view('cript',view);
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
				var elString = el_content.find('#cript-text');

				el_content.find('#cript-act-e').click(function(){
					self.EventE(elString);
				});
				el_content.find('#cript-act-d').click(function(){
					self.EventD(elString);
				});
			},
			EventE: function(el_text){
				var result = base_64_encode(el_text.val());
				el_text.val(result);
			},
			EventD: function(el_text){
				var result = base_64_decode(el_text.val()); 
				el_text.val(result);
			}
		}
	}
);