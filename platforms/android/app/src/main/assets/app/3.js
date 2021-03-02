(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[3],{

/***/ "./app/consulta/consulta-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaRoutingModule", function() { return ConsultaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/consulta/consulta.component.ts");



var routes = [
    {
        path: '',
        component: _consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"]
    }
];
var ConsultaRoutingModule = /** @class */ (function () {
    function ConsultaRoutingModule() {
    }
    ConsultaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], ConsultaRoutingModule);
    return ConsultaRoutingModule;
}());



/***/ }),

/***/ "./app/consulta/consulta.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.input {\n  font-size: 14;\n}\n\n.site-template-image {\n  border-radius: 100;\n  margin: 8 16;\n  width: 60;\n  height: 60;\n}\n\n.site-template-title {\n  margin: 0 0 6 0;\n  font-size: 18;\n}\n\n.site-template-description {\n  font-size: 14;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding: 16;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding: 16;\n}\n\n.gridLayoutLayout {\n  background-color: white;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.swipeTemplateLabel {\n  size: 20;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.listItemStackLayout {\n  background-color: white;\n  padding-left: 5;\n}\n\n.item-name {\n  color: #303c47;\n  font-family: 'Open Sans', 'OpenSans-Bold';\n  font-weight: bold;\n  padding: 2;\n}\n\n.messagesError {\n  font-size: 18;\n  color: red;\n  text-align: center;\n}\n\n.messagesOk {\n  font-size: 18;\n  color: blue;\n  text-align: center;\n}\n\n.input_ro {\n  font-size: 18;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/consulta/consulta.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n  <NavigationButton\n    ios:visibility=\"collapsed\"\n    icon=\"res://menu\"\n    (tap)=\"onDrawerButtonTap()\"\n  ></NavigationButton>\n  <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n  <ActionItem\n    icon=\"res://navigation/menu\"\n    android:visibility=\"collapsed\"\n    (tap)=\"onDrawerButtonTap()\"\n    ios.position=\"left\"\n  >\n  </ActionItem>\n  <Label class=\"action-bar-title\" text=\"Consulta\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView>\n    <GridLayout rows=\"auto,auto,auto,auto,auto,auto,auto\" columns=\"*,*\">\n      <Label\n        row=\"0\"\n        colSpan=\"2\"\n        [ngClass]=\"messagesStyle\"\n        text=\"{{ message }}\"\n      ></Label>\n\n      <TextField\n        #loteNameTF\n        row=\"1\"\n        col=\"0\"\n        id=\"loteNameTF\"\n        [(ngModel)]=\"loteName\"\n        textWrap=\"true\"\n        class=\"input\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"allcharacters\"\n        hint=\"Escanee el serial\"\n        (textChange)=\"onTextLoteChange($event)\"\n      ></TextField>\n\n      <TextView\n        #locationNameSLTF=\"ngModel\"\n        row=\"1\"\n        col=\"1\"\n        hint=\"Serial Actual\"\n        autocorrect=\"false\"\n        class=\"input\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"loteNameSL\"\n        editable=\"false\"\n      ></TextView>\n\n      <TextField\n        #productUnitTF=\"ngModel\"\n        row=\"2\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Unidad del Producto\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productUnit\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productCurrentQtyTF=\"ngModel\"\n        row=\"2\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Cantidad Actual\"\n        keyboardType=\"number\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productQty\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLotTF=\"ngModel\"\n        row=\"3\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Lote / Serial\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLot\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLocTF=\"ngModel\"\n        row=\"3\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Ubicación del Lote\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLoc\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextView\n        #productNameTF=\"ngModel\"\n        row=\"4\"\n        colSpan=\"2\"\n        style=\"margin-top: 15px\"\n        height=\"100px\"\n        hint=\"Nombre del Producto\"\n        returnKeyType=\"next\"\n        [(ngModel)]=\"productName\"\n        class=\"input\"\n        borderColor=\"#DEDEDE\"\n        borderWidth=\"1\"\n        editable=\"false\"\n      ></TextView>\n    </GridLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n\n"

/***/ }),

/***/ "./app/consulta/consulta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/services/conteo.service.ts");
/* harmony import */ var _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/model/stock/quant.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);





var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(conteoService) {
        this.conteoService = conteoService;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.locationName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_3__["Quant"]();
        this.locationSelected = null;
        this.messagesStyle = 'messagesOk';
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ConsultaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loteNameTF.nativeElement.focus();
        }, 600);
    };
    ConsultaComponent.prototype.onItemLoading = function (args) {
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
            //var newcolor = new Color('#e6e6e6');
            //args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    };
    ConsultaComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ConsultaComponent.prototype.onTextLoteChange = function (args) {
        var _this = this;
        var code = args.object['text'];
        var self = new WeakRef(this).get();
        if (code && code.length === 11) {
            if (code.substring(0, 1).toUpperCase() === 'X') {
                var id = code.substring(1);
                this.searchLocation(+id);
            }
            else {
                var id = code.substring(1);
                self.isLoading = true;
                this.conteoService.getLotByName(code).subscribe(function (response) {
                    self.isLoading = false;
                    if (response.result.length > 0) {
                        self.loteSelected = response.result.records[0];
                        self.productName = self.loteSelected.product_id[1];
                        self.productQty = self.loteSelected.quantity;
                        self.productUnit = self.loteSelected.product_uom_id[1];
                        self.productLoc = self.loteSelected.location_id[1];
                        //Cambio para poblar el campo inferior de lote, debe quedar igual al serial escaneado self.loteSelected.lot_id[1] >>  self.loteName;
                        self.productLot = self.loteName;
                        self.loteNameSL = self.loteName;
                        self.showOkMessage('Serial encontrado');
                        _this.loteName = null; //LoteName es el campo de lectura  -  Escaneo principal
                    }
                    else {
                        _this.showOkMessage('Serial no existe');
                        self.clearFields();
                    }
                });
            }
        }
    };
    ConsultaComponent.prototype.alert = function (message) {
        return alert({
            title: 'MH Móvil',
            okButtonText: 'OK',
            message: message
        });
    };
    ConsultaComponent.prototype.showErrorMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesError';
    };
    ConsultaComponent.prototype.showOkMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesOk';
    };
    ConsultaComponent.prototype.clearFields = function () {
        this.loteName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_3__["Quant"]();
        this.productQty = 0;
        this.productQtyNew = 0;
        this.productName = null;
        this.productUnit = null;
        this.productLoc = null;
        this.productLot = null;
        this.loteNameSL = null;
        this.loteNameTF.nativeElement.focus();
    };
    ConsultaComponent.prototype.searchLocation = function (id) {
        var self = new WeakRef(this).get();
        this.isLoading = true;
        this.conteoService.getStockLocation(+id).subscribe(function (response) {
            self.isLoading = false;
            if (response.result.length > 0) {
                self.locationSelected = response.result.records[0];
                self.productLoc = self.locationSelected.name;
                self.loteNameSL = self.loteName;
                self.showOkMessage('Ubicación encontrada');
            }
            else {
                self.showErrorMessage('No existe ubicación');
            }
            self.loteName = null;
            self.isLoading = false;
        });
    };
    ConsultaComponent.ctorParameters = function () { return [
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_2__["ConteoService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loteNameTF', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConsultaComponent.prototype, "loteNameTF", void 0);
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Consulta',
            template: __importDefault(__webpack_require__("./app/consulta/consulta.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/consulta/consulta.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_2__["ConteoService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./app/consulta/consulta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaModule", function() { return ConsultaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/consulta/consulta-routing.module.ts");
/* harmony import */ var _consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/consulta/consulta.component.ts");






var ConsultaModule = /** @class */ (function () {
    function ConsultaModule() {
    }
    ConsultaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _consulta_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConsultaRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], ConsultaModule);
    return ConsultaModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/shared/model/stock/quant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quant", function() { return Quant; });
var Quant = /** @class */ (function () {
    function Quant() {
    }
    return Quant;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uc3VsdGEvY29uc3VsdGEtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnN1bHRhL2NvbnN1bHRhLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL21vZGVsL3N0b2NrL3F1YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUscUVBQWlCO0tBQzdCO0NBQ0YsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEJsQywrQ0FBK0Msa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0IsR0FBRywwQkFBMEIsdUJBQXVCLGlCQUFpQixjQUFjLGVBQWUsR0FBRywwQkFBMEIsb0JBQW9CLGtCQUFrQixHQUFHLGdDQUFnQyxrQkFBa0IsR0FBRywwQkFBMEIsMkJBQTJCLGdCQUFnQixHQUFHLDRCQUE0QiwwQkFBMEIsZ0JBQWdCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLDBCQUEwQiwyQkFBMkIscUJBQXFC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SSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3R3dCLDZFQUFhOztJQUhNO1FBQTNDLCtEQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFhLHdEQUFVO3lEQUFDO0lBdkJ4RCxpQkFBaUI7UUFON0IsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBRXBCLGdHQUF3Qzs7U0FFekMsQ0FBQzt5Q0EyQnlCLDZFQUFhO09BMUIzQixpQkFBaUIsQ0F3STdCO0lBQUQsd0JBQUM7Q0FBQTtBQXhJNkI7Ozs7Ozs7OztBQ2xCOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUNMO0FBQ0c7QUFDSDtBQUNUO0FBZXpEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBYjFCLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asb0ZBQXdCO2dCQUN4Qiw4RUFBcUI7Z0JBQ3JCLGtGQUF1QjtnQkFDdkIsMERBQVc7Z0JBQ1gsa0VBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHFFQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRSxDQUFDLDhEQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBO0FBQUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjNCO0FBQUE7QUFBQTtJQUFBO0lBVUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25zdWx0YUNvbXBvbmVudCB9IGZyb20gJy4vY29uc3VsdGEuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IENvbnN1bHRhQ29tcG9uZW50XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvbnN1bHRhUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBY3Rpb25CYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLWltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDtcXG4gIG1hcmdpbjogOCAxNjtcXG4gIHdpZHRoOiA2MDtcXG4gIGhlaWdodDogNjA7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLXRpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDYgMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiAxNjtcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAxNjtcXG59XFxuXFxuLmdyaWRMYXlvdXRMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxufVxcblxcbi5zd2lwZVRlbXBsYXRlTGFiZWwge1xcbiAgc2l6ZTogMjA7XFxufVxcblxcbi5kZWxldGVWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZy1sZWZ0OiAxNjtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbn1cXG5cXG4ubGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogNTtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICBjb2xvcjogIzMwM2M0NztcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ09wZW5TYW5zLUJvbGQnO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAyO1xcbn1cXG5cXG4ubWVzc2FnZXNFcnJvciB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lc3NhZ2VzT2sge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXRfcm8ge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gIDwhLS0gXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIlxcbiAgICBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIlxcbiAgICAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8IS0tIFxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgaWNvbj1cXFwicmVzOi8vbmF2aWdhdGlvbi9tZW51XFxcIlxcbiAgICBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCJcXG4gID5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiQ29uc3VsdGFcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0byxhdXRvLGF1dG8sYXV0byxhdXRvLGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiKiwqXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgIGNvbFNwYW49XFxcIjJcXFwiXFxuICAgICAgICBbbmdDbGFzc109XFxcIm1lc3NhZ2VzU3R5bGVcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJ7eyBtZXNzYWdlIH19XFxcIlxcbiAgICAgID48L0xhYmVsPlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNsb3RlTmFtZVRGXFxuICAgICAgICByb3c9XFxcIjFcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBpZD1cXFwibG90ZU5hbWVURlxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJsb3RlTmFtZVxcXCJcXG4gICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwiYWxsY2hhcmFjdGVyc1xcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkVzY2FuZWUgZWwgc2VyaWFsXFxcIlxcbiAgICAgICAgKHRleHRDaGFuZ2UpPVxcXCJvblRleHRMb3RlQ2hhbmdlKCRldmVudClcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0Vmlld1xcbiAgICAgICAgI2xvY2F0aW9uTmFtZVNMVEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjFcXFwiXFxuICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICBoaW50PVxcXCJTZXJpYWwgQWN0dWFsXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJsb3RlTmFtZVNMXFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRWaWV3PlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNwcm9kdWN0VW5pdFRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIyXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiVW5pZGFkIGRlbCBQcm9kdWN0b1xcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdFVuaXRcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdEN1cnJlbnRRdHlURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiMlxcXCJcXG4gICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkNhbnRpZGFkIEFjdHVhbFxcXCJcXG4gICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0UXR5XFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI3Byb2R1Y3RMb3RURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiM1xcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkxvdGUgLyBTZXJpYWxcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3RMb3RcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdExvY1RGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIzXFxcIlxcbiAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiVWJpY2FjacOzbiBkZWwgTG90ZVxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdExvY1xcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0Vmlld1xcbiAgICAgICAgI3Byb2R1Y3ROYW1lVEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjRcXFwiXFxuICAgICAgICBjb2xTcGFuPVxcXCIyXFxcIlxcbiAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDE1cHhcXFwiXFxuICAgICAgICBoZWlnaHQ9XFxcIjEwMHB4XFxcIlxcbiAgICAgICAgaGludD1cXFwiTm9tYnJlIGRlbCBQcm9kdWN0b1xcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdE5hbWVcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBib3JkZXJDb2xvcj1cXFwiI0RFREVERVxcXCJcXG4gICAgICAgIGJvcmRlcldpZHRoPVxcXCIxXFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRWaWV3PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuICA8QWN0aXZpdHlJbmRpY2F0b3JcXG4gICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCJcXG4gID48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgPE9mZmxpbmVOb3RpZmljYXRpb24+PC9PZmZsaW5lTm90aWZpY2F0aW9uPlxcbjwvR3JpZExheW91dD5cXG5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL25vdGUubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jb250ZW8uc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvc3RvY2svaW52ZW50b3J5Lm1vZGVsJztcbmltcG9ydCB7IFF1YW50IH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3N0b2NrL3F1YW50JztcbmltcG9ydCB7IFN0b2NrTG9jYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvc3RvY2svbG9jYXRpb24nO1xuaW1wb3J0IHsgSW52ZW50b3J5UHJvY2VzcyB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9pbnZlbnRvcnkucHJvY2Vzcy5tb2RlbCc7XG5pbXBvcnQgeyBmbGF0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ29uc3VsdGEnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc3VsdGEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25zdWx0YS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uc3VsdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIG5vdGVzQXJyYXk6IEFycmF5PE5vdGU+O1xuICBwcm9jZXNvSWQ6IG51bWJlcjtcbiAgcHJvZHVjdE5hbWU6IHN0cmluZztcbiAgcHJvZHVjdFF0eU5ldzogbnVtYmVyO1xuICBwcm9kdWN0UXR5OiBudW1iZXI7XG4gIHByb2R1Y3RVbml0OiBzdHJpbmc7XG4gIHByb2R1Y3RMb2M6IHN0cmluZztcbiAgcHJvZHVjdExvdDogc3RyaW5nO1xuICBsb2NhdGlvbk5hbWU6IHN0cmluZztcbiAgbG90ZU5hbWU6IHN0cmluZztcbiAgbG90ZU5hbWVTTDogc3RyaW5nO1xuICBpbnZlbnRvcnlOYW1lOiBzdHJpbmc7XG5cbiAgbG9jYXRpb25TZWxlY3RlZDogU3RvY2tMb2NhdGlvbjtcbiAgaW52ZW50b3J5U2VsZWN0ZWQ6IEludmVudG9yeTtcbiAgbG90ZVNlbGVjdGVkOiBRdWFudDtcbiAgaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkOiBJbnZlbnRvcnlQcm9jZXNzO1xuXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgbWVzc2FnZXNTdHlsZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2xvdGVOYW1lVEYnLCB7IHN0YXRpYzogZmFsc2UgfSkgbG90ZU5hbWVURjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbnRlb1NlcnZpY2U6IENvbnRlb1NlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IG51bGw7XG4gICAgdGhpcy5sb3RlU2VsZWN0ZWQgPSBuZXcgUXVhbnQoKTtcbiAgICB0aGlzLmxvY2F0aW9uU2VsZWN0ZWQgPSBudWxsO1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc09rJztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtbGlmZS1jeWNsZS1pbnRlcmZhY2VcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb3RlTmFtZVRGLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9LCA2MDApO1xuICB9XG5cbiAgb25JdGVtTG9hZGluZyhhcmdzKSB7XG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAvL3ZhciBuZXdjb2xvciA9IG5ldyBDb2xvcignI2U2ZTZlNicpO1xuICAgICAgLy9hcmdzLmlvcy5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgfVxuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgb25UZXh0TG90ZUNoYW5nZShhcmdzKSB7XG4gICAgY29uc3QgY29kZTogc3RyaW5nID0gYXJncy5vYmplY3RbJ3RleHQnXTtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgaWYgKGNvZGUgJiYgY29kZS5sZW5ndGggPT09IDExKSB7XG4gICAgICBpZiAoY29kZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSA9PT0gJ1gnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHRoaXMuc2VhcmNoTG9jYXRpb24oK2lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGlkID0gY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHNlbGYuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZW9TZXJ2aWNlLmdldExvdEJ5TmFtZShjb2RlKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5sb3RlU2VsZWN0ZWQgPSByZXNwb25zZS5yZXN1bHQucmVjb3Jkc1swXTtcbiAgICAgICAgICAgIHNlbGYucHJvZHVjdE5hbWUgPSBzZWxmLmxvdGVTZWxlY3RlZC5wcm9kdWN0X2lkWzFdO1xuICAgICAgICAgICAgc2VsZi5wcm9kdWN0UXR5ID0gc2VsZi5sb3RlU2VsZWN0ZWQucXVhbnRpdHk7XG4gICAgICAgICAgICBzZWxmLnByb2R1Y3RVbml0ID0gc2VsZi5sb3RlU2VsZWN0ZWQucHJvZHVjdF91b21faWRbMV07XG4gICAgICAgICAgICBzZWxmLnByb2R1Y3RMb2MgPSBzZWxmLmxvdGVTZWxlY3RlZC5sb2NhdGlvbl9pZFsxXTtcbiAgICAgICAgICAgIC8vQ2FtYmlvIHBhcmEgcG9ibGFyIGVsIGNhbXBvIGluZmVyaW9yIGRlIGxvdGUsIGRlYmUgcXVlZGFyIGlndWFsIGFsIHNlcmlhbCBlc2NhbmVhZG8gc2VsZi5sb3RlU2VsZWN0ZWQubG90X2lkWzFdID4+ICBzZWxmLmxvdGVOYW1lO1xuICAgICAgICAgICAgc2VsZi5wcm9kdWN0TG90ID0gc2VsZi5sb3RlTmFtZTtcbiAgICAgICAgICAgIHNlbGYubG90ZU5hbWVTTCA9IHNlbGYubG90ZU5hbWU7XG4gICAgICAgICAgICBzZWxmLnNob3dPa01lc3NhZ2UoJ1NlcmlhbCBlbmNvbnRyYWRvJyk7XG4gICAgICAgICAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDsgICAvL0xvdGVOYW1lIGVzIGVsIGNhbXBvIGRlIGxlY3R1cmEgIC0gIEVzY2FuZW8gcHJpbmNpcGFsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd09rTWVzc2FnZSgnU2VyaWFsIG5vIGV4aXN0ZScpO1xuICAgICAgICAgICAgc2VsZi5jbGVhckZpZWxkcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgIHRpdGxlOiAnTUggTcOzdmlsJyxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgIG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dFcnJvck1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm1lc3NhZ2VzU3R5bGUgPSAnbWVzc2FnZXNFcnJvcic7XG4gIH1cblxuICBzaG93T2tNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5tZXNzYWdlc1N0eWxlID0gJ21lc3NhZ2VzT2snO1xuICB9XG5cbiAgY2xlYXJGaWVsZHMoKTogdm9pZCB7XG4gICAgdGhpcy5sb3RlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5sb3RlU2VsZWN0ZWQgPSBuZXcgUXVhbnQoKTtcbiAgICB0aGlzLnByb2R1Y3RRdHkgPSAwO1xuICAgIHRoaXMucHJvZHVjdFF0eU5ldyA9IDA7XG4gICAgdGhpcy5wcm9kdWN0TmFtZSA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0VW5pdCA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0TG9jID0gbnVsbDtcbiAgICB0aGlzLnByb2R1Y3RMb3QgPSBudWxsO1xuICAgIHRoaXMubG90ZU5hbWVTTCA9IG51bGw7XG4gICAgdGhpcy5sb3RlTmFtZVRGLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHNlYXJjaExvY2F0aW9uKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRTdG9ja0xvY2F0aW9uKCtpZCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGYubG9jYXRpb25TZWxlY3RlZCA9IHJlc3BvbnNlLnJlc3VsdC5yZWNvcmRzWzBdO1xuICAgICAgICBzZWxmLnByb2R1Y3RMb2MgPSBzZWxmLmxvY2F0aW9uU2VsZWN0ZWQubmFtZTtcbiAgICAgICAgc2VsZi5sb3RlTmFtZVNMID0gc2VsZi5sb3RlTmFtZTtcbiAgICAgICAgc2VsZi5zaG93T2tNZXNzYWdlKCdVYmljYWNpw7NuIGVuY29udHJhZGEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuc2hvd0Vycm9yTWVzc2FnZSgnTm8gZXhpc3RlIHViaWNhY2nDs24nKTtcbiAgICAgIH1cbiAgICAgIHNlbGYubG90ZU5hbWUgPSBudWxsO1xuICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29uc3VsdGFSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb25zdWx0YS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zdWx0YUNvbXBvbmVudCB9IGZyb20gJy4vY29uc3VsdGEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBDb25zdWx0YVJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb25zdWx0YUNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ29uc3VsdGFNb2R1bGUgeyB9XG4iLCJleHBvcnQgY2xhc3MgUXVhbnQge1xuICBpZDogbnVtYmVyO1xuICBsb3RlTmFtZTogc3RyaW5nO1xuICBsb2NhdGlvbl9pZDogQXJyYXk8YW55PjtcbiAgbG90X2lkOiBBcnJheTxhbnk+O1xuICBwcm9kdWN0X2lkOiBBcnJheTxhbnk+O1xuICBwcm9kdWN0X3VvbV9pZDogQXJyYXk8YW55PjtcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgcHJvZHVjdF9xdHk6IG51bWJlcjtcbiAgbGluZUlkOiBudW1iZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9