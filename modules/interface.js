define(
	["jquery", "func", "bootstrap", "metis_menu"],
	function ($, func) {
		return {
			Url: function(view){
				return url_view('interface',view);
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

				self.InitMenuControl(el_content);

				el_content.find('.get-module').click(function(){
					var m_list = el_content.find('#module-list');
					var m_option = $(this).data('option');

					require(['module_panel'], function(module_panel){
						module_panel.Init(m_list,m_option);
					});
				});
			},
			InitMenuControl: function(el_content){
				var self = this;
				el_content.find('#side-menu').metisMenu();

				$(function() {
				    $(window).bind("load resize", function() {
				        topOffset = 50;
				        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
				        if (width < 768) {
				            el_content.find('div.navbar-collapse').addClass('collapse');
				            topOffset = 100; // 2-row-menu
				        } else {
				            el_content.find('div.navbar-collapse').removeClass('collapse');
				        }

				        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
				        height = height - topOffset;
				        if (height < 1) height = 1;
				        if (height > topOffset) {
				            el_content.find("#page-wrapper").css("min-height", (height) + "px");
				        }
				    });

				    var url = window.location;
				    var element = el_content.find('ul.nav a').filter(function() {
				        return this.href == url || url.href.indexOf(this.href) == 0;
				    }).addClass('active').parent().parent().addClass('in').parent();
				    if (element.is('li')) {
				        element.addClass('active');
				    }
				});
			}
		}
    }
);