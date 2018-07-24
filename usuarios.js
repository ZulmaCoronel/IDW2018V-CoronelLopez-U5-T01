$(function(){
    $('#tbUsuarios').DataTable({
      ajax:{
        url:"http://localhost:3002/usuarios/v1/usuario/",
        dataSrc: function(datos){
          
          console.log(datos.users);
          return datos.users;
        }
      },
      columns:[
        {
          data:"name"
        },
        {
          data:"email"
        }
      ]
    });
});

function guardar(){
  //  var name = document.getElementById("txtNombre").value;
    var name = $('#txtNombre').val(); //Jquery referirse a id = #
    //$('#txtNombre').val('Mi nombre');
    var email = $('#txtEmail').val();
    var password = $('#txtPassword').val();

    console.log(name);
    console.log(email);
    console.log(password);

    $.ajax(
      {
        url:"http://localhost:3002/usuarios/v1/usuario/",
        type:"POST",
        data:{
          name:name,
          email:email,
          password:password
        }
      }
    )
    .done(
      function(data){
        alert(JSON.stringify(data));

        $('#txtNombre').val('');
        $('#txtEmail').val('');
        $('#txtPassword').val('');
        
        $('#tbUsuarios').dataTable().api().ajax.reload();
      }
    )
    .fail(
      function(err){
        alert(err);
      }
    );
   
}