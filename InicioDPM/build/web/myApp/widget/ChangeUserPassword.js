define(["dojo/_base/declare",
    "dojo/_base/lang",    
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!/InicioDPM/myApp/widget/templates/ChangeUserPassword.html",
    "dijit/layout/ContentPane",
    "dijit/form/Form",
    "dijit/form/TextBox",
    "dojox/form/PasswordValidator",
    "dijit/form/Button",
    "dijit/Dialog",
    "dojo/on",
    "dojo/request",
    "dojo/when",
    "dojo/dom",
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
PasswordValidator,
Button,
Dialog,
on,
request,
when,
dom,
registry,
parser){
    
    return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
        
        templateString:template,
        
        postCreate:function(){
            var domNode = this.domNode;
            this.inherited(arguments);
            console.log('En postCreate');
            var context=this;
            on(this.myForm,"submit",function(){
                if(context.myForm.validate()){
                    /*
                     * Dentro de aqui se ara la llamada
                     * al Servlet para el cambio de 
                     * Contraseña.
                     */
                    //context.cambiarPass();
                    //alert("Aceptar");
                    return true; 
                }
                else{
                    alert ("El formulario contiene datos invalidos");
                    return false;
                }
            });
            on(this.myForm,"reset",function(evt){
                /*
                 * Solo resetea los campos
                 */
            });
        },
        
        constructor:function(args){
            lang.mixin(this,args);
            console.log('En el constructor');
        },
        
        cambiarPass: function (){
            /*
             *LLamada AJAX la cual verificara que el 
             *uuario y la contraseña actual de la persona
             *sea el correcto.
             *Una vez que sea correcto se habilitara el dialogo
             *que permitira capturar la nueva contraseña.
             */
            var url="http://localhost:8084/InicioDPM/ChangePasswordServlet";
            var context=this;
            //var a=registry.byId("a");
            
            console.log("Pass :"+this.newPass.value);
            debugger;
            var deferred=request.post(url,{//Cambiar esta parte en el servidor de produccion
                handleAs:"text",
                data:{
                    newPass:context.newPass.value
                }
            });
            
            function response(value){
                if(value==1){
                    alert("Se actualizo un registro");
                }
                else
                    alert("Error, Usuario o Contraseña incorrectos");
            }
            when(deferred,response);
            
        }
        
    });
    parser.parse();
});

