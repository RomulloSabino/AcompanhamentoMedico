(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-principal-menu-principal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-principal/menu-principal.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-principal/menu-principal.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-padding\">{{titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"card-background-page\">\r\n  <ion-grid ion-no-padding class=\"ion-text-uppercase\" fixed>\r\n    <ion-row class=\"ion-align-items-stretch\">\r\n      <ion-col size=\"12\">\r\n        <ion-card *ngIf=\"flgTrabalhaComSenha == 1\" class=\"ion-text-left ion-padding\" [routerLink]=\"['./buscar-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Abrir</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"open\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"flgTrabalhaSemSenha == 1\" class=\"ion-text-left ion-padding\" [routerLink]=\"['./abrir-sem-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Abrir</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"open\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"flgTrabalhaComSenhaDom == 1\" class=\"ion-text-left ion-padding\" [routerLink]=\"['./abrir-sem-senha-domiciliar']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Abrir</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"open\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" [routerLink]=\"['./acompanhar']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Acompanhar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"create\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" *ngIf=\"flgTrabalhaComSenha || flgTrabalhaComSenhaDom\" [routerLink]=\"['./importar-com-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Importar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"download\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card class=\"ion-text-left ion-padding\" *ngIf=\"flgTrabalhaSemSenha\" [routerLink]=\"['./importar-sem-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Importar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"download\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>        \r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" [routerLink]=\"['./restaurar']\"\r\n          routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Restaurar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"sync\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" [routerLink]=\"['./sincronizar']\"\r\n          routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Sincronizar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"cloud\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MenuPrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageRoutingModule", function() { return MenuPrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/pages/menu-principal/menu-principal.page.ts");




const routes = [
    {
        path: '',
        component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrincipalPage"]
    }
];
let MenuPrincipalPageRoutingModule = class MenuPrincipalPageRoutingModule {
};
MenuPrincipalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPrincipalPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageModule", function() { return MenuPrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-principal-routing.module */ "./src/app/pages/menu-principal/menu-principal-routing.module.ts");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/pages/menu-principal/menu-principal.page.ts");







let MenuPrincipalPageModule = class MenuPrincipalPageModule {
};
MenuPrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalPageRoutingModule"]
        ],
        declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalPage"]]
    })
], MenuPrincipalPageModule);



/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page ion-card-title {\n  --color: var(--ion-color-primary);\n  margin-bottom: 0.4em;\n  font-size: 20px;\n}\n\n.card-background-page ion-card-subtitle {\n  --color: var(--ion-color-primary);\n}\n\n.card-background-page ion-icon {\n  font-size: 50px;\n}\n\n.card-background-page .padding-top-80 {\n  padding-top: 80px;\n}\n\n.card-background-page .margin-top-40 {\n  margin-top: 40px;\n}\n\n.card-background-page .scroll-content {\n  overflow-y: auto;\n}\n\n.card-background-page ion-card {\n  padding: 10px;\n  margin: 2px;\n}\n\n.image-footer {\n  width: 50%;\n  height: 320%;\n}\n\nion-button ion-badge {\n  position: absolute;\n  top: -0.2rem;\n  right: -0.2rem;\n  opacity: 0.9;\n}\n\nion-button ion-badge ~ ion-icon {\n  margin-right: 1.2rem;\n}\n\n@media (max-width: 320px), (max-height: 320px) {\n  ion-card-title {\n    font-size: 1.1rem !important;\n  }\n\n  ion-icon {\n    font-size: 40px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1wcmluY2lwYWwvQzpcXERlc2VuXFxwcm9qZXRvc19teWVjbGlwc2VfMjAyMVxcd29ya3NwYWNlX3NhdWRpX0hFQURcXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xcbWVudS1wcmluY2lwYWxcXG1lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0ksaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNGTjs7QURLRTtFQUNFLGlDQUFBO0FDSEo7O0FETUU7RUFDRSxlQUFBO0FDSko7O0FET0U7RUFDRSxpQkFBQTtBQ0xKOztBRE9FO0VBQ0UsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLGdCQUFBO0FDTko7O0FEU0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNURjs7QURhRTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDVk47O0FEWU07RUFDSSxvQkFBQTtBQ1ZWOztBRGdCQTtFQUNDO0lBQ0csNEJBQUE7RUNiRjs7RURnQkE7SUFDRSwwQkFBQTtFQ2JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC40ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy10b3AtODB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICB9XHJcbiAgLm1hcmdpbi10b3AtNDB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbWFnZS1mb290ZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDMyMCU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMC4ycmVtO1xyXG4gICAgICByaWdodDogLTAuMnJlbTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG5cclxuICAgICAgJiB+IGlvbi1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpLCAobWF4LWhlaWdodDogMzIwcHgpe1xyXG4gaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wYWRkaW5nLXRvcC04MCB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5tYXJnaW4tdG9wLTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5pbWFnZS1mb290ZXIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMyMCU7XG59XG5cbmlvbi1idXR0b24gaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjJyZW07XG4gIHJpZ2h0OiAtMC4ycmVtO1xuICBvcGFjaXR5OiAwLjk7XG59XG5pb24tYnV0dG9uIGlvbi1iYWRnZSB+IGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCksIChtYXgtaGVpZ2h0OiAzMjBweCkge1xuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.page.ts ***!
  \*************************************************************/
/*! exports provided: MenuPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPage", function() { return MenuPrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_util_verifica_versao_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/verifica-versao-util */ "./src/app/util/verifica-versao-util.ts");











let MenuPrincipalPage = class MenuPrincipalPage {
    constructor(menu, loading, atrCtrl, router, toast, storageService, verificaVersao) {
        this.menu = menu;
        this.loading = loading;
        this.atrCtrl = atrCtrl;
        this.router = router;
        this.toast = toast;
        this.storageService = storageService;
        this.verificaVersao = verificaVersao;
        this.loginSuccess = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('pt-br');
        this.menu.enable(true);
        this.menu.swipeGesture(true);
        this.usuarioLogado = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.usuarioLogado = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        const operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
        if (operadora) {
            this.titulo = operadora.nomeOperadora;
        }
        else {
            this.titulo = 'Menu Principal';
        }
        if (this.usuarioLogado.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].PERFIL_DOMICILIAR) {
            this.flgTrabalhaComSenhaDom = 1;
            this.flgTrabalhaComSenha = 0;
            this.flgTrabalhaSemSenha = 0;
        }
        else {
            if (JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario')).flagUtilizaSenhaAcompMedico == 1) {
                this.flgTrabalhaComSenha = 1;
                this.flgTrabalhaComSenhaDom = 0;
            }
            else {
                this.flgTrabalhaSemSenha = 1;
                this.flgTrabalhaComSenhaDom = 0;
            }
        }
        this.verificaVersao.checkAppVersion();
        this.verificaAcompanhamentoSincronizar();
        this.limparAcompanhamentosEncerrados();
    }
    verificaAcompanhamentoSincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flgPossuiAcompSincronizar = false;
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    let listaAcompanhamentos = items;
                    for (let acomp of listaAcompanhamentos) {
                        if (acomp.usuario.login === this.usuarioLogado.login &&
                            acomp.operadora.codOperadora === this.usuarioLogado.operadora.codOperadora) {
                            if (acomp.listaAcompanhamentoDia && acomp.listaAcompanhamentoDia.length > 0) {
                                let diaAcompanhamento = acomp.listaAcompanhamentoDia.find(y => y.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE);
                                if (diaAcompanhamento != null) {
                                    flgPossuiAcompSincronizar = true;
                                    break;
                                }
                            }
                            if (!flgPossuiAcompSincronizar) {
                                if (acomp.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE) {
                                    flgPossuiAcompSincronizar = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (flgPossuiAcompSincronizar) {
                        this.informaAcompanhamentoSincronizar();
                    }
                }
            }, error => {
                this.toast.errorToast(error);
            });
        });
    }
    informaAcompanhamentoSincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let mensagem = "Você possui acompanhamento(s) para sincronizar. Por favor, sincronize seu(s) acompanhamento(s).";
            const alert = yield this.atrCtrl.create({
                header: 'Sincronizar Acompanhameto',
                message: mensagem,
                buttons: [
                    {
                        text: 'Sincronizar depois',
                        role: 'cancel',
                        handler: (blah) => { }
                    }, {
                        text: 'Sincronizar agora',
                        handler: () => {
                            this.router.navigateByUrl('menu-principal/sincronizar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    limparAcompanhamentosEncerrados() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    let listaAcompanhamentos = items;
                    for (let acomp of listaAcompanhamentos) {
                        if (acomp.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_SINCRONIZADO &&
                            acomp.status === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ENCERRADO &&
                            acomp.usuario.login === this.usuarioLogado.login) {
                            let dataAtual = moment__WEBPACK_IMPORTED_MODULE_9__(new Date());
                            let dataEncerramento = new Date(moment__WEBPACK_IMPORTED_MODULE_9__(acomp.dataEncerramento, "DD/MM/YYYY").toISOString());
                            let qtdDiasEncerrado = dataAtual.diff(dataEncerramento, 'days');
                            if (qtdDiasEncerrado >= src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].QTD_DIAS_APAGAR_ENCERRADO) {
                                this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha");
                            }
                        }
                    }
                }
            }, error => {
                this.toast.errorToast(error);
            });
        });
    }
};
MenuPrincipalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: src_app_util_verifica_versao_util__WEBPACK_IMPORTED_MODULE_10__["VerificaVersao"] }
];
MenuPrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menu-principal',
        template: __webpack_require__(/*! raw-loader!./menu-principal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-principal/menu-principal.page.html"),
        styles: [__webpack_require__(/*! ./menu-principal.page.scss */ "./src/app/pages/menu-principal/menu-principal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
        src_app_util_verifica_versao_util__WEBPACK_IMPORTED_MODULE_10__["VerificaVersao"]])
], MenuPrincipalPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-principal-menu-principal-module-es2015.js.map