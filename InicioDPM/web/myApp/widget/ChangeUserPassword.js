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
parser){
    
    return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
        
        templateString:template,
        
        postCreate:function(){
            var domNode = this.domNode;
            this.inherited(arguments);
            console.log('En postCreate');

        },
        
        constructor:function(args){
            lang.mixin(this,args);
            console.log('En el constructor');
        }
        
    });
    parser.parse();
});

