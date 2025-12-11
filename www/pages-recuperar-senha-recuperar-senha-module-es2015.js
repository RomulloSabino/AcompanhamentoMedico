(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recuperar-senha-recuperar-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/recuperar-senha/recuperar-senha.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/recuperar-senha/recuperar-senha.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"secondary\" class=\"ion-text-center ion-padding header-toolbar\">\r\n    <ion-img class=\"login-image-header\" src=\"../assets/images/logo-acomp.png\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\" scrollY=\"false\">\r\n  <ion-grid class=\"height-100\" fixed>\r\n    <ion-row class=\"height-100 ion-align-items-center ion-justify-content-center\">\r\n      <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\" class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <form [formGroup]=\"formRecSenha\" (submit)=\"recuperarSenha()\" (keyup.enter)=\"recuperarSenha()\">\r\n          <ion-item>\r\n            <ion-icon slot=\"start\" name=\"person\" color=\"light\"></ion-icon>\r\n            <ion-label position=\"floating\">Usuário</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"usuario\" inputmode=\"text\" enterkeyhint=\"go\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\" *ngIf=\"(usuario.dirty || usuario.touched) && usuario.hasError('required')\">Campo obrigatório\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-button class=\"ion-margin-top custom-button\" type=\"submit\" fill=\"clear\" expand=\"block\" size=\"large\"\r\n            [disabled]=\"!formRecSenha.valid\">\r\n            ENVIAR\r\n          </ion-button>\r\n        </form>\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col>\r\n            <ion-button class=\"no-weight\" fill=\"clear\" color=\"tertiary\" [routerLink]=\"['/login']\">\r\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n              VOLTAR\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-text-center\" *ngIf=\"urlImageOperadora\" no-border>\r\n  <ion-toolbar>\r\n    <ion-row class=\"ion-margin-bottom\">\r\n      <ion-col>\r\n        <ion-img class=\"login-image-footer\" src=\"{{urlImageOperadora}}\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RecuperarSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPageRoutingModule", function() { return RecuperarSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recuperar-senha.page */ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts");




const routes = [
    {
        path: '',
        component: _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_3__["RecuperarSenhaPage"]
    }
];
let RecuperarSenhaPageRoutingModule = class RecuperarSenhaPageRoutingModule {
};
RecuperarSenhaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecuperarSenhaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecuperarSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPageModule", function() { return RecuperarSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recuperar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperar-senha-routing.module */ "./src/app/pages/recuperar-senha/recuperar-senha-routing.module.ts");
/* harmony import */ var _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar-senha.page */ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts");







let RecuperarSenhaPageModule = class RecuperarSenhaPageModule {
};
RecuperarSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recuperar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperarSenhaPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarSenhaPage"]]
    })
], RecuperarSenhaPageModule);



/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: transparent;\n  --color: var(--ion-color-dark-contrast);\n  --border-color: #BFDFDF;\n  font-size: 16px;\n}\n\nion-content {\n  --background: #326565;\n}\n\n.margin-top-02em {\n  margin-top: 0.2em;\n}\n\n.icon-5em {\n  font-size: 4em;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n.login-image-header {\n  margin: 0.6em auto 0.2em;\n  width: 40vh;\n  max-width: 40vh;\n}\n\n.login-image-footer {\n  margin: 0 auto 0.2em;\n  width: 20vh;\n  max-width: 20vh;\n}\n\n.label-floating {\n  color: var(--ion-color-primary-contrast) !important;\n}\n\n@media (min-width: 1024px) and (max-width: 1366px) {\n  .login-image-header {\n    width: 30vh;\n    max-width: 30vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjdXBlcmFyLXNlbmhhL0M6XFxEZXNlblxccHJvamV0b3NfbXllY2xpcHNlXzIwMjFcXHdvcmtzcGFjZV9zYXVkaV9IRUFEXFxBcHBBY29tcGFuaGFtZW50b01lZGljby9zcmNcXGFwcFxccGFnZXNcXHJlY3VwZXJhci1zZW5oYVxccmVjdXBlcmFyLXNlbmhhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVjdXBlcmFyLXNlbmhhL3JlY3VwZXJhci1zZW5oYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWN1cGVyYXItc2VuaGEvcmVjdXBlcmFyLXNlbmhhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0KTtcclxuICAtLWJvcmRlci1jb2xvcjogI0JGREZERjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICAjMzI2NTY1O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0wMmVtIHtcclxuICBtYXJnaW4tdG9wOiAuMmVtO1xyXG59XHJcblxyXG4uaWNvbi01ZW0ge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1pbWFnZS1oZWFkZXIge1xyXG4gIG1hcmdpbjogLjZlbSBhdXRvIC4yZW07XHJcbiAgd2lkdGg6IDQwdmg7XHJcbiAgbWF4LXdpZHRoOiA0MHZoO1xyXG59XHJcblxyXG4ubG9naW4taW1hZ2UtZm9vdGVyIHtcclxuICBtYXJnaW46IDAgYXV0byAuMmVtO1xyXG4gIHdpZHRoOiAyMHZoO1xyXG4gIG1heC13aWR0aDogMjB2aDtcclxufVxyXG5cclxuLmxhYmVsLWZsb2F0aW5nIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAubG9naW4taW1hZ2UtaGVhZGVyIHtcclxuICAgICAgd2lkdGg6IDMwdmg7XHJcbiAgICAgIG1heC13aWR0aDogMzB2aDtcclxuICB9XHJcbn0iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0KTtcbiAgLS1ib3JkZXItY29sb3I6ICNCRkRGREY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMzMjY1NjU7XG59XG5cbi5tYXJnaW4tdG9wLTAyZW0ge1xuICBtYXJnaW4tdG9wOiAwLjJlbTtcbn1cblxuLmljb24tNWVtIHtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbmgxIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9naW4taW1hZ2UtaGVhZGVyIHtcbiAgbWFyZ2luOiAwLjZlbSBhdXRvIDAuMmVtO1xuICB3aWR0aDogNDB2aDtcbiAgbWF4LXdpZHRoOiA0MHZoO1xufVxuXG4ubG9naW4taW1hZ2UtZm9vdGVyIHtcbiAgbWFyZ2luOiAwIGF1dG8gMC4yZW07XG4gIHdpZHRoOiAyMHZoO1xuICBtYXgtd2lkdGg6IDIwdmg7XG59XG5cbi5sYWJlbC1mbG9hdGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAubG9naW4taW1hZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMzB2aDtcbiAgICBtYXgtd2lkdGg6IDMwdmg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.ts ***!
  \***************************************************************/
/*! exports provided: RecuperarSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPage", function() { return RecuperarSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let RecuperarSenhaPage = class RecuperarSenhaPage {
    constructor(menu, loginService, toast, loading, formBuilder, navCtrl, router) {
        this.menu = menu;
        this.loginService = loginService;
        this.toast = toast;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.router = router;
        this.urlImageOperadora = null;
    }
    ngOnInit() {
        const { logoOperadora } = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
        this.urlImageOperadora = logoOperadora;
        this.desabiliarMenu();
        this.getLogin();
        this.criarFormulario();
    }
    getLogin() {
        let getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            const params = getNav.extras.state;
            this.login = params.login.usuario;
        }
        else {
            this.login = '';
        }
    }
    desabiliarMenu() {
        this.menu.enable(false);
        this.menu.swipeGesture(false);
    }
    get usuario() {
        return this.formRecSenha.get('usuario');
    }
    criarFormulario() {
        this.formRecSenha = this.formBuilder.group({
            usuario: [this.login, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ])]
        });
    }
    recuperarSenha() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.formRecSenha.invalid) {
                return;
            }
            const loading = yield this.loading.presentLoading('Aguarde...');
            const loginUsuario = this.formRecSenha.value.usuario;
            this.loginService.recuperarSenha(loginUsuario).subscribe((usuario) => {
                const mensagem = "E-mail enviado com sucesso. Verifique o e-mail: " + usuario.email + ".";
                loading.dismiss();
                this.toast.successToast(mensagem, 60000);
                this.navCtrl.navigateBack('/login');
            }, error => {
                console.log(error);
                loading.dismiss();
                this.toast.errorToast(error);
            });
        });
    }
};
RecuperarSenhaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__["SaudiToastComponent"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
RecuperarSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recuperar-senha',
        template: __webpack_require__(/*! raw-loader!./recuperar-senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/recuperar-senha/recuperar-senha.page.html"),
        styles: [__webpack_require__(/*! ./recuperar-senha.page.scss */ "./src/app/pages/recuperar-senha/recuperar-senha.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__["SaudiToastComponent"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], RecuperarSenhaPage);



/***/ })

}]);
//# sourceMappingURL=pages-recuperar-senha-recuperar-senha-module-es2015.js.map