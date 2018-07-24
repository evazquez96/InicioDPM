define(["dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!/InicioDPM/myApp/widget/templates/DpmInicioWidget.html",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/form/Button",
    "dijit/layout/TabContainer",
    "dijit/layout/AccordionContainer",
    "dijit/layout/AccordionPane",
    "dijit/Dialog",
    "/InicioDPM/myApp/widget/ChangeUserPassword.js",
    "/InicioDPM/myApp/widget/FormWidget1.js",
    "dojo/on",
    "dojo/parser"],
function(declare,
lang,
_WidgetBase,
_TemplatedMixin,
_WidgetsInTemplateMixin,
template,
BorderContainer,
ContentPane,
Button,
TabContainer,
AccordionContainer,
AccordionPane,
Dialog,
ChangeUserPassword,
Form1,
on,
parser){
    return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
        templateString:template,
        myDialog:new Dialog(
                    {
                        title: "Autenticación",
                        style:"width:390px;text-align: -webkit-right"
                    }
                ),
        postCreate:function(){
            var domNode = this.domNode;
            this.inherited(arguments);
            this.createEvents();
            this.createBtnChangePass();
            console.log('En postCreate');
        },
        constructor:function(args){
            lang.mixin(this,args);
            console.log('En el constructor');
        },
        createEvents:function(){
         on(this.btnDrive,"click",function(evt){
             window.open("https://drive.google.com/drive");
         }); 
         on(this.btnGmail,"click",function(evt){
             window.open("https://mail.google.com/");
         }); 
         on(this.btnTMS,"click",function(evt){
             window.open("http://tms.logsys.com.mx/");
         }); 
         on(this.btnMenfis,"click",function(evt){
             window.open("http://buzon.mensajeriafiscal.com/");
         }); 
         on(this.btnBI,"click",function(evt){
             window.open("https://bi.mexamerik.com/microstrategy/asp/Main.aspx");
         }); 
         on(this.btnHa,"click",function(evt){
             window.open("https://hangouts.google.com/");
         }); 
         
        },
        
        getDialog:function(){return this.myDialog;},
        
        createBtnChangePass: function(){
            var dialog=this.myDialog;
            var form1=new Form1({dialog:dialog});
            this.myDialog.addChild(form1);
            var context=this;
            on(this.btnPass,"click",function(){
               context.myDialog.show(); 
            });
            /*
            var myDialog=new Dialog({
                title: "Cambio de contraseña",
                style:"width:320px"
            });
            var changeUserPasswordWidget=new ChangeUserPassword();
            myDialog.addChild(changeUserPasswordWidget);
            on(this.btnPass,"click",function(){
               myDialog.show(); 
            });
            
            */
        }
        
    });
    parser.parse();
});

