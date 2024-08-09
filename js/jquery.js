var register = $(".registro");
var inicio = $(".Inicio");

$(".boton-inicio").click(function(){
    register.removeClass("d-none");
    register.show("slow");
    inicio.addClass("d-none");
}
)