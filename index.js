//$(document).ready(function(){
//
//        alert("Página sem as funcções javascript implementadas")
//});


$(document).ready(function(){
    $("#txtCep").focusout(function(){
            var cep = $("#txtCep").val();
            cep = cep.replace("-", "");
            var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";
         
            // fiz uma alteração de teste 
            // outra mudança
       
            $.ajax({
                url : urlStr,
                type : "get",
                dataType : "json",
                success : function(data){                   
                     
                    $("#txtCidade").val(data.localidade);
                    $("#txtEstado").val(data.uf);
                    $("#txtBairro").val(data.bairro);
                    $("#txtRua").val(data.logradouro);
                    $("#txtComplemento").val(data.complemento);
                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });
});