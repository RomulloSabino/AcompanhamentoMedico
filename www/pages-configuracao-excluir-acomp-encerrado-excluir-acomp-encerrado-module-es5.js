(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracao-excluir-acomp-encerrado-excluir-acomp-encerrado-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Excluir Acompanhamentos Encerrados</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formExcluirAcompEncerrado\">   \r\n        <ion-card>   \r\n            <ion-card-header>\r\n                <ion-card-title class=\"ion-text-center\">Filtrar Acompanhamentos Encerrados</ion-card-title>\r\n            </ion-card-header>        \r\n            <ion-item>\r\n                <ion-label position=\"floating\"></ion-label>\r\n                <ion-select formControlName=\"filtroPeriodo\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okTxt=\"Selecionar\" (ionChange)=\"buscarAcompanhamentosEncerrados()\">\r\n                    <ion-select-option *ngFor=\"let periodo of listaPeriodo\" [value]=\"periodo\">{{ periodo }}</ion-select-option>\r\n                </ion-select>                \r\n            </ion-item>            \r\n        </ion-card> \r\n        <ion-card class=\"ion-no-margin\" *ngIf=\"listaAcompEncerrados.length != 0\">         \r\n            <ion-card-header>\r\n                <ion-card-title class=\"ion-text-center\">Acompanhamentos Encerrados</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item-sliding *ngFor = \"let acompanhamento of listaAcompEncerrados; let i=index\">\r\n              <ion-item>    \r\n                <ion-row>        \r\n                  <ion-col size=\"12\">\r\n                    <span class=\"texto-card-title\" [innerHTML]=\"acompanhamento.beneficiario.nomeBeneficiario\"></span><br>\r\n                    <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.beneficiario.carteiraBeneficiario\"></span><br>\r\n                    <span class=\"texto-card-label\">Senha: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.senhaAutorizacao.senha\"></span><br>\r\n                    <span class=\"texto-card-label\">Prestador: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.prestador.nomePrestador\"></span><br>                     \r\n                    <span class=\"texto-card-label\">Encerramento: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.dataEncerramento\"></span>                     \r\n                </ion-col>\r\n                </ion-row>\r\n              </ion-item>\r\n              <ion-item-options>\r\n                <ion-button expand=\"block\" (click)=\"apagarAcompanhamento(i)\">\r\n                  <ion-icon name=\"trash\"></ion-icon>Excluir\r\n                </ion-button>\r\n              </ion-item-options>\r\n            </ion-item-sliding>      \r\n        </ion-card>\r\n        <ion-row *ngIf=\"listaAcompEncerrados.length != 0\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button expand=\"block\" size=\"large\" (click)=\"apagarTodos()\">Excluir Todos</ion-button>\r\n            </ion-col>           \r\n        </ion-row> \r\n    </form>    \r\n</ion-content>        "

/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExcluirAcompEncerradoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirAcompEncerradoPageRoutingModule", function() { return ExcluirAcompEncerradoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excluir-acomp-encerrado.page */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts");




var routes = [
    {
        path: '',
        component: _excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_3__["ExcluirAcompEncerradoPage"]
    }
];
var ExcluirAcompEncerradoPageRoutingModule = /** @class */ (function () {
    function ExcluirAcompEncerradoPageRoutingModule() {
    }
    ExcluirAcompEncerradoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExcluirAcompEncerradoPageRoutingModule);
    return ExcluirAcompEncerradoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ExcluirAcompEncerradoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirAcompEncerradoPageModule", function() { return ExcluirAcompEncerradoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _excluir_acomp_encerrado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excluir-acomp-encerrado-routing.module */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado-routing.module.ts");
/* harmony import */ var _excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./excluir-acomp-encerrado.page */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts");







var ExcluirAcompEncerradoPageModule = /** @class */ (function () {
    function ExcluirAcompEncerradoPageModule() {
    }
    ExcluirAcompEncerradoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _excluir_acomp_encerrado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExcluirAcompEncerradoPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_6__["ExcluirAcompEncerradoPage"]]
        })
    ], ExcluirAcompEncerradoPageModule);
    return ExcluirAcompEncerradoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texto-card-title {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-label {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-text {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n}\n\n.ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 95%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ion-margin-bottom, [margin-bottom] {\n  margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 2px);\n}\n\nion-item-options ion-button {\n  height: auto;\n}\n\nion-item-sliding ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --border-width: 1px 1px 1px;\n  --border-radius: 10px;\n  --border-color:var(--ion-color-secondary-shade);\n  -webkit-margin-before: 2px;\n          margin-block-start: 2px;\n  -webkit-margin-after: 5px;\n          margin-block-end: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL2V4Y2x1aXItYWNvbXAtZW5jZXJyYWRvL0M6XFxEZXNlblxccHJvamV0b3NfbXllY2xpcHNlXzIwMjFcXHdvcmtzcGFjZV9zYXVkaV9IRUFEXFxBcHBBY29tcGFuaGFtZW50b01lZGljby9zcmNcXGFwcFxccGFnZXNcXGNvbmZpZ3VyYWNhb1xcZXhjbHVpci1hY29tcC1lbmNlcnJhZG9cXGV4Y2x1aXItYWNvbXAtZW5jZXJyYWRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL2V4Y2x1aXItYWNvbXAtZW5jZXJyYWRvL2V4Y2x1aXItYWNvbXAtZW5jZXJyYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtFQUNBLHFDQUFBO0FDQ0o7O0FER0k7RUFDRSxZQUFBO0FDQU47O0FETUk7RUFDSSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWd1cmFjYW8vZXhjbHVpci1hY29tcC1lbmNlcnJhZG8vZXhjbHVpci1hY29tcC1lbmNlcnJhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvLWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHRvLWNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgICBcclxufVxyXG5cclxuLmlvbi1pdGVtLXNsaWRpbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW9uLW1hcmdpbi1ib3R0b20sIFttYXJnaW4tYm90dG9tXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDJweCk7XHJcbn0gICAgICAgICAgICAgICAgICAgXHJcblxyXG5pb24taXRlbS1vcHRpb25ze1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuaW9uLWl0ZW0tc2xpZGluZ3tcclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogNXB4O1xyXG4gICAgfSAgXHJcbn0iLCIudGV4dG8tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0by1jYXJkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHRvLWNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmlvbi1pdGVtLXNsaWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20sIFttYXJnaW4tYm90dG9tXSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAycHgpO1xufVxuXG5pb24taXRlbS1vcHRpb25zIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcgaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLWJvcmRlci13aWR0aDogMXB4IDFweCAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMnB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts ***!
  \********************************************************************************************/
/*! exports provided: ExcluirAcompEncerradoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirAcompEncerradoPage", function() { return ExcluirAcompEncerradoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ExcluirAcompEncerradoPage = /** @class */ (function () {
    function ExcluirAcompEncerradoPage(formBuilder, storageService, atrCtrl) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.atrCtrl = atrCtrl;
        this.listaPeriodo = ["Todos", "Mais de 3 dias", "Mais de 15 dias", "Mais de 30 dias"];
    }
    ExcluirAcompEncerradoPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.formExcluirAcompEncerrado = this.formBuilder.group({
            filtroPeriodo: [''],
        });
        this.listaAcompEncerrados = [];
    };
    Object.defineProperty(ExcluirAcompEncerradoPage.prototype, "filtroPeriodo", {
        get: function () {
            return this.formExcluirAcompEncerrado.get('filtroPeriodo');
        },
        enumerable: true,
        configurable: true
    });
    ExcluirAcompEncerradoPage.prototype.buscarAcompanhamentosEncerrados = function () {
        var _this = this;
        var acompanhamentoMedico;
        this.listaAcompEncerrados = [];
        var dataFiltro = new Date();
        switch (this.filtroPeriodo.value) {
            case "Todos":
                dataFiltro = null;
                break;
            case "Mais de 3 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 3);
                break;
            case "Mais de 15 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 15);
                break;
            case "Mais de 30 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 30);
                break;
        }
        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) {
            if (items != null) {
                items.forEach(function (acomp) {
                    if (acomp.status == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STATUS_ENCERRADO) {
                        var dataEncerramento = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(acomp.dataEncerramento, "DD/MM/YYYY").toISOString());
                        if (dataFiltro != null) {
                            if (dataEncerramento <= dataFiltro) {
                                _this.listaAcompEncerrados.push(acomp);
                            }
                        }
                        else {
                            _this.listaAcompEncerrados.push(acomp);
                        }
                    }
                });
            }
        });
    };
    ExcluirAcompEncerradoPage.prototype.apagarAcompanhamento = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Ao confirmar o acompanhamento será excluído do seu dispositivo.Deseja excluir o acompanhamento?";
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Excluir acompanhamento encerrado',
                                message: mensagem,
                                buttons: [{
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function () {
                                            _this.listaAcompEncerrados.forEach(function (item, indice) {
                                                if (indice == index) {
                                                    _this.listaAcompEncerrados.splice(indice, 1);
                                                    _this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, item, "senhaAutorizacao.senha");
                                                }
                                            });
                                        }
                                    }]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExcluirAcompEncerradoPage.prototype.apagarTodos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Ao confirmar TODOS os acompanhamentos encerrados serão excluídos do seu dispositivo.Deseja excluir todos os acompanhamentos encerrados?";
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Excluir TODOS os acompanhamentos encerrados',
                                message: mensagem,
                                buttons: [{
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var _i, _a, acomp;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _i = 0, _a = this.listaAcompEncerrados;
                                                        _b.label = 1;
                                                    case 1:
                                                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                                                        acomp = _a[_i];
                                                        return [4 /*yield*/, this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha")];
                                                    case 2:
                                                        _b.sent();
                                                        _b.label = 3;
                                                    case 3:
                                                        _i++;
                                                        return [3 /*break*/, 1];
                                                    case 4:
                                                        this.listaAcompEncerrados = [];
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExcluirAcompEncerradoPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    ExcluirAcompEncerradoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excluir-acomp-encerrado',
            template: __webpack_require__(/*! raw-loader!./excluir-acomp-encerrado.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.html"),
            styles: [__webpack_require__(/*! ./excluir-acomp-encerrado.page.scss */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], ExcluirAcompEncerradoPage);
    return ExcluirAcompEncerradoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuracao-excluir-acomp-encerrado-excluir-acomp-encerrado-module-es5.js.map