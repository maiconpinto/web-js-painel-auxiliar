
function web_open_new(url){
   window.open(url, '_blank');
}

function search_all(str) {
   web_open_new('https://www.google.com.br/search?q='+encodeURI(str));
   web_open_new('http://www.bing.com/search?q='+encodeURI(str));
}

function search_whois(str) {
   web_open_new('http://www.whois.com/whois/'+str); //best
   web_open_new('http://who.is/whois/'+str);
   web_open_new('https://www.whois.net/'+str);

   //análise técnica, seo, erros, melhorias, key words, estatísticas acesso, rank relevância
   web_open_new('http://www.alexa.com/siteinfo/'+str); // 
   web_open_new('https://moz.com/researchtools/ose/links?site='+str);
   web_open_new('https://www.woorank.com/pt/www/'+str);
   web_open_new('https://developers.google.com/speed/pagespeed/insights/?url='+str); //google velocidade
   web_open_new('https://www.google.com/webmasters/tools/mobile-friendly/?url='+str); //google mobile
   web_open_new('https://www.site-analyzer.com/en/analyze/'+str);
}

function search_map(str) {
   web_open_new('https://www.google.com.br/maps/place/'+encodeURI(str));
   web_open_new('https://maps.here.com/search/'+encodeURI(str));
   web_open_new('http://cep.guiamais.com.br/busca/'+encodeURI(str)); // cep
}

function search_translate(str, optDe, optPara) {
   web_open_new('https://translate.google.com/#'+optDe+'/'+optPara+'/'+encodeURI(str));
}