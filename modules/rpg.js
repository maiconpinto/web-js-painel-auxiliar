define(
	["jquery", "func", "bootstrap"],
	function ($) {
		return {
			Title: 'Rpg',
			SizeClass: 'col-lg-6',
			Url: function(view){
				return url_view('rpg',view);
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
			},
			EventE: function(el_text){
				var result = base_64_encode(el_text.val());
				el_text.val(result);
			},
			CriarPersonagem: function(){
				var forSerial = $('#formDadosPerson').serialize();
				$.post('function.php',forSerial,
				function(response) {
					$("#personagemGerado").html(unescape(response));
				});
			}
		}
	}
);