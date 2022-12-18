function enviar(){

  
    opSexo="";
  nome = document.getElementById("txtNome").value;
  idade = document.getElementById("txtIdade").value;
  idade = parseInt(idade);
  sexo = document.getElementsByName("sexo");
  if(sexo[0].checked){
    opSexo="Masculino";
  }else{
    opSexo="Feminino";
  };

  pais = document.getElementById("selPais").value;

  dv = document.getElementById("dvResultado");

  dv.innerHTML = "<br><h1>⋘ Relatório ⋙</h1><br>" + 
  "‣ Nome: <b> " + nome + "</b><br>" +
  "‣ Sexo: <b>" + opSexo + "</b><br>" +
  "‣ Idade: <b>" + idade + "</b><br>";
}
