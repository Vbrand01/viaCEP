$(".btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";


    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#bairro").val(dados.bairro);
            $("#rua").val(dados.logradouro);
            $("#ibge").val(dados.ibge);
            $("#ddd").val(dados.ddd);

        }
    });
});

// 07110000 - SENAC
// 70340000 - G4F

// 01038904





























































/*  $("#btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })

   
}) */