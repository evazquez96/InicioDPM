define(["dojo/_base/declare",
    "dojo/_base/lang",    
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!/InicioDPM/myApp/widget/templates/form1.html",
    "dijit/layout/ContentPane",
    "dijit/form/Form",
    "dijit/form/TextBox",
    //"dojox/form/PasswordValidator",
    "dijit/form/Button",
    "dojo/request",
    "dojo/on",
    "dijit/registry",
    "dojo/parser"],
function(declare,
lang,
_WidgetBase,
_TemplatedMixin,
_WidgetsInTemplateMixin,
template,
ContentPane,
Form,
TextBox,
//PasswordValidator,
Button,
request,
on,
registry,
parser){
    
    return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
        
        templateString:template,
        
        postCreate:function(){
            var domNode = this.domNode;
            this.inherited(arguments);
            console.log('En postCreate');
            var context=this;
            on(this.myForm1,"submit",function(){
                if(context.myForm1.validate()){
                    /*
                     * Dentro de aqui se ara la llamada
                     * al Servlet para el cambio de 
                     * Contraseña.
                     */
                    context.validarUsuario();
                    return confirm("Los datos se enviaran para ser validados"); 
                }
                else{
                    alert ("El formulario1 contiene datos invalidos");
                    return false;
                }
            });
            on(this.myForm1,"reset",function(evt){
                /*
                 * Solo resetea los campos
                 */
                console.log("Se reseteo el formulario 1");
            });
        },
        
        constructor:function(args){
            lang.mixin(this,args);
            console.log('En el constructor');
        },
        
        validarUsuario: function (){
            /*
             *LLamada AJAX la cual verificara que el 
             *usuario y la contraseña actual de la persona
             *sea el correcto.
             *Una vez que sea validado se habilitara el dialogo
             *que permitira capturar la nueva contraseña.
             */
            var url="http://localhost:8084/InicioDPM/ChangePasswordServlet";
            var context=this;
            //alert(context.txtUsr.value);

            var promesa=request.post(url,{//Cambiar esta parte en el servidor de produccion
                handleAs:"text",
                data:{
                    txtUsr:context.txtUsr.value,
                    txtPassActual:context.txtPassActual.value
                }
            });
            promesa.then(function(response){
                if(response==1)
                    alert("Se actualizo un registro");
                else
                    alert("error");
            },function(error){
                alert(error);
            });
  
        }
        
    });
    parser.parse();
});


