"use strict";(self.webpackChunktesis_front_end=self.webpackChunktesis_front_end||[]).push([[205],{8205:(z,f,s)=>{s.r(f),s.d(f,{AuthModule:()=>Y});var p=s(1896),n=s(6223),d=s(2939);var t=s(5879),c=s(9515),Z=s(9862);let g=(()=>{class r{constructor(e){this.http=e,this.urlEndPoint="http://franklinparrales.es/Grupo3_Backend/auth"}login(e){return e.action="login",this.http.post(this.urlEndPoint,e)}crearCuenta(e){return this.http.put(this.urlEndPoint,e)}migracion(e){return e.action="migracion",this.http.post(this.urlEndPoint,e)}cambiarPassword(e){return e.action="cambiarPassword",this.http.post(this.urlEndPoint,e)}recuperarCuenta(e){return e.action="recuperarPassword",this.http.post(this.urlEndPoint,e)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(Z.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var _=s(6814),C=s(2296),h=s(287),m=s(4170),w=s(2032),v=s(617);function k(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",16)(1,"form",17)(2,"div",18)(3,"mat-form-field",19)(4,"mat-label"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"input",20),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"div",21)(10,"mat-form-field",19)(11,"mat-label"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t._UZ(14,"input",22),t.ALo(15,"translate"),t.TgZ(16,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ocultarPaaswordLogin=!a.ocultarPaaswordLogin)}),t.TgZ(17,"mat-icon"),t._uU(18),t.qZA()()()(),t.TgZ(19,"div",24)(20,"p",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.dirigirRecuperarCuenta())}),t._uU(21),t.ALo(22,"translate"),t.qZA()(),t.TgZ(23,"div",26)(24,"app-ui-kaas-button",27),t.NdJ("eventClick",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.login())}),t.ALo(25,"translate"),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.loginFormGroup),t.xp6(4),t.Oqu(t.lcZ(6,13,"aut-module.input.usuario")),t.xp6(2),t.s9C("placeholder",t.lcZ(8,15,"aut-module.input.usuario-placeholder")),t.xp6(5),t.Oqu(t.lcZ(13,17,"aut-module.input.password")),t.xp6(2),t.s9C("placeholder",t.lcZ(15,19,"aut-module.input.password-placeholder")),t.Q6J("type",e.ocultarPaaswordLogin?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.ocultarPaaswordLogin),t.xp6(2),t.Oqu(e.ocultarPaaswordLogin?"visibility_off":"visibility"),t.xp6(3),t.Oqu(t.lcZ(22,21,"aut-module.input.olvidaste-password")),t.xp6(3),t.Q6J("label",t.lcZ(25,23,"general.boton-continuar"))("disabled",e.loginFormGroup.invalid)("butonFull",!0)}}function A(r,l){if(1&r&&(t.TgZ(0,"p",34),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.hij("* ",t.lcZ(2,1,e.mensaje),"")}}function T(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",16)(1,"form",17)(2,"div",28)(3,"mat-form-field",19)(4,"mat-label"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"input",20),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"div",29)(10,"mat-form-field",19)(11,"mat-label"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t._UZ(14,"input",30),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"div",31)(17,"mat-form-field",19)(18,"mat-label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t._UZ(21,"input",22),t.ALo(22,"translate"),t.TgZ(23,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ocultarPaaswordCrearCuenta=!a.ocultarPaaswordCrearCuenta)}),t.TgZ(24,"mat-icon"),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",31)(27,"mat-form-field",19)(28,"mat-label"),t._uU(29),t.ALo(30,"translate"),t.qZA(),t._UZ(31,"input",32),t.ALo(32,"translate"),t.TgZ(33,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ocultarPaaswordCrearCuenta=!a.ocultarPaaswordCrearCuenta)}),t.TgZ(34,"mat-icon"),t._uU(35),t.qZA()()()(),t.TgZ(36,"div",21),t.YNc(37,A,3,3,"p",33),t.qZA(),t.TgZ(38,"div",26)(39,"app-ui-kaas-button",27),t.NdJ("eventClick",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.crearCuenta())}),t.ALo(40,"translate"),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.crearCuentaFormGroup),t.xp6(4),t.Oqu(t.lcZ(6,21,"aut-module.input.usuario")),t.xp6(2),t.s9C("placeholder",t.lcZ(8,23,"aut-module.input.usuario-placeholder")),t.xp6(5),t.Oqu(t.lcZ(13,25,"aut-module.input.correo")),t.xp6(2),t.s9C("placeholder",t.lcZ(15,27,"aut-module.input.correo-placeholder")),t.xp6(5),t.Oqu(t.lcZ(20,29,"aut-module.input.password")),t.xp6(2),t.s9C("placeholder",t.lcZ(22,31,"aut-module.input.password-placeholder")),t.Q6J("type",e.ocultarPaaswordCrearCuenta?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.ocultarPaaswordCrearCuenta),t.xp6(2),t.Oqu(e.ocultarPaaswordCrearCuenta?"visibility_off":"visibility"),t.xp6(4),t.Oqu(t.lcZ(30,33,"aut-module.input.password-conf")),t.xp6(2),t.s9C("placeholder",t.lcZ(32,35,"aut-module.input.password-conf-placeholder")),t.Q6J("type",e.ocultarPaaswordCrearCuenta?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.ocultarPaaswordCrearCuenta),t.xp6(2),t.Oqu(e.ocultarPaaswordCrearCuenta?"visibility_off":"visibility"),t.xp6(2),t.Q6J("ngIf",""!=e.mensaje),t.xp6(2),t.Q6J("label",t.lcZ(40,37,"general.boton-continuar"))("disabled",e.crearCuentaFormGroup.invalid)("butonFull",!0)}}const y=function(r,l){return{"sm:w-8 md:w-9 lg:w-7 xl:w-6":r,"sm:w-9 md:w-10 xl:w-9":l}},P=function(r,l){return{"w-6":r,"w-4":l}},S=function(r,l){return{"w-12 md:w-6":r,"w-12 md:w-8":l}},x=function(r,l){return{"color-primary-50 bg-primary":r,"color-white bg-primary-100 selector-togle":l}};let J=(()=>{class r{constructor(e,o,a,i){this._snackBar=e,this._translateService=o,this._serviceAuth=a,this._roter=i,this.iniciarSesion=!0,this.ocultarPaaswordCrearCuenta=!0,this.ocultarPaaswordLogin=!0,this.secretKey="serious_game_secret_key_001",this.loginFormGroup=new n.cw({usuario:new n.NI("",{validators:n.kI.required,updateOn:"blur"}),password:new n.NI("",{validators:n.kI.required,updateOn:"blur"})}),this.crearCuentaFormGroup=new n.cw({usuario:new n.NI("",{validators:n.kI.required,updateOn:"blur"}),correo:new n.NI("",{validators:[n.kI.required,n.kI.email],updateOn:"blur"}),password:new n.NI("",{validators:n.kI.required,updateOn:"blur"}),confirmarPassword:new n.NI("",{validators:n.kI.required,updateOn:"blur"})}),this.validador={caracteres:!1,general:!1,repetido:!1},this.mensaje=""}ngOnInit(){}login(){const e={usuario:String(this.loginFormGroup.value.usuario),password:String(this.loginFormGroup.value.password)};this._serviceAuth.login(e).subscribe(o=>{if("OK"!=o.msg){let a="";switch(o.msg){case"usuario_incorrecto":a="aut-module.input.usuario-incorrecto";break;case"password_incorrecto":a="aut-module.input.password-incorrecto";break;default:a="aut-module.input.login-fallido"}this.openSnackBar(this._translateService.instant(a),"custom-snackbar_fallido")}else localStorage.setItem("persona",JSON.stringify({id:o.result.idUsuario,user:o.result.usuario})),"NOT"==o.result.migrado?this._roter.navigateByUrl("/auth/completar-perfil"):(this.openSnackBar(this._translateService.instant("aut-module.input.login-exitoso"),"custom-snackbar_exitoso"),this._roter.navigateByUrl("/home"))})}crearCuenta(){const e=this.crearCuentaFormGroup.value.password,o=this.crearCuentaFormGroup.value.confirmarPassword;if(e.length<=8)this.mensaje="aut-module.validador.caracteres";else if(/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(e))if(e==o){this.mensaje="";const i={usuario:String(this.crearCuentaFormGroup.value.usuario),password:String(this.crearCuentaFormGroup.value.password),correo:String(this.crearCuentaFormGroup.value.correo)};this._serviceAuth.crearCuenta(i).subscribe(u=>{"OK"==u.msg?(this.openSnackBar(this._translateService.instant("aut-module.input.crear-exitoso"),"custom-snackbar_exitoso"),this.crearCuentaFormGroup.reset(),this.loginFormGroup.reset(),this.iniciarSesion=!0):this.openSnackBar(this._translateService.instant("user_ocupado"==u.msg?"general-msg.usuario-ocupado":"aut-module.input.crear-fallido"),"custom-snackbar_fallido")})}else this.mensaje="aut-module.validador.repetido";else this.mensaje="aut-module.validador.general"}dirigirRecuperarCuenta(){this._roter.navigateByUrl("/auth/recuperar-cuenta")}openSnackBar(e,o){const a=new d.u_;a.duration=5e3,a.verticalPosition="top",a.horizontalPosition="center",a.panelClass=[o],this._snackBar.open(e,"",a)}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(d.ux),t.Y36(c.sK),t.Y36(g),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:26,vars:34,consts:[[1,"w-full","h-full","grid","justify-content-center","border-box","m-0"],[1,"h-full","flex","align-content-center","flex-wrap","w-11",3,"ngClass"],[1,"w-full","grid","m-0","container-auth","shadow-3"],[1,"bg-primary-700","border-round-md","border-noround-right","border-box","hidden","md:block",3,"ngClass"],[1,"w-full","h-full","p-4","flex","justify-content-center","align-content-center","flex-wrap","border-box"],[1,"color-primary-50","tex-titulo-Serius-Game","text-center"],[1,"color-white","text-subtitulos-2-size","text-justify","line-height-3","mt-4"],["src","assets/Img/Icons/iconos/cohete.png","width","140px",1,"mt-4"],[1,"bg-white","border-round-md","border-noround-left","border-box",3,"ngClass"],[1,"w-full","p-4","border-box"],[1,"w-full","flex","justify-content-end","flex-wrap"],[1,"w-max","flex"],[1,"border-box","border-round-3xl","border-noround-right","p-2","pl-3","cursor-pointer",3,"ngClass","click"],[1,"text-subtitulos-4-size"],[1,"border-box","border-round-3xl","border-noround-left","py-2","px-3","cursor-pointer",3,"ngClass","click"],["class","mt-5",4,"ngIf"],[1,"mt-5"],[1,"w-full","grid",3,"formGroup"],[1,"col-12","px-1"],["appearance","outline",1,"w-full","hide-hint"],["matInput","","formControlName","usuario",3,"placeholder"],[1,"col-12","px-1","mt-1"],["matInput","","formControlName","password",3,"type","placeholder"],["type","button","mat-icon-button","","matSuffix","",3,"click"],[1,"col-12","mt-1","flex","justify-content-end"],[1,"text-subtitulos-3-size","w-max","color-primary-300","font-medium","cursor-pointer",3,"click"],[1,"w-full","flex","justify-content-center","flex-wrap","mt-2"],["buttonSize","small",1,"w-full",3,"label","disabled","butonFull","eventClick"],[1,"col-12","md:col-6","px-1"],[1,"col-12","md:col-6","px-1","mt-1","md:mt-0"],["matInput","","type","email","formControlName","correo",3,"placeholder"],[1,"col-12","md:col-6","px-1","mt-1"],["matInput","","formControlName","confirmarPassword",3,"type","placeholder"],["class","font-medium mt-1 text-red-600",4,"ngIf"],[1,"font-medium","mt-1","text-red-600"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"p",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",6),t._uU(9),t.ALo(10,"translate"),t.qZA(),t._UZ(11,"img",7),t.qZA()(),t.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12),t.NdJ("click",function(){return a.iniciarSesion=!0}),t.TgZ(17,"p",13),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.TgZ(20,"div",14),t.NdJ("click",function(){return a.iniciarSesion=!1}),t.TgZ(21,"p",13),t._uU(22),t.ALo(23,"translate"),t.qZA()()(),t.YNc(24,k,26,25,"div",15),t.YNc(25,T,41,39,"div",15),t.qZA()()()()()()),2&o&&(t.xp6(1),t.Q6J("ngClass",t.WLB(19,y,a.iniciarSesion,!a.iniciarSesion)),t.xp6(2),t.Q6J("ngClass",t.WLB(22,P,a.iniciarSesion,!a.iniciarSesion)),t.xp6(3),t.Oqu(t.lcZ(7,11,"title")),t.xp6(3),t.Oqu(t.lcZ(10,13,"aut-module.titulo")),t.xp6(3),t.Q6J("ngClass",t.WLB(25,S,a.iniciarSesion,!a.iniciarSesion)),t.xp6(4),t.Q6J("ngClass",t.WLB(28,x,a.iniciarSesion,!a.iniciarSesion)),t.xp6(2),t.Oqu(t.lcZ(19,15,"aut-module.iniciar-sesion")),t.xp6(2),t.Q6J("ngClass",t.WLB(31,x,!a.iniciarSesion,a.iniciarSesion)),t.xp6(2),t.Oqu(t.lcZ(23,17,"aut-module.crear-cuenta")),t.xp6(2),t.Q6J("ngIf",a.iniciarSesion),t.xp6(1),t.Q6J("ngIf",!a.iniciarSesion))},dependencies:[_.mk,_.O5,C.RK,h.w,m.KE,m.hX,m.R9,w.Nt,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,v.Hw,c.X$],styles:[".container-auth[_ngcontent-%COMP%]{border-radius:8px}  .hide-hint .mat-mdc-form-field-subscript-wrapper{display:none!important}"]})}return r})();var L=s(9265),q=s(1482),O=s(6863);let N=(()=>{class r{constructor(e,o,a,i){this._snackBar=e,this._translateService=o,this._serviceAuth=a,this._router=i,this.datosCliente={nombre:"",apellido:"",fechaNacimiento:new Date,opcionRol:"e"},this.nombre="aa",this.opcion=[{value:"e",label:"aut-module.migracion.estudiante"},{value:"p",label:"aut-module.migracion.profesor"}]}ngOnInit(){}migrarUsuario(){const e=JSON.parse(localStorage.getItem("persona"));null==e?(localStorage.clear(),this.openSnackBar(this._translateService.instant("USUARIO NO ENCONTRADO"),"custom-snackbar_fallido"),this._router.navigateByUrl("/auth")):this._serviceAuth.migracion({nombre:this.datosCliente.nombre,apellido:this.datosCliente.apellido,rol:this.datosCliente.opcionRol,fechaNacimiento:this.datosCliente.fechaNacimiento,id:e.id,usuario:e.user}).subscribe(a=>{"OK"==a.msg?(this.openSnackBar(this._translateService.instant("aut-module.input.login-exitoso"),"custom-snackbar_exitoso"),this._router.navigateByUrl("/home")):(this.openSnackBar(this._translateService.instant("USUARIO NO ENCONTRADO"),"custom-snackbar_fallido"),localStorage.clear(),this._router.navigateByUrl("/auth"))})}openSnackBar(e,o){const a=new d.u_;a.duration=3e3,a.verticalPosition="top",a.horizontalPosition="center",a.panelClass=[o],this._snackBar.open(e,"",a)}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(d.ux),t.Y36(c.sK),t.Y36(g),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-migracion"]],decls:18,vars:13,consts:[[1,"w-full","h-full","grid","justify-content-center","border-box"],[1,"w-6","h-full","flex","align-content-center","flex-wrap"],[1,"w-12","grid","m-0","container-auth","shadow-3","border-round-xl","border-color","p-4"],[1,"col-12","mb-3"],[1,"color-primary","tex-titulo-Serius-Game","text-center"],[1,"col-6"],["label","aut-module.migracion.nombre","hint","aut-module.migracion.nombre-hint",3,"value","valueChange"],["label","aut-module.migracion.apellido","hint","aut-module.migracion.apellido-hint",3,"value","valueChange"],[1,"col-6","mt-2"],["label","aut-module.migracion.rol",3,"value","options","valueChange"],["label","aut-module.migracion.fecha-nacimiento",3,"value","valueChange"],[1,"w-full","flex","justify-content-center","flex-wrap","mt-4"],["buttonSize","small",3,"label","disabled","butonFull","eventClick"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",5)(8,"app-ui-kaas-input",6),t.NdJ("valueChange",function(u){return a.datosCliente.nombre=u}),t.qZA()(),t.TgZ(9,"div",5)(10,"app-ui-kaas-input",7),t.NdJ("valueChange",function(u){return a.datosCliente.apellido=u}),t.qZA()(),t.TgZ(11,"div",8)(12,"app-radio-button",9),t.NdJ("valueChange",function(u){return a.datosCliente.opcionRol=u}),t.qZA()(),t.TgZ(13,"div",8)(14,"app-datepicker",10),t.NdJ("valueChange",function(u){return a.datosCliente.fechaNacimiento=u}),t.qZA()(),t.TgZ(15,"div",11)(16,"app-ui-kaas-button",12),t.NdJ("eventClick",function(){return a.migrarUsuario()}),t.ALo(17,"translate"),t.qZA()()()()()),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,9,"aut-module.migracion.title")),t.xp6(3),t.Q6J("value",a.datosCliente.nombre),t.xp6(2),t.Q6J("value",a.datosCliente.apellido),t.xp6(2),t.Q6J("value",a.datosCliente.opcionRol)("options",a.opcion),t.xp6(2),t.Q6J("value",a.datosCliente.fechaNacimiento),t.xp6(2),t.Q6J("label",t.lcZ(17,11,"general.boton-continuar"))("disabled",""==a.datosCliente.nombre||""==a.datosCliente.apellido)("butonFull",!1))},dependencies:[h.w,L.o,q.O,O._,c.X$],styles:[".hide-hint .mat-mdc-form-field-subscript-wrapper{display:none!important}"]})}return r})();var U=s(867);window.global=window;let I=(()=>{class r{constructor(){}static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-root"]],decls:14,vars:3,consts:[[1,"w-screen","h-screen","flex","justify-content-center","flex-wrap","relative","border-box","bg-white"],[1,"absolute","top-0","right-0","w-full","border-box","py-1","px-2","bg-primary-100"],[1,"w-full","flex","justify-content-between","flex-wrap"],[1,"w-max"],[1,"flex","color-primary","tex-titulo-Serius-Game","cursor-pointer","hull"],["src","assets/Img/Icons/icono_serius_game.png","width","80px",1,"hidden","md:block"],[1,"flex","align-content-center","flex-wrap","ml-2","mt-2","md:mt-0",2,"height","50.72"],[1,"m-0","p-0"],[1,"w-max","flex","align-content-center","flex-wrap"],[1,"w-full",2,"height","calc(100% - 60px)","margin-top","60px"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"div",6)(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()()()(),t.TgZ(10,"div",8),t._UZ(11,"app-change_of_anguage"),t.qZA()()(),t.TgZ(12,"div",9),t._UZ(13,"router-outlet"),t.qZA()()),2&o&&(t.xp6(8),t.Oqu(t.lcZ(9,1,"title")))},dependencies:[p.lC,U.O,c.X$],encapsulation:2})}return r})();var M=s(5940);let F=(()=>{class r{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ui-charge"]],decls:2,vars:0,consts:[[1,"modal-overlay"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"mat-spinner"),t.qZA())},dependencies:[M.Ou],styles:[".modal-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:#7070704a;transition-duration:.2s;z-index:10;pointer-events:auto}"]})}return r})();function B(r,l){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",6)(2,"mat-form-field",7)(3,"mat-label"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"input",8),t.NdJ("ngModelChange",function(a){t.CHM(e);const i=t.oxw();return t.KtG(i.datosCliente.correo=a)}),t.ALo(7,"translate"),t.qZA()()(),t.TgZ(8,"div",9)(9,"app-ui-kaas-button",10),t.NdJ("eventClick",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.regresar())}),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"app-ui-kaas-button",11),t.NdJ("eventClick",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.recuperarCuenta())}),t.ALo(12,"translate"),t.qZA()(),t.BQk()}if(2&r){const e=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,9,"aut-module.recuperar-cuenta.correo")),t.xp6(2),t.s9C("placeholder",t.lcZ(7,11,"aut-module.recuperar-cuenta.correo-placeholder")),t.Q6J("ngModel",e.datosCliente.correo),t.xp6(3),t.Q6J("background_color","bg-red-600")("label",t.lcZ(10,13,"general.boton-cancelar"))("butonFull",!1),t.xp6(2),t.Q6J("label",t.lcZ(12,15,"general.boton-continuar"))("disabled",""==e.datosCliente.correo)("butonFull",!1)}}function G(r,l){if(1&r&&(t.TgZ(0,"p",17),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.hij("* ",t.lcZ(2,1,e.mensaje),"")}}function j(r,l){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"mat-form-field",7)(3,"mat-label"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"input",13),t.NdJ("ngModelChange",function(a){t.CHM(e);const i=t.oxw();return t.KtG(i.datosCliente.passwordTemp=a)}),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ocultarPaaswordCrearCuenta=!a.ocultarPaaswordCrearCuenta)}),t.TgZ(9,"mat-icon"),t._uU(10),t.qZA()()()(),t.TgZ(11,"div",12)(12,"mat-form-field",7)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"input",13),t.NdJ("ngModelChange",function(a){t.CHM(e);const i=t.oxw();return t.KtG(i.datosCliente.password=a)}),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ocultarPaaswordCrearCuenta1=!a.ocultarPaaswordCrearCuenta1)}),t.TgZ(19,"mat-icon"),t._uU(20),t.qZA()()()(),t.TgZ(21,"div",12)(22,"mat-form-field",7)(23,"mat-label"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"input",13),t.NdJ("ngModelChange",function(a){t.CHM(e);const i=t.oxw();return t.KtG(i.datosCliente.confirmarPassword=a)}),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ocultarPaaswordCrearCuenta2=!a.ocultarPaaswordCrearCuenta2)}),t.TgZ(29,"mat-icon"),t._uU(30),t.qZA()()()(),t.TgZ(31,"div",12),t.YNc(32,G,3,3,"p",15),t.qZA(),t.TgZ(33,"div",16)(34,"app-ui-kaas-button",11),t.NdJ("eventClick",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.cambiarPassword())}),t.ALo(35,"translate"),t.qZA()(),t.BQk()}if(2&r){const e=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,25,"aut-module.recuperar-cuenta.passwordTemp")),t.xp6(2),t.s9C("placeholder",t.lcZ(7,27,"aut-module.recuperar-cuenta.passwordTemp-placeholder")),t.Q6J("type",e.ocultarPaaswordCrearCuenta?"password":"text")("ngModel",e.datosCliente.passwordTemp),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.ocultarPaaswordCrearCuenta),t.xp6(2),t.Oqu(e.ocultarPaaswordCrearCuenta?"visibility_off":"visibility"),t.xp6(4),t.Oqu(t.lcZ(15,29,"aut-module.recuperar-cuenta.password")),t.xp6(2),t.s9C("placeholder",t.lcZ(17,31,"aut-module.recuperar-cuenta.password-placeholder")),t.Q6J("type",e.ocultarPaaswordCrearCuenta1?"password":"text")("ngModel",e.datosCliente.password),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.ocultarPaaswordCrearCuenta1),t.xp6(2),t.Oqu(e.ocultarPaaswordCrearCuenta1?"visibility_off":"visibility"),t.xp6(4),t.Oqu(t.lcZ(25,33,"aut-module.recuperar-cuenta.password-conf")),t.xp6(2),t.s9C("placeholder",t.lcZ(27,35,"aut-module.recuperar-cuenta.password-conf-placeholder")),t.Q6J("type",e.ocultarPaaswordCrearCuenta2?"password":"text")("ngModel",e.datosCliente.confirmarPassword),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",e.ocultarPaaswordCrearCuenta2),t.xp6(2),t.Oqu(e.ocultarPaaswordCrearCuenta2?"visibility_off":"visibility"),t.xp6(2),t.Q6J("ngIf",""!=e.mensaje),t.xp6(2),t.Q6J("label",t.lcZ(35,37,"general.boton-continuar"))("disabled",""==e.datosCliente.password||""==e.datosCliente.confirmarPassword||""==e.datosCliente.passwordTemp)("butonFull",!1)}}function Q(r,l){1&r&&t._UZ(0,"app-ui-charge")}const R=[{path:"",component:I,children:[{path:"",component:J},{path:"completar-perfil",component:N},{path:"recuperar-cuenta",component:(()=>{class r{constructor(e,o,a,i){this._snackBar=e,this._translateService=o,this._serviceAuth=a,this._router=i,this.datosCargados=!1,this.datosCliente={correo:"",passwordTemp:"",password:"",confirmarPassword:""},this.paso=1,this.ocultarPaaswordCrearCuenta=!0,this.ocultarPaaswordCrearCuenta1=!0,this.ocultarPaaswordCrearCuenta2=!0,this.mensaje=""}ngOnInit(){}recuperarCuenta(){this.datosCargados=!0,this._serviceAuth.recuperarCuenta({correo:this.datosCliente.correo}).subscribe(e=>{"OK"==e.msg?(this.openSnackBar(this._translateService.instant("aut-module.recuperar-cuenta.ok"),"custom-snackbar_exitoso"),this.paso=2):this.openSnackBar(this._translateService.instant("correo_not_bd"==e.msg?"aut-module.recuperar-cuenta.error4":"aut-module.recuperar-cuenta.error"),"custom-snackbar_fallido"),this.datosCargados=!1})}regresar(){this._router.navigateByUrl("/auth")}cambiarPassword(){const e=this.datosCliente.password,o=this.datosCliente.confirmarPassword;e.length<=8?this.mensaje="aut-module.validador.caracteres":/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(e)?e==o?(this.datosCargados=!0,this.mensaje="",this._serviceAuth.cambiarPassword({correo:this.datosCliente.correo,password:this.datosCliente.password,password2:this.datosCliente.passwordTemp}).subscribe(u=>{"OK"==u.msg?(this.openSnackBar(this._translateService.instant("aut-module.recuperar-cuenta.ok2"),"custom-snackbar_exitoso"),this._router.navigateByUrl("/auth")):this.openSnackBar(this._translateService.instant("aut-module.recuperar-cuenta.error2"),"custom-snackbar_fallido"),this.datosCargados=!1})):this.mensaje="aut-module.validador.repetido":this.mensaje="aut-module.validador.general"}openSnackBar(e,o){const a=new d.u_;a.duration=3e3,a.verticalPosition="top",a.horizontalPosition="center",a.panelClass=[o],this._snackBar.open(e,"",a)}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(d.ux),t.Y36(c.sK),t.Y36(g),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-recuperacion-password"]],decls:10,vars:6,consts:[[1,"w-full","h-full","grid","justify-content-center","border-box"],[1,"w-11","md:w-9","lg:w-6","h-full","flex","align-content-center","flex-wrap"],[1,"w-12","grid","m-0","container-auth","shadow-3","border-round-xl","border-color","p-4"],[1,"col-12","mb-3"],[1,"color-primary","tex-titulo-Serius-Game","text-center"],[4,"ngIf"],[1,"col-12"],["appearance","outline",1,"w-full","hide-hint"],["matInput","",3,"placeholder","ngModel","ngModelChange"],[1,"w-full","flex","justify-content-center","gap-4","flex-wrap","mt-4"],["buttonSize","small",3,"background_color","label","butonFull","eventClick"],["buttonSize","small",3,"label","disabled","butonFull","eventClick"],[1,"col-12","px-1","mt-1"],["matInput","",3,"type","placeholder","ngModel","ngModelChange"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["class","font-medium mt-1 text-red-600",4,"ngIf"],[1,"w-full","flex","justify-content-center","flex-wrap","mt-4"],[1,"font-medium","mt-1","text-red-600"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.YNc(7,B,13,17,"ng-container",5),t.YNc(8,j,36,39,"ng-container",5),t.qZA()()(),t.YNc(9,Q,1,0,"app-ui-charge",5)),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,4,"aut-module.recuperar-cuenta.title")),t.xp6(2),t.Q6J("ngIf",1==a.paso),t.xp6(1),t.Q6J("ngIf",2==a.paso),t.xp6(1),t.Q6J("ngIf",a.datosCargados))},dependencies:[_.O5,C.RK,h.w,m.KE,m.hX,m.R9,w.Nt,n.Fj,n.JJ,v.Hw,n.On,F,c.X$],styles:[".hide-hint .mat-mdc-form-field-subscript-wrapper{display:none!important}"]})}return r})()}]}];let K=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#a=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(R),p.Bz]})}return r})();var H=s(1678);let Y=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#a=this.\u0275inj=t.cJS({imports:[_.ez,K,H.K,c.aw]})}return r})()}}]);