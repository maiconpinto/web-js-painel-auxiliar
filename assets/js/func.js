
function url_view(tela, view){
   return location+'modules/view/'+tela+'/'+view+'.php';
}

function obj_serial(){
   var numS = '';
   //while($('id-'+numS).length > 0){ // testar novamente e implementar
      numS = Math.floor((Math.random() * 1000) + 1);
   //}
   return 'id-'+numS;
}

function mk_panel(id){
   if(id != undefined){
      var objDiv = document.createElement('div');
      objDiv.className = 'app-painel';
      objDiv.id = id;
      return objDiv;
   }
   return false;
}