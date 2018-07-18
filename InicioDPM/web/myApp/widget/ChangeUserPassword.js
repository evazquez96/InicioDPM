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
    "dojo/on",
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
on,
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
                    return confirm("Adfasdf"); 
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
        }
        
    });
    parser.parse();
});

