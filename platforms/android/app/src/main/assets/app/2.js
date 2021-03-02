(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2],{

/***/ "./app/@nstudio/nativescript-cardview/cardview-common.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
var content_view_1 = __webpack_require__("../node_modules/tns-core-modules/ui/content-view/content-view.js");
var view_1 = __webpack_require__("../node_modules/tns-core-modules/ui/core/view/view.js");
exports.backgroundColorProperty = view_1.backgroundColorProperty;
exports.backgroundInternalProperty = view_1.backgroundInternalProperty;
var CardViewCommon = (function (_super) {
    __extends(CardViewCommon, _super);
    function CardViewCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CardViewCommon;
}(content_view_1.ContentView));
exports.CardViewCommon = CardViewCommon;
exports.radiusProperty = new content_view_1.Property({
    name: 'radius',
    valueConverter: function (value) { return +value; }
});
exports.radiusProperty.register(CardViewCommon);
exports.elevationProperty = new content_view_1.Property({
    name: 'elevation',
    valueConverter: function (value) { return +value; }
});
exports.elevationProperty.register(CardViewCommon);
exports.rippleProperty = new content_view_1.Property({
    name: 'ripple',
    valueConverter: function (value) { return value === 'true'; }
});
exports.rippleProperty.register(CardViewCommon);
exports.shadowRadiusProperty = new content_view_1.Property({
    name: 'shadowRadius',
    valueConverter: function (value) { return +value; }
});
exports.shadowRadiusProperty.register(CardViewCommon);
exports.shadowOffsetWidthProperty = new content_view_1.Property({
    name: 'shadowOffsetWidth',
    valueConverter: function (value) { return +value; }
});
exports.shadowOffsetWidthProperty.register(CardViewCommon);
exports.shadowOffsetHeightProperty = new content_view_1.Property({
    name: 'shadowOffsetHeight',
    valueConverter: function (value) { return +value; }
});
exports.shadowOffsetHeightProperty.register(CardViewCommon);
exports.shadowColorProperty = new content_view_1.Property({
    name: 'shadowColor',
    valueConverter: function (value) { return new color_1.Color(value); }
});
exports.shadowColorProperty.register(CardViewCommon);
exports.shadowOpacityProperty = new content_view_1.Property({
    name: 'shadowOpacity',
    valueConverter: function (value) { return +value; }
});
exports.shadowOpacityProperty.register(CardViewCommon);


/***/ }),

/***/ "./app/@nstudio/nativescript-cardview/cardview.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });
var application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
var color_1 = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
var cardview_common_1 = __webpack_require__("./app/@nstudio/nativescript-cardview/cardview-common.js");
var CardViewNamespace = useAndroidX() ? global.androidx.cardview.widget : android.support.v7.widget;
var AppCompatResourcesNamespace = useAndroidX() ? 'androidx.appcompat' : 'android.support.v7.appcompat';
function useAndroidX() {
    return global.androidx && global.androidx.cardview;
}
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
        this.nativeView.setRadius(value);
    };
    CardView.prototype[cardview_common_1.elevationProperty.setNative] = function (value) {
        this.nativeView.setCardElevation(value);
    };
    CardView.prototype[cardview_common_1.rippleProperty.setNative] = function (value) {
        if (!value) {
            this.nativeView.setClickable(false);
        }
        else {
            var resourcesUri = AppCompatResourcesNamespace + '.R$attr';
            var attr = java.lang.Class.forName(resourcesUri);
            var field = attr.getField('selectableItemBackground');
            if (field && android.os.Build.VERSION.SDK_INT >= 23) {
                var resId = field.getInt(null);
                var attrs = Array.create('int', 1);
                attrs[0] = resId;
                var activity = application.android.foregroundActivity;
                var typedValue = activity.obtainStyledAttributes(attrs);
                var selectedItemDrawable = typedValue.getDrawable(0);
                this.nativeView.setForeground(selectedItemDrawable);
                this.nativeView.setClickable(true);
            }
        }
    };
    CardView.prototype.createNativeView = function () {
        return new CardViewNamespace.CardView(this._context);
    };
    CardView.prototype.initNativeView = function () {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    };
    CardView.prototype[cardview_common_1.backgroundColorProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(value !== undefined ? value.android : new color_1.Color('#FFFFFF').android);
            }
            catch (error) {
                console.log('NativeScript-Cardview --- invalid background-color value ', error);
            }
        }
    };
    CardView.prototype[cardview_common_1.backgroundInternalProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(new color_1.Color(value.color !== undefined ? value.color + '' : '#FFFFFF').android);
            }
            catch (error) {
                console.log('NativeScript-Cardview --- invalid background-color value:', error);
            }
        }
    };
    return CardView;
}(cardview_common_1.CardViewCommon));
exports.CardView = CardView;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/salida/salida-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaRoutingModule", function() { return SalidaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _salida_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/salida/salida.component.ts");
/* harmony import */ var _salida_ver_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/salida/salida.ver.modal.component.ts");




var routes = [
    {
        path: '',
        component: _salida_component__WEBPACK_IMPORTED_MODULE_2__["SalidaComponent"],
        children: [
            {
                path: 'verSalida',
                component: _salida_ver_modal_component__WEBPACK_IMPORTED_MODULE_3__["SalidaVerModalComponent"]
            }
        ]
    }
];
var SalidaRoutingModule = /** @class */ (function () {
    function SalidaRoutingModule() {
    }
    SalidaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SalidaRoutingModule);
    return SalidaRoutingModule;
}());



/***/ }),

/***/ "./app/salida/salida.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.input {\n  font-size: 14;\n}\n\n.site-template-image {\n  border-radius: 100;\n  margin: 8 16;\n  width: 60;\n  height: 60;\n}\n\n.site-template-title {\n  margin: 0 0 6 0;\n  font-size: 18;\n}\n\n.site-template-description {\n  font-size: 14;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding: 16;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding: 16;\n}\n\n.gridLayoutLayout {\n  background-color: white;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.swipeTemplateLabel {\n  size: 20;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.listItemStackLayout {\n  background-color: white;\n  padding-left: 5;\n}\n\n.item-name {\n  color: #303c47;\n  font-family: 'Open Sans', 'OpenSans-Bold';\n  font-weight: bold;\n  padding: 2;\n}\n\n.messagesError {\n  font-size: 18;\n  color: red;\n  text-align: center;\n}\n\n.messagesOk {\n  font-size: 18;\n  color: blue;\n  text-align: center;\n}\n\n.input_ro {\n  font-size: 18;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/salida/salida.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <NavigationButton\n    ios:visibility=\"collapsed\"\n    icon=\"res://menu\"\n    (tap)=\"onDrawerButtonTap()\"\n  ></NavigationButton>\n  <ActionItem\n    icon=\"res://navigation/menu\"\n    android:visibility=\"collapsed\"\n    (tap)=\"onDrawerButtonTap()\"\n    ios.position=\"left\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Ver Picking\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onVerPickingButtonTap()\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Finalizar Salida\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onFinalizarPickingButtonTap()\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Cancelar Salida\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onCancelarPickingButtonTap()\"\n  >\n  </ActionItem>\n  <Label class=\"action-bar-title\" text=\"Salida\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView>\n    <GridLayout rows=\"auto,auto,auto,auto,auto,auto,auto\" columns=\"*,*\">\n      <Label\n        row=\"0\"\n        colSpan=\"2\"\n        [ngClass]=\"messagesStyle\"\n        text=\"{{ message }}\"\n      ></Label>\n\n      <TextField\n        #loteNameTF\n        row=\"1\"\n        col=\"0\"\n        id=\"loteNameTF\"\n        [(ngModel)]=\"loteName\"\n        textWrap=\"true\"\n        class=\"input\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"allcharacters\"\n        hint=\"Escanee el serial\"\n        (textChange)=\"onTextLoteChange($event)\"\n      ></TextField>\n\n      <TextView\n        #locationNameSLTF=\"ngModel\"\n        row=\"1\"\n        col=\"1\"\n        hint=\"Serial Actual\"\n        autocorrect=\"false\"\n        class=\"input\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"loteNameSL\"\n        editable=\"false\"\n      ></TextView>\n\n      <Label row=\"2\" col=\"0\" class=\"input\" text=\"Nueva Cantidad *\"></Label>\n      <TextField\n        #productQtyTF=\"ngModel\"\n        row=\"2\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Digite la cantidad\"\n        keyboardType=\"number\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productQtyNew\"\n        returnKeyType=\"next\"\n        ngDefaultControl\n      ></TextField>\n\n      <TextField\n        #productUnitTF=\"ngModel\"\n        row=\"3\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Unidad del Producto\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productUnit\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productCurrentQtyTF=\"ngModel\"\n        row=\"3\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Cantidad Actual\"\n        keyboardType=\"number\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productQty\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLotTF=\"ngModel\"\n        row=\"4\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Lote / Serial\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLot\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLocTF=\"ngModel\"\n        row=\"4\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Ubicación del Lote\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLoc\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextView\n        #productNameTF=\"ngModel\"\n        row=\"5\"\n        colSpan=\"2\"\n        style=\"margin-top: 15px\"\n        height=\"100px\"\n        hint=\"Nombre del Producto\"\n        returnKeyType=\"next\"\n        [(ngModel)]=\"productName\"\n        class=\"input\"\n        borderColor=\"#DEDEDE\"\n        borderWidth=\"1\"\n        editable=\"false\"\n      ></TextView>\n\n      <Button\n        row=\"6\"\n        colSpan=\"2\"\n        text=\"Aceptar\"\n        class=\"btn btn-primary\"\n        (tap)=\"onSaveButtonTap()\"\n      ></Button>\n    </GridLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/salida/salida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaComponent", function() { return SalidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/services/conteo.service.ts");
/* harmony import */ var _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/model/stock/quant.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _salida_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/salida/salida.modal.component.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);







var SalidaComponent = /** @class */ (function () {
    function SalidaComponent(conteoService, _vcRef, _modalService) {
        this.conteoService = conteoService;
        this._vcRef = _vcRef;
        this._modalService = _modalService;
        this.getBodegaSalida();
    }
    SalidaComponent.prototype.ngOnInit = function () {
        this.productQtyNew = 0;
        this.locationName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__["Quant"]();
        this.messagesStyle = 'messagesOk';
        this.loteSelectedArray = new Array();
    };
    SalidaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loteNameTF.nativeElement.focus();
        }, 600);
    };
    SalidaComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__["getRootView"]();
        sideDrawer.showDrawer();
    };
    SalidaComponent.prototype.onVerPickingButtonTap = function () {
        var _this = this;
        this.message = null;
        var options = {
            viewContainerRef: this._vcRef,
            context: {
                ruta: 'verSalida',
                loteSelectedArray: this.loteSelectedArray
            },
            fullscreen: true
        };
        this._modalService
            .showModal(_salida_modal_component__WEBPACK_IMPORTED_MODULE_5__["SalidaModalComponent"], options)
            .then(function (result) {
            _this.loteSelectedArray = result;
        });
    };
    SalidaComponent.prototype.onFinalizarPickingButtonTap = function () {
        this.message = null;
        if (this.loteSelectedArray.length > 0) {
            this.loteName = null;
            this.clearFields();
            var self_1 = new WeakRef(this).get();
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"]({
                title: 'Finalizar Salida',
                message: '¿Confirma la operación?',
                okButtonText: 'Si',
                cancelButtonText: 'No'
            }).then(function (result) {
                if (result) {
                    self_1.finalizarSalida();
                }
            });
        }
        else {
            this.showErrorMessage('No ha selecionado ningun lote');
        }
    };
    SalidaComponent.prototype.onCancelarPickingButtonTap = function (id) {
        this.message = null;
        var self = new WeakRef(this).get();
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"]({
            title: 'Cancelar Salida',
            message: '¿Confirma la operación?',
            okButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result) {
                self.loteSelectedArray = new Array();
                self.clearFields();
            }
        });
    };
    SalidaComponent.prototype.onTextLoteChange = function (args) {
        var _this = this;
        var code = args.object['text'];
        if (code && code.length === 11) {
            //CAMBIO BUSQUEDA 2021-03-01  Q >>   S
            if (code.substring(0, 1).toUpperCase() !== 'S') {
                this.showErrorMessage('Serial no existe');
                this.loteName = null;
                this.clearFields();
            }
            else {
                var id = code.substring(1);
                this.isLoading = true;
                //CAMBIO BUSQUEDA 2021-03-01  getLote(+id) >>   getLotByName(code)
                this.conteoService.getLotByName(code).subscribe(function (response) {
                    _this.isLoading = false;
                    if (response.result.length > 0) {
                        _this.loteSelected = response.result.records[0];
                        _this.loteSelected.loteName = _this.loteName;
                        _this.productName = _this.loteSelected.product_id[1];
                        _this.productQty = _this.loteSelected.quantity;
                        _this.productUnit = _this.loteSelected.product_uom_id[1];
                        _this.productLoc = _this.loteSelected.location_id[1];
                        //this.productLot = this.loteSelected.lot_id[1];
                        //Cambio para poblar el campo inferior de lote, debe quedar igual al serial escaneado self.loteSelected.lot_id[1] >>  self.loteName;
                        _this.productLot = _this.loteName;
                        _this.loteNameSL = _this.loteName;
                        _this.loteName = null;
                        _this.productQtyNew = 0;
                        var filter = _this.loteSelectedArray.filter(function (el) {
                            return el.id === _this.loteSelected.id;
                        });
                        if (filter.length > 0) {
                            _this.showErrorMessage('Serial ya ha sido agregado');
                        }
                        else {
                            _this.showOkMessage('Serial encontrado');
                        }
                    }
                    else {
                        _this.showErrorMessage('Serial no existe');
                        _this.loteName = null;
                        _this.clearFields();
                    }
                });
            }
        }
    };
    SalidaComponent.prototype.onSaveButtonTap = function () {
        var _this = this;
        if (+this.productQtyNew <= 0) {
            this.showErrorMessage('La cantidad es obligatoria');
        }
        else if (+this.productQtyNew > this.loteSelected.quantity) {
            this.showErrorMessage('La cantidad es mayor a la disponible');
        }
        else {
            var filter = this.loteSelectedArray.filter(function (el) { return el.id === _this.loteSelected.id; });
            if (filter.length > 0) {
                this.showErrorMessage('Serial ya ha sido agregado');
                this.loteName = null;
            }
            else {
                this.loteSelected.quantity = this.productQtyNew;
                this.loteSelectedArray.push(this.loteSelected);
                this.showOkMessage('Serial agregado');
            }
        }
    };
    SalidaComponent.prototype.alert = function (message) {
        return alert({
            title: 'MH Móvil',
            okButtonText: 'OK',
            message: message
        });
    };
    SalidaComponent.prototype.showErrorMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesError';
    };
    SalidaComponent.prototype.showOkMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesOk';
    };
    SalidaComponent.prototype.clearFields = function () {
        this.loteName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__["Quant"]();
        this.productQty = 0;
        this.productQtyNew = 0;
        this.productName = null;
        this.productUnit = null;
        this.productLoc = null;
        this.productLot = null;
        this.loteNameSL = null;
        this.loteNameTF.nativeElement.focus();
    };
    SalidaComponent.prototype.getBodegaSalida = function () {
        var _this = this;
        this.conteoService.getBodegaSalida().subscribe(function (response) {
            _this.bodegaSalida = response.result.records[0];
        });
    };
    SalidaComponent.prototype.finalizarSalida = function () {
        var _this = this;
        if (!Array.isArray(this.bodegaSalida.default_location_dest_id)) {
            var options3 = {
                title: 'Finalizar Salida',
                message: 'No está configurada una bodega!',
                okButtonText: 'Aceptar'
            };
            alert(options3);
            return;
        }
        var self = new WeakRef(this).get();
        this.isLoading = true;
        var _loop_1 = function (ls) {
            this_1.conteoService.getParentsStockLocation([+ls.location_id[0]]).subscribe(function (response) {
                var resultParents = response.result.records;
                var lo = resultParents[0];
                _this.conteoService.createPicking(lo.location_id[0], self.bodegaSalida.default_location_dest_id[0], self.bodegaSalida.id)
                    .subscribe(function (response2) {
                    self.isLoading = false;
                    var pickingId = response2.result;
                    self.conteoService
                        .createPickingDetail(pickingId, self.bodegaSalida.default_location_dest_id[0], ls.product_id[0], ls.location_id[0], 
                    // CAMBIO LOT_ID[0] POR ID
                    //ls.lot_id[0],
                    ls.id, ls.quantity, ls.product_uom_id[0], ls.product_id[1], self.bodegaSalida.id)
                        .subscribe(function (response) {
                        self.isLoading = false;
                        if (response.result) {
                            self.loteSelectedArray = self.loteSelectedArray
                                .filter(function (el) { return el.id !== ls.id; });
                            if (self.loteSelectedArray.length === 0) {
                                var options2 = {
                                    title: 'Finalizar Salida',
                                    message: 'Proceso Completado!',
                                    okButtonText: 'Aceptar'
                                };
                                self.loteName = null;
                                self.message = null;
                                self.clearFields();
                                alert(options2);
                            }
                        }
                    });
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.loteSelectedArray; _i < _a.length; _i++) {
            var ls = _a[_i];
            _loop_1(ls);
        }
    };
    SalidaComponent.ctorParameters = function () { return [
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_1__["ConteoService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__["ModalDialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loteNameTF', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalidaComponent.prototype, "loteNameTF", void 0);
    SalidaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Salida',
            template: __importDefault(__webpack_require__("./app/salida/salida.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/salida/salida.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_1__["ConteoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__["ModalDialogService"]])
    ], SalidaComponent);
    return SalidaComponent;
}());



/***/ }),

/***/ "./app/salida/salida.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>"

/***/ }),

/***/ "./app/salida/salida.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaModalComponent", function() { return SalidaModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__);




var SalidaModalComponent = /** @class */ (function () {
    function SalidaModalComponent(_routerExtensions, _activeRoute, _params) {
        this._routerExtensions = _routerExtensions;
        this._activeRoute = _activeRoute;
        this._params = _params;
    }
    SalidaModalComponent.prototype.ngOnInit = function () {
        this._routerExtensions.navigate([this._params.context.ruta], {
            relativeTo: this._activeRoute
        });
    };
    SalidaModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__["ModalDialogParams"] }
    ]; };
    SalidaModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'SalidaModalComponentOptions',
            template: __importDefault(__webpack_require__("./app/salida/salida.modal.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__["ModalDialogParams"]])
    ], SalidaModalComponent);
    return SalidaModalComponent;
}());



/***/ }),

/***/ "./app/salida/salida.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaModule", function() { return SalidaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _salida_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/salida/salida-routing.module.ts");
/* harmony import */ var _salida_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/salida/salida.component.ts");
/* harmony import */ var _salida_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/salida/salida.modal.component.ts");
/* harmony import */ var _salida_ver_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/salida/salida.ver.modal.component.ts");








var SalidaModule = /** @class */ (function () {
    function SalidaModule() {
    }
    SalidaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _salida_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalidaRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _salida_component__WEBPACK_IMPORTED_MODULE_5__["SalidaComponent"],
                _salida_modal_component__WEBPACK_IMPORTED_MODULE_6__["SalidaModalComponent"],
                _salida_ver_modal_component__WEBPACK_IMPORTED_MODULE_7__["SalidaVerModalComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            entryComponents: [_salida_modal_component__WEBPACK_IMPORTED_MODULE_6__["SalidaModalComponent"], _salida_ver_modal_component__WEBPACK_IMPORTED_MODULE_7__["SalidaVerModalComponent"]]
        })
    ], SalidaModule);
    return SalidaModule;
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

/***/ "./app/salida/salida.ver.modal.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.card {\n  background-color: #fff;\n  color: #4d4d4d;\n  margin: 15 15 0;\n}\n\n.card-layout {\n  padding: 20;\n}\n\n.card-layout .h1 {\n  margin-bottom: 15;\n}\n"

/***/ }),

/***/ "./app/salida/salida.ver.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <ActionItem\n    (tap)=\"onClose()\"\n    ios.systemIcon=\"1\"\n    ios.position=\"right\"\n    android.systemIcon=\"ic_menu_back\"\n  ></ActionItem>\n\n  <Label class=\"action-bar-title\" text=\"Ver Picking\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <CardView\n        *ngFor=\"let item of loteSelectedArray\"\n        class=\"card\"\n        elevation=\"40\"\n        radius=\"10\"\n        ios:shadowRadius=\"3\"\n      >\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h3\" [text]=\"item.lot_id[1]\"></Label>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.product_id[1]\"\n          ></Label>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"'Cantidad:' + item.quantity\"\n          ></Label>\n          <Button\n            text=\"Eliminar\"\n            (tap)=\"onRemoveCardButtonTap(item.id)\"\n            class=\"btn btn-primary\"\n          ></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/salida/salida.ver.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaVerModalComponent", function() { return SalidaVerModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/@nstudio/nativescript-cardview/cardview.js");
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);





Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])('CardView', function () { return _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_3__["CardView"]; });
var SalidaVerModalComponent = /** @class */ (function () {
    function SalidaVerModalComponent(_params) {
        this._params = _params;
        this.loteSelectedArray = this._params.context.loteSelectedArray;
    }
    SalidaVerModalComponent.prototype.ngOnInit = function () {
        this.messagesStyle = 'messagesOk';
    };
    SalidaVerModalComponent.prototype.onClose = function () {
        this._params.closeCallback(this.loteSelectedArray);
    };
    SalidaVerModalComponent.prototype.onRemoveCardButtonTap = function (id) {
        var self = new WeakRef(this).get();
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["confirm"]({
            title: 'Inventarios',
            message: '¿Confirma la operación?',
            okButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result) {
                self.loteSelectedArray = self.loteSelectedArray.filter(function (el) { return el.id !== id; });
            }
        });
    };
    SalidaVerModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"] }
    ]; };
    SalidaVerModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'SalidaVerModal',
            template: __importDefault(__webpack_require__("./app/salida/salida.ver.modal.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/salida/salida.ver.modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], SalidaVerModalComponent);
    return SalidaVerModalComponent;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LWNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC9zYWxpZGEvc2FsaWRhLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9zYWxpZGEvc2FsaWRhLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NhbGlkYS9zYWxpZGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NhbGlkYS9zYWxpZGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zYWxpZGEvc2FsaWRhLm1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zYWxpZGEvc2FsaWRhLm1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2FsaWRhL3NhbGlkYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NhbGlkYS9zYWxpZGEudmVyLm1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NhbGlkYS9zYWxpZGEudmVyLm1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zYWxpZGEvc2FsaWRhLnZlci5tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9tb2RlbC9zdG9jay9xdWFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxpREFBd0I7QUFDOUMscUJBQXFCLG1CQUFPLENBQUMsa0VBQWtDO0FBQy9ELGFBQWEsbUJBQU8sQ0FBQyx1REFBK0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7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QztJQUVELHlDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsdURBQXFCLEdBQXJCLFVBQXNCLEVBQVU7UUFDOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFckMsbUVBQWUsQ0FBQztZQUNkLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNiLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBRSxJQUFLLFNBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO2FBQzlFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkExQmtCLG1GQUFpQjs7SUFSekIsdUJBQXVCO1FBTm5DLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBRTFCLHNHQUFnRDs7U0FFakQsQ0FBQzt5Q0FTbUIsbUZBQWlCO09BUnpCLHVCQUF1QixDQW1DbkM7SUFBRCw4QkFBQztDQUFBO0FBbkNtQzs7Ozs7Ozs7O0FDZnBDO0FBQUE7QUFBQTtJQUFBO0lBVUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpO1xudmFyIGNvbnRlbnRfdmlld18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpO1xudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiKTtcbmV4cG9ydHMuYmFja2dyb3VuZENvbG9yUHJvcGVydHkgPSB2aWV3XzEuYmFja2dyb3VuZENvbG9yUHJvcGVydHk7XG5leHBvcnRzLmJhY2tncm91bmRJbnRlcm5hbFByb3BlcnR5ID0gdmlld18xLmJhY2tncm91bmRJbnRlcm5hbFByb3BlcnR5O1xudmFyIENhcmRWaWV3Q29tbW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FyZFZpZXdDb21tb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2FyZFZpZXdDb21tb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIENhcmRWaWV3Q29tbW9uO1xufShjb250ZW50X3ZpZXdfMS5Db250ZW50VmlldykpO1xuZXhwb3J0cy5DYXJkVmlld0NvbW1vbiA9IENhcmRWaWV3Q29tbW9uO1xuZXhwb3J0cy5yYWRpdXNQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3JhZGl1cycsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMucmFkaXVzUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5lbGV2YXRpb25Qcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ2VsZXZhdGlvbicsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuZWxldmF0aW9uUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5yaXBwbGVQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3JpcHBsZScsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09ICd0cnVlJzsgfVxufSk7XG5leHBvcnRzLnJpcHBsZVByb3BlcnR5LnJlZ2lzdGVyKENhcmRWaWV3Q29tbW9uKTtcbmV4cG9ydHMuc2hhZG93UmFkaXVzUHJvcGVydHkgPSBuZXcgY29udGVudF92aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6ICdzaGFkb3dSYWRpdXMnLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICt2YWx1ZTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd1JhZGl1c1Byb3BlcnR5LnJlZ2lzdGVyKENhcmRWaWV3Q29tbW9uKTtcbmV4cG9ydHMuc2hhZG93T2Zmc2V0V2lkdGhQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd09mZnNldFdpZHRoJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5LnJlZ2lzdGVyKENhcmRWaWV3Q29tbW9uKTtcbmV4cG9ydHMuc2hhZG93T2Zmc2V0SGVpZ2h0UHJvcGVydHkgPSBuZXcgY29udGVudF92aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6ICdzaGFkb3dPZmZzZXRIZWlnaHQnLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICt2YWx1ZTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd09mZnNldEhlaWdodFByb3BlcnR5LnJlZ2lzdGVyKENhcmRWaWV3Q29tbW9uKTtcbmV4cG9ydHMuc2hhZG93Q29sb3JQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd0NvbG9yJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBuZXcgY29sb3JfMS5Db2xvcih2YWx1ZSk7IH1cbn0pO1xuZXhwb3J0cy5zaGFkb3dDb2xvclByb3BlcnR5LnJlZ2lzdGVyKENhcmRWaWV3Q29tbW9uKTtcbmV4cG9ydHMuc2hhZG93T3BhY2l0eVByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93T3BhY2l0eScsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93T3BhY2l0eVByb3BlcnR5LnJlZ2lzdGVyKENhcmRWaWV3Q29tbW9uKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKTtcbnZhciBjYXJkdmlld19jb21tb25fMSA9IHJlcXVpcmUoXCIuL2NhcmR2aWV3LWNvbW1vblwiKTtcbnZhciBDYXJkVmlld05hbWVzcGFjZSA9IHVzZUFuZHJvaWRYKCkgPyBnbG9iYWwuYW5kcm9pZHguY2FyZHZpZXcud2lkZ2V0IDogYW5kcm9pZC5zdXBwb3J0LnY3LndpZGdldDtcbnZhciBBcHBDb21wYXRSZXNvdXJjZXNOYW1lc3BhY2UgPSB1c2VBbmRyb2lkWCgpID8gJ2FuZHJvaWR4LmFwcGNvbXBhdCcgOiAnYW5kcm9pZC5zdXBwb3J0LnY3LmFwcGNvbXBhdCc7XG5mdW5jdGlvbiB1c2VBbmRyb2lkWCgpIHtcbiAgICByZXR1cm4gZ2xvYmFsLmFuZHJvaWR4ICYmIGdsb2JhbC5hbmRyb2lkeC5jYXJkdmlldztcbn1cbnZhciBDYXJkVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENhcmRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhcmRWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXJkVmlldy5wcm90b3R5cGUsIFwiYW5kcm9pZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlVmlldztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlW2NhcmR2aWV3X2NvbW1vbl8xLnJhZGl1c1Byb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldFJhZGl1cyh2YWx1ZSk7XG4gICAgfTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEuZWxldmF0aW9uUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2FyZEVsZXZhdGlvbih2YWx1ZSk7XG4gICAgfTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEucmlwcGxlUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2xpY2thYmxlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZXNVcmkgPSBBcHBDb21wYXRSZXNvdXJjZXNOYW1lc3BhY2UgKyAnLlIkYXR0cic7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IGphdmEubGFuZy5DbGFzcy5mb3JOYW1lKHJlc291cmNlc1VyaSk7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBhdHRyLmdldEZpZWxkKCdzZWxlY3RhYmxlSXRlbUJhY2tncm91bmQnKTtcbiAgICAgICAgICAgIGlmIChmaWVsZCAmJiBhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT04uU0RLX0lOVCA+PSAyMykge1xuICAgICAgICAgICAgICAgIHZhciByZXNJZCA9IGZpZWxkLmdldEludChudWxsKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSBBcnJheS5jcmVhdGUoJ2ludCcsIDEpO1xuICAgICAgICAgICAgICAgIGF0dHJzWzBdID0gcmVzSWQ7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5ID0gYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHk7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGVkVmFsdWUgPSBhY3Rpdml0eS5vYnRhaW5TdHlsZWRBdHRyaWJ1dGVzKGF0dHJzKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtRHJhd2FibGUgPSB0eXBlZFZhbHVlLmdldERyYXdhYmxlKDApO1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRGb3JlZ3JvdW5kKHNlbGVjdGVkSXRlbURyYXdhYmxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2xpY2thYmxlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGUuY3JlYXRlTmF0aXZlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYXJkVmlld05hbWVzcGFjZS5DYXJkVmlldyh0aGlzLl9jb250ZXh0KTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZS5pbml0TmF0aXZlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fYW5kcm9pZFZpZXdJZCA9IGFuZHJvaWQudmlldy5WaWV3LmdlbmVyYXRlVmlld0lkKCk7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRJZCh0aGlzLl9hbmRyb2lkVmlld0lkKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2FyZEJhY2tncm91bmRDb2xvcih2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUuYW5kcm9pZCA6IG5ldyBjb2xvcl8xLkNvbG9yKCcjRkZGRkZGJykuYW5kcm9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF0aXZlU2NyaXB0LUNhcmR2aWV3IC0tLSBpbnZhbGlkIGJhY2tncm91bmQtY29sb3IgdmFsdWUgJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldENhcmRCYWNrZ3JvdW5kQ29sb3IobmV3IGNvbG9yXzEuQ29sb3IodmFsdWUuY29sb3IgIT09IHVuZGVmaW5lZCA/IHZhbHVlLmNvbG9yICsgJycgOiAnI0ZGRkZGRicpLmFuZHJvaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdGl2ZVNjcmlwdC1DYXJkdmlldyAtLS0gaW52YWxpZCBiYWNrZ3JvdW5kLWNvbG9yIHZhbHVlOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhcmRWaWV3O1xufShjYXJkdmlld19jb21tb25fMS5DYXJkVmlld0NvbW1vbikpO1xuZXhwb3J0cy5DYXJkVmlldyA9IENhcmRWaWV3O1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2FsaWRhQ29tcG9uZW50IH0gZnJvbSAnLi9zYWxpZGEuY29tcG9uZW50JztcbmltcG9ydCB7IFNhbGlkYVZlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zYWxpZGEudmVyLm1vZGFsLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBTYWxpZGFDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3ZlclNhbGlkYScsXG4gICAgICAgIGNvbXBvbmVudDogU2FsaWRhVmVyTW9kYWxDb21wb25lbnRcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNhbGlkYVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiQWN0aW9uQmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5pbnB1dCB7XFxuICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uc2l0ZS10ZW1wbGF0ZS1pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDA7XFxuICBtYXJnaW46IDggMTY7XFxuICB3aWR0aDogNjA7XFxuICBoZWlnaHQ6IDYwO1xcbn1cXG5cXG4uc2l0ZS10ZW1wbGF0ZS10aXRsZSB7XFxuICBtYXJnaW46IDAgMCA2IDA7XFxuICBmb250LXNpemU6IDE4O1xcbn1cXG5cXG4uc2l0ZS10ZW1wbGF0ZS1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4ubWFya1ZpZXdTdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgcGFkZGluZzogMTY7XFxufVxcblxcbi5kZWxldGVWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMTY7XFxufVxcblxcbi5ncmlkTGF5b3V0TGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFya1ZpZXdTdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNjtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbn1cXG5cXG4uc3dpcGVUZW1wbGF0ZUxhYmVsIHtcXG4gIHNpemU6IDIwO1xcbn1cXG5cXG4uZGVsZXRlVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmctbGVmdDogMTY7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG59XFxuXFxuLmxpc3RJdGVtU3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7XFxufVxcblxcbi5pdGVtLW5hbWUge1xcbiAgY29sb3I6ICMzMDNjNDc7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdPcGVuU2Fucy1Cb2xkJztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMjtcXG59XFxuXFxuLm1lc3NhZ2VzRXJyb3Ige1xcbiAgZm9udC1zaXplOiAxODtcXG4gIGNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZXNzYWdlc09rIHtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0X3JvIHtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIlxcbiAgICBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIlxcbiAgICAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8QWN0aW9uSXRlbVxcbiAgICBpY29uPVxcXCJyZXM6Ly9uYXZpZ2F0aW9uL21lbnVcXFwiXFxuICAgIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIlxcbiAgICAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIlxcbiAgPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgdGV4dD1cXFwiVmVyIFBpY2tpbmdcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicG9wdXBcXFwiXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICAodGFwKT1cXFwib25WZXJQaWNraW5nQnV0dG9uVGFwKClcXFwiXFxuICA+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8QWN0aW9uSXRlbVxcbiAgICB0ZXh0PVxcXCJGaW5hbGl6YXIgU2FsaWRhXFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uRmluYWxpemFyUGlja2luZ0J1dHRvblRhcCgpXFxcIlxcbiAgPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgdGV4dD1cXFwiQ2FuY2VsYXIgU2FsaWRhXFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uQ2FuY2VsYXJQaWNraW5nQnV0dG9uVGFwKClcXFwiXFxuICA+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIlNhbGlkYVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gIDxTY3JvbGxWaWV3PlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLGF1dG8sYXV0byxhdXRvLGF1dG8sYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCpcXFwiPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgY29sU3Bhbj1cXFwiMlxcXCJcXG4gICAgICAgIFtuZ0NsYXNzXT1cXFwibWVzc2FnZXNTdHlsZVxcXCJcXG4gICAgICAgIHRleHQ9XFxcInt7IG1lc3NhZ2UgfX1cXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI2xvdGVOYW1lVEZcXG4gICAgICAgIHJvdz1cXFwiMVxcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGlkPVxcXCJsb3RlTmFtZVRGXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcImxvdGVOYW1lXFxcIlxcbiAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJhbGxjaGFyYWN0ZXJzXFxcIlxcbiAgICAgICAgaGludD1cXFwiRXNjYW5lZSBlbCBzZXJpYWxcXFwiXFxuICAgICAgICAodGV4dENoYW5nZSk9XFxcIm9uVGV4dExvdGVDaGFuZ2UoJGV2ZW50KVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRWaWV3XFxuICAgICAgICAjbG9jYXRpb25OYW1lU0xURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiMVxcXCJcXG4gICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIlNlcmlhbCBBY3R1YWxcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcImxvdGVOYW1lU0xcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dFZpZXc+XFxuXFxuICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIHRleHQ9XFxcIk51ZXZhIENhbnRpZGFkICpcXFwiPjwvTGFiZWw+XFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI3Byb2R1Y3RRdHlURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiMlxcXCJcXG4gICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkRpZ2l0ZSBsYSBjYW50aWRhZFxcXCJcXG4gICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0UXR5TmV3XFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIG5nRGVmYXVsdENvbnRyb2xcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI3Byb2R1Y3RVbml0VEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjNcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBoaW50PVxcXCJVbmlkYWQgZGVsIFByb2R1Y3RvXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0VW5pdFxcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNwcm9kdWN0Q3VycmVudFF0eVRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIzXFxcIlxcbiAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiQ2FudGlkYWQgQWN0dWFsXFxcIlxcbiAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3RRdHlcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdExvdFRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCI0XFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiTG90ZSAvIFNlcmlhbFxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdExvdFxcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNwcm9kdWN0TG9jVEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjRcXFwiXFxuICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBoaW50PVxcXCJVYmljYWNpw7NuIGRlbCBMb3RlXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0TG9jXFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRWaWV3XFxuICAgICAgICAjcHJvZHVjdE5hbWVURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiNVxcXCJcXG4gICAgICAgIGNvbFNwYW49XFxcIjJcXFwiXFxuICAgICAgICBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTVweFxcXCJcXG4gICAgICAgIGhlaWdodD1cXFwiMTAwcHhcXFwiXFxuICAgICAgICBoaW50PVxcXCJOb21icmUgZGVsIFByb2R1Y3RvXFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0TmFtZVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGJvcmRlckNvbG9yPVxcXCIjREVERURFXFxcIlxcbiAgICAgICAgYm9yZGVyV2lkdGg9XFxcIjFcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dFZpZXc+XFxuXFxuICAgICAgPEJ1dHRvblxcbiAgICAgICAgcm93PVxcXCI2XFxcIlxcbiAgICAgICAgY29sU3Bhbj1cXFwiMlxcXCJcXG4gICAgICAgIHRleHQ9XFxcIkFjZXB0YXJcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICAgKHRhcCk9XFxcIm9uU2F2ZUJ1dHRvblRhcCgpXFxcIlxcbiAgICAgID48L0J1dHRvbj5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbiAgPEFjdGl2aXR5SW5kaWNhdG9yXFxuICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgW2J1c3ldPVxcXCJpc0xvYWRpbmdcXFwiXFxuICA+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gIDxPZmZsaW5lTm90aWZpY2F0aW9uPjwvT2ZmbGluZU5vdGlmaWNhdGlvbj5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL25vdGUubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jb250ZW8uc2VydmljZSc7XG5pbXBvcnQgeyBRdWFudCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9xdWFudCc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgU2FsaWRhTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NhbGlkYS5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTYWxpZGEnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FsaWRhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2FsaWRhLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTYWxpZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIG5vdGVzQXJyYXk6IEFycmF5PE5vdGU+O1xuICBwcm9jZXNvSWQ6IG51bWJlcjtcbiAgcHJvZHVjdE5hbWU6IHN0cmluZztcbiAgcHJvZHVjdFF0eU5ldzogbnVtYmVyO1xuICBwcm9kdWN0UXR5OiBudW1iZXI7XG4gIHByb2R1Y3RVbml0OiBzdHJpbmc7XG4gIHByb2R1Y3RMb2M6IHN0cmluZztcbiAgcHJvZHVjdExvdDogc3RyaW5nO1xuICBsb2NhdGlvbk5hbWU6IHN0cmluZztcbiAgbG90ZU5hbWU6IHN0cmluZztcbiAgbG90ZU5hbWVTTDogc3RyaW5nO1xuICBpbnZlbnRvcnlOYW1lOiBzdHJpbmc7XG5cbiAgbG90ZVNlbGVjdGVkOiBRdWFudDtcbiAgbG90ZVNlbGVjdGVkQXJyYXk6IEFycmF5PFF1YW50PjtcblxuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG1lc3NhZ2VzU3R5bGU6IHN0cmluZztcblxuICBib2RlZ2FTYWxpZGE6IGFueTtcblxuICBAVmlld0NoaWxkKCdsb3RlTmFtZVRGJywgeyBzdGF0aWM6IGZhbHNlIH0pIGxvdGVOYW1lVEY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250ZW9TZXJ2aWNlOiBDb250ZW9TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZ2V0Qm9kZWdhU2FsaWRhKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RRdHlOZXcgPSAwO1xuICAgIHRoaXMubG9jYXRpb25OYW1lID0gbnVsbDtcbiAgICB0aGlzLmxvdGVTZWxlY3RlZCA9IG5ldyBRdWFudCgpO1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc09rJztcbiAgICB0aGlzLmxvdGVTZWxlY3RlZEFycmF5ID0gbmV3IEFycmF5PFF1YW50PigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb3RlTmFtZVRGLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9LCA2MDApO1xuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgb25WZXJQaWNraW5nQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmNSZWYsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHJ1dGE6ICd2ZXJTYWxpZGEnLFxuICAgICAgICBsb3RlU2VsZWN0ZWRBcnJheTogdGhpcy5sb3RlU2VsZWN0ZWRBcnJheVxuICAgICAgfSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlXG4gICAgICAuc2hvd01vZGFsKFNhbGlkYU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgLnRoZW4oKHJlc3VsdDogQXJyYXk8UXVhbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMubG90ZVNlbGVjdGVkQXJyYXkgPSByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRmluYWxpemFyUGlja2luZ0J1dHRvblRhcCgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIGlmICh0aGlzLmxvdGVTZWxlY3RlZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubG90ZU5hbWUgPSBudWxsO1xuICAgICAgdGhpcy5jbGVhckZpZWxkcygpO1xuICAgICAgY29uc3Qgc2VsZiA9IG5ldyBXZWFrUmVmKHRoaXMpLmdldCgpO1xuICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6ICdGaW5hbGl6YXIgU2FsaWRhJyxcbiAgICAgICAgbWVzc2FnZTogJ8K/Q29uZmlybWEgbGEgb3BlcmFjacOzbj8nLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdTaScsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObydcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgc2VsZi5maW5hbGl6YXJTYWxpZGEoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnTm8gaGEgc2VsZWNpb25hZG8gbmluZ3VuIGxvdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbGFyUGlja2luZ0J1dHRvblRhcChpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgIHRpdGxlOiAnQ2FuY2VsYXIgU2FsaWRhJyxcbiAgICAgIG1lc3NhZ2U6ICfCv0NvbmZpcm1hIGxhIG9wZXJhY2nDs24/JyxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ1NpJyxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObydcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgc2VsZi5sb3RlU2VsZWN0ZWRBcnJheSA9IG5ldyBBcnJheTxRdWFudD4oKTtcbiAgICAgICAgc2VsZi5jbGVhckZpZWxkcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25UZXh0TG90ZUNoYW5nZShhcmdzKSB7XG4gICAgY29uc3QgY29kZTogc3RyaW5nID0gYXJncy5vYmplY3RbJ3RleHQnXTtcbiAgICBpZiAoY29kZSAmJiBjb2RlLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgIC8vQ0FNQklPIEJVU1FVRURBIDIwMjEtMDMtMDEgIFEgPj4gICBTXG4gICAgICBpZiAoY29kZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSAhPT0gJ1MnKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnU2VyaWFsIG5vIGV4aXN0ZScpO1xuICAgICAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGVhckZpZWxkcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaWQgPSBjb2RlLnN1YnN0cmluZygxKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAvL0NBTUJJTyBCVVNRVUVEQSAyMDIxLTAzLTAxICBnZXRMb3RlKCtpZCkgPj4gICBnZXRMb3RCeU5hbWUoY29kZSlcbiAgICAgICAgdGhpcy5jb250ZW9TZXJ2aWNlLmdldExvdEJ5TmFtZShjb2RlKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5sb3RlU2VsZWN0ZWQgPSByZXNwb25zZS5yZXN1bHQucmVjb3Jkc1swXTtcbiAgICAgICAgICAgIHRoaXMubG90ZVNlbGVjdGVkLmxvdGVOYW1lID0gdGhpcy5sb3RlTmFtZTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSB0aGlzLmxvdGVTZWxlY3RlZC5wcm9kdWN0X2lkWzFdO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0UXR5ID0gdGhpcy5sb3RlU2VsZWN0ZWQucXVhbnRpdHk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RVbml0ID0gdGhpcy5sb3RlU2VsZWN0ZWQucHJvZHVjdF91b21faWRbMV07XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMb2MgPSB0aGlzLmxvdGVTZWxlY3RlZC5sb2NhdGlvbl9pZFsxXTtcbiAgICAgICAgICAgIC8vdGhpcy5wcm9kdWN0TG90ID0gdGhpcy5sb3RlU2VsZWN0ZWQubG90X2lkWzFdO1xuICAgICAgICAgICAgLy9DYW1iaW8gcGFyYSBwb2JsYXIgZWwgY2FtcG8gaW5mZXJpb3IgZGUgbG90ZSwgZGViZSBxdWVkYXIgaWd1YWwgYWwgc2VyaWFsIGVzY2FuZWFkbyBzZWxmLmxvdGVTZWxlY3RlZC5sb3RfaWRbMV0gPj4gIHNlbGYubG90ZU5hbWU7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMb3QgPSB0aGlzLmxvdGVOYW1lO1xuICAgICAgICAgICAgdGhpcy5sb3RlTmFtZVNMID0gdGhpcy5sb3RlTmFtZTtcblxuICAgICAgICAgICAgdGhpcy5sb3RlTmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RRdHlOZXcgPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmxvdGVTZWxlY3RlZEFycmF5LmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsLmlkID09PSB0aGlzLmxvdGVTZWxlY3RlZC5pZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdTZXJpYWwgeWEgaGEgc2lkbyBhZ3JlZ2FkbycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93T2tNZXNzYWdlKCdTZXJpYWwgZW5jb250cmFkbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoJ1NlcmlhbCBubyBleGlzdGUnKTtcbiAgICAgICAgICAgIHRoaXMubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TYXZlQnV0dG9uVGFwKCkge1xuICAgIGlmICgrdGhpcy5wcm9kdWN0UXR5TmV3IDw9IDApIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnTGEgY2FudGlkYWQgZXMgb2JsaWdhdG9yaWEnKTtcbiAgICB9IGVsc2UgaWYgKCt0aGlzLnByb2R1Y3RRdHlOZXcgPiB0aGlzLmxvdGVTZWxlY3RlZC5xdWFudGl0eSkge1xuICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdMYSBjYW50aWRhZCBlcyBtYXlvciBhIGxhIGRpc3BvbmlibGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5sb3RlU2VsZWN0ZWRBcnJheS5maWx0ZXIoKGVsKSA9PiBlbC5pZCA9PT0gdGhpcy5sb3RlU2VsZWN0ZWQuaWQpO1xuICAgICAgaWYgKGZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnU2VyaWFsIHlhIGhhIHNpZG8gYWdyZWdhZG8nKTtcbiAgICAgICAgdGhpcy5sb3RlTmFtZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvdGVTZWxlY3RlZC5xdWFudGl0eSA9IHRoaXMucHJvZHVjdFF0eU5ldztcbiAgICAgICAgdGhpcy5sb3RlU2VsZWN0ZWRBcnJheS5wdXNoKHRoaXMubG90ZVNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5zaG93T2tNZXNzYWdlKCdTZXJpYWwgYWdyZWdhZG8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgdGl0bGU6ICdNSCBNw7N2aWwnLFxuICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0Vycm9yTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc0Vycm9yJztcbiAgfVxuXG4gIHNob3dPa01lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm1lc3NhZ2VzU3R5bGUgPSAnbWVzc2FnZXNPayc7XG4gIH1cblxuICBjbGVhckZpZWxkcygpOiB2b2lkIHtcbiAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLmxvdGVTZWxlY3RlZCA9IG5ldyBRdWFudCgpO1xuICAgIHRoaXMucHJvZHVjdFF0eSA9IDA7XG4gICAgdGhpcy5wcm9kdWN0UXR5TmV3ID0gMDtcbiAgICB0aGlzLnByb2R1Y3ROYW1lID0gbnVsbDtcbiAgICB0aGlzLnByb2R1Y3RVbml0ID0gbnVsbDtcbiAgICB0aGlzLnByb2R1Y3RMb2MgPSBudWxsO1xuICAgIHRoaXMucHJvZHVjdExvdCA9IG51bGw7XG4gICAgdGhpcy5sb3RlTmFtZVNMID0gbnVsbDtcbiAgICB0aGlzLmxvdGVOYW1lVEYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0Qm9kZWdhU2FsaWRhKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRCb2RlZ2FTYWxpZGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYm9kZWdhU2FsaWRhID0gcmVzcG9uc2UucmVzdWx0LnJlY29yZHNbMF07XG4gICAgfSk7XG4gIH1cblxuICBmaW5hbGl6YXJTYWxpZGEoKTogdm9pZCB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuYm9kZWdhU2FsaWRhLmRlZmF1bHRfbG9jYXRpb25fZGVzdF9pZCkpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMzOiBhbnkgPSB7XG4gICAgICAgIHRpdGxlOiAnRmluYWxpemFyIFNhbGlkYScsXG4gICAgICAgIG1lc3NhZ2U6ICdObyBlc3TDoSBjb25maWd1cmFkYSB1bmEgYm9kZWdhIScsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ0FjZXB0YXInXG4gICAgICB9O1xuXG4gICAgICBhbGVydChvcHRpb25zMyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGZvciAoY29uc3QgbHMgb2YgdGhpcy5sb3RlU2VsZWN0ZWRBcnJheSkge1xuICAgICAgdGhpcy5jb250ZW9TZXJ2aWNlLmdldFBhcmVudHNTdG9ja0xvY2F0aW9uKFsrbHMubG9jYXRpb25faWRbMF1dKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0UGFyZW50cyA9IHJlc3BvbnNlLnJlc3VsdC5yZWNvcmRzO1xuICAgICAgICBjb25zdCBsbyA9IHJlc3VsdFBhcmVudHNbMF07XG4gICAgICAgIHRoaXMuY29udGVvU2VydmljZS5jcmVhdGVQaWNraW5nKFxuICAgICAgICAgIGxvLmxvY2F0aW9uX2lkWzBdLFxuICAgICAgICAgIHNlbGYuYm9kZWdhU2FsaWRhLmRlZmF1bHRfbG9jYXRpb25fZGVzdF9pZFswXSxcbiAgICAgICAgICBzZWxmLmJvZGVnYVNhbGlkYS5pZClcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTI6IGFueSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tpbmdJZCA9IHJlc3BvbnNlMi5yZXN1bHQ7XG4gICAgICAgICAgICBzZWxmLmNvbnRlb1NlcnZpY2VcbiAgICAgICAgICAgICAgLmNyZWF0ZVBpY2tpbmdEZXRhaWwoXG4gICAgICAgICAgICAgICAgcGlja2luZ0lkLFxuICAgICAgICAgICAgICAgIHNlbGYuYm9kZWdhU2FsaWRhLmRlZmF1bHRfbG9jYXRpb25fZGVzdF9pZFswXSxcbiAgICAgICAgICAgICAgICBscy5wcm9kdWN0X2lkWzBdLFxuICAgICAgICAgICAgICAgIGxzLmxvY2F0aW9uX2lkWzBdLFxuICAgICAgICAgICAgICAgIC8vIENBTUJJTyBMT1RfSURbMF0gUE9SIElEXG4gICAgICAgICAgICAgICAgLy9scy5sb3RfaWRbMF0sXG4gICAgICAgICAgICAgICAgbHMuaWQsXG4gICAgICAgICAgICAgICAgbHMucXVhbnRpdHksXG4gICAgICAgICAgICAgICAgbHMucHJvZHVjdF91b21faWRbMF0sXG4gICAgICAgICAgICAgICAgbHMucHJvZHVjdF9pZFsxXSxcbiAgICAgICAgICAgICAgICBzZWxmLmJvZGVnYVNhbGlkYS5pZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkQXJyYXkgPSBzZWxmLmxvdGVTZWxlY3RlZEFycmF5XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5pZCAhPT0gbHMuaWQpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb3RlU2VsZWN0ZWRBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpbmFsaXphciBTYWxpZGEnLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQcm9jZXNvIENvbXBsZXRhZG8hJyxcbiAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdBY2VwdGFyJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyRmllbGRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQob3B0aW9uczIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTYWxpZGFNb2RhbENvbXBvbmVudE9wdGlvbnMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FsaWRhLm1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWxpZGFNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBfYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX3BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt0aGlzLl9wYXJhbXMuY29udGV4dC5ydXRhXSwge1xuICAgICAgcmVsYXRpdmVUbzogdGhpcy5fYWN0aXZlUm91dGVcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2FsaWRhUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2FsaWRhLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNhbGlkYUNvbXBvbmVudCB9IGZyb20gJy4vc2FsaWRhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWxpZGFNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2FsaWRhLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWxpZGFWZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2FsaWRhLnZlci5tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIFNhbGlkYVJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTYWxpZGFDb21wb25lbnQsXG4gICAgU2FsaWRhTW9kYWxDb21wb25lbnQsXG4gICAgU2FsaWRhVmVyTW9kYWxDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTYWxpZGFNb2RhbENvbXBvbmVudCwgU2FsaWRhVmVyTW9kYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNhbGlkYU1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBY3Rpb25CYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG5cXG4uY2FyZC1sYXlvdXQge1xcbiAgcGFkZGluZzogMjA7XFxufVxcblxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgKHRhcCk9XFxcIm9uQ2xvc2UoKVxcXCJcXG4gICAgaW9zLnN5c3RlbUljb249XFxcIjFcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgPjwvQWN0aW9uSXRlbT5cXG5cXG4gIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiVmVyIFBpY2tpbmdcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8Q2FyZFZpZXdcXG4gICAgICAgICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgbG90ZVNlbGVjdGVkQXJyYXlcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiY2FyZFxcXCJcXG4gICAgICAgIGVsZXZhdGlvbj1cXFwiNDBcXFwiXFxuICAgICAgICByYWRpdXM9XFxcIjEwXFxcIlxcbiAgICAgICAgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgW3RleHRdPVxcXCJpdGVtLmxvdF9pZFsxXVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgW3RleHRdPVxcXCJpdGVtLnByb2R1Y3RfaWRbMV1cXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICBbdGV4dF09XFxcIidDYW50aWRhZDonICsgaXRlbS5xdWFudGl0eVxcXCJcXG4gICAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICAgIDxCdXR0b25cXG4gICAgICAgICAgICB0ZXh0PVxcXCJFbGltaW5hclxcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwib25SZW1vdmVDYXJkQnV0dG9uVGFwKGl0ZW0uaWQpXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgICAgID48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9DYXJkVmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG4gIDxBY3Rpdml0eUluZGljYXRvclxcbiAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIFtidXN5XT1cXFwiaXNMb2FkaW5nXFxcIlxcbiAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICA8T2ZmbGluZU5vdGlmaWNhdGlvbj48L09mZmxpbmVOb3RpZmljYXRpb24+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgUXVhbnQgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvc3RvY2svcXVhbnQnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJy4uL0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5cbnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiBDYXJkVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NhbGlkYVZlck1vZGFsJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhbGlkYS52ZXIubW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYWxpZGEudmVyLm1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTYWxpZGFWZXJNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgbG90ZVNlbGVjdGVkQXJyYXk6IEFycmF5PFF1YW50PjtcblxuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG1lc3NhZ2VzU3R5bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zXG4gICkge1xuICAgIHRoaXMubG90ZVNlbGVjdGVkQXJyYXkgPSB0aGlzLl9wYXJhbXMuY29udGV4dC5sb3RlU2VsZWN0ZWRBcnJheTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc09rJztcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5sb3RlU2VsZWN0ZWRBcnJheSk7XG4gIH1cblxuICBvblJlbW92ZUNhcmRCdXR0b25UYXAoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHNlbGYgPSBuZXcgV2Vha1JlZih0aGlzKS5nZXQoKTtcblxuICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICB0aXRsZTogJ0ludmVudGFyaW9zJyxcbiAgICAgIG1lc3NhZ2U6ICfCv0NvbmZpcm1hIGxhIG9wZXJhY2nDs24/JyxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ1NpJyxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObydcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgc2VsZi5sb3RlU2VsZWN0ZWRBcnJheSA9IHNlbGYubG90ZVNlbGVjdGVkQXJyYXkuZmlsdGVyKChlbCkgPT4gZWwuaWQgIT09IGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFF1YW50IHtcbiAgaWQ6IG51bWJlcjtcbiAgbG90ZU5hbWU6IHN0cmluZztcbiAgbG9jYXRpb25faWQ6IEFycmF5PGFueT47XG4gIGxvdF9pZDogQXJyYXk8YW55PjtcbiAgcHJvZHVjdF9pZDogQXJyYXk8YW55PjtcbiAgcHJvZHVjdF91b21faWQ6IEFycmF5PGFueT47XG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIHByb2R1Y3RfcXR5OiBudW1iZXI7XG4gIGxpbmVJZDogbnVtYmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==