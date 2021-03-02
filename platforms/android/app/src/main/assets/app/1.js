(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

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

/***/ "./app/shared/model/stock/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLocation", function() { return StockLocation; });
var StockLocation = /** @class */ (function () {
    function StockLocation() {
    }
    return StockLocation;
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



/***/ }),

/***/ "./app/transferencia/picking.finalizar.modal.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.input {\n  font-size: 14;\n  margin-top: 10;\n}\n\n.site-template-image {\n  border-radius: 100;\n  margin: 8 16;\n  width: 60;\n  height: 60;\n}\n\n.site-template-title {\n  margin: 0 0 6 0;\n  font-size: 18;\n}\n\n.site-template-description {\n  font-size: 14;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding: 16;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding: 16;\n}\n\n.gridLayoutLayout {\n  background-color: white;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.swipeTemplateLabel {\n  size: 20;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.listItemStackLayout {\n  background-color: white;\n  padding-left: 5;\n}\n\n.item-name {\n  color: #303c47;\n  font-family: 'Open Sans', 'OpenSans-Bold';\n  font-weight: bold;\n  padding: 2;\n}\n\n.messagesError {\n  font-size: 14;\n  color: red;\n  text-align: center;\n}\n\n.messagesOk {\n  font-size: 14;\n  color: blue;\n  text-align: center;\n}\n\n.input_ro {\n  font-size: 18;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/transferencia/picking.finalizar.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <ActionItem\n    (tap)=\"onClose()\"\n    ios.systemIcon=\"1\"\n    ios.position=\"right\"\n    android.systemIcon=\"ic_menu_back\"\n  ></ActionItem>\n\n  <Label class=\"action-bar-title\" text=\"Finalizar Picking\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView>\n    <GridLayout rows=\"auto,auto,auto,auto,auto,auto,auto,auto\" columns=\"*\">\n      <Label\n        row=\"0\"\n        [ngClass]=\"messagesStyle\"\n        text=\"{{ message }}\"\n      ></Label>\n\n      <TextField\n        #loteNameTF\n        row=\"1\"\n        col=\"0\"\n        id=\"loteNameTF\"\n        [(ngModel)]=\"loteName\"\n        textWrap=\"true\"\n        class=\"input\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"allcharacters\"\n        hint=\"Escanee el serial\"\n        (textChange)=\"onTextLoteChange($event)\"\n      ></TextField>\n\n      <Label row=\"2\" col=\"0\" class=\"input\" text=\"Ubicación a Transferir\"></Label>\n      <TextField\n        #productLocTF=\"ngModel\"\n        row=\"3\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Ubicación a Transferir\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"locationSelected.display_name\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <Label row=\"4\" col=\"0\" class=\"input\" text=\"Serial Actual\"></Label>\n      <TextField\n        #productLocTF=\"ngModel\"\n        row=\"5\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Serial Actual\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"loteSelected.loteName\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <Label row=\"6\" col=\"0\" class=\"input\" text=\"Nombre del Producto\"></Label>\n      <TextView\n        #productNameTF=\"ngModel\"\n        row=\"7\"\n        col=\"0\"\n        style=\"margin-top: 15px\"\n        height=\"120px\"\n        hint=\"Nombre del Producto\"\n        returnKeyType=\"next\"\n        [(ngModel)]=\"productName\"\n        class=\"input\"\n        borderColor=\"#DEDEDE\"\n        borderWidth=\"1\"\n        editable=\"false\"\n      ></TextView>\n    </GridLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/transferencia/picking.finalizar.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickingFinalizarModalComponent", function() { return PickingFinalizarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/model/stock/quant.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_model_stock_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/model/stock/location.ts");
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/services/conteo.service.ts");






var PickingFinalizarModalComponent = /** @class */ (function () {
    function PickingFinalizarModalComponent(_params, conteoService) {
        this._params = _params;
        this.conteoService = conteoService;
        this.loteSelectedArray = this._params.context.loteSelectedArray;
        this.lotePickingArray = new Array();
        this.locationSelected = new _shared_model_stock_location__WEBPACK_IMPORTED_MODULE_4__["StockLocation"]();
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__["Quant"]();
    }
    PickingFinalizarModalComponent.prototype.ngOnInit = function () {
        this.messagesStyle = 'messagesOk';
    };
    PickingFinalizarModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loteNameTF.nativeElement.focus();
        }, 600);
    };
    PickingFinalizarModalComponent.prototype.onClose = function () {
        var _this = this;
        if (this.loteSelectedArray.length > 0) {
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["confirm"]({
                title: 'Finalizar Picking',
                message: 'Todavía existen lotes sin transferir. Desar terminar la operación?',
                okButtonText: 'Si',
                cancelButtonText: 'No'
            }).then(function (result) {
                if (result) {
                    _this._params.closeCallback(_this.loteSelectedArray);
                }
            });
        }
        else {
            this._params.closeCallback(this.loteSelectedArray);
        }
    };
    PickingFinalizarModalComponent.prototype.onTextLoteChange = function (args) {
        var _this = this;
        var code = args.object['text'];
        var self = new WeakRef(this).get();
        if (code && code.length === 11) {
            if (code.substring(0, 1).toUpperCase() === 'X') {
                var id = code.substring(1);
                this.searchLocation(+id);
            }
            else {
                if (self.locationSelected.id == null) {
                    self.showErrorMessage('Debe seleccionar primero una ubicación');
                    self.clearFields();
                }
                else {
                    var id = code.substring(1);
                    self.isLoading = true;
                    //CAMBIO BUSQUEDA 2021-03-01  getLote(+id) >>   getLotByName(code)
                    this.conteoService.getLotByName(code).subscribe(function (response) {
                        self.isLoading = false;
                        if (response.result.length > 0) {
                            self.loteSelected = response.result.records[0];
                            self.loteSelected.loteName = self.loteName;
                            //self.productLot = self.loteSelected.lot_id[1];
                            //Cambio para poblar el campo inferior de lote, debe quedar igual al serial escaneado self.loteSelected.lot_id[1] >>  self.loteName;
                            self.productLot = self.loteName;
                            self.productName = self.loteSelected.product_id[1];
                            var filter = _this.lotePickingArray.filter(function (el) { return el.id === _this.loteSelected.id; });
                            if (filter.length > 0) {
                                self.showErrorMessage('El lote ya fue leido');
                                self.loteName = null;
                            }
                            else {
                                self.showOkMessage('Serial encontrado');
                                self.loteName = null;
                                self.lotePickingArray.push(self.loteSelected);
                                if (self.lotePickingArray.length === self.loteSelectedArray.length) {
                                    self.transferAction(true);
                                }
                            }
                        }
                        else {
                            self.showOkMessage('Serial no existe');
                            self.loteName = null;
                            self.clearFields();
                        }
                    });
                }
            }
        }
    };
    PickingFinalizarModalComponent.prototype.searchLocation = function (id) {
        var _this = this;
        var self = new WeakRef(this).get();
        this.isLoading = true;
        this.conteoService.getStockLocation(id).subscribe(function (response) {
            self.isLoading = false;
            if (response.result.length > 0) {
                self.locationSelected = response.result.records[0];
                if (!Array.isArray(self.locationSelected.location_id)) {
                    self.showErrorMessage('La ubicación no tiene asociada un padre!');
                    self.clearFields();
                    return;
                }
                self.showOkMessage('Ubicación encontrada');
                _this.loteName = null;
                if (_this.lotePickingArray.length > 0) {
                    self.transferAction(false);
                }
            }
            else {
                self.showErrorMessage('No existe ubicación');
                self.clearFields();
            }
        });
    };
    PickingFinalizarModalComponent.prototype.transferAction = function (validate) {
        var _this = this;
        var self = new WeakRef(this).get();
        var filter = this.loteSelectedArray.filter(function (el) { return el.id === _this.loteSelected.id; });
        if (filter.length === 0 && validate) {
            this.showErrorMessage('El lote no está en el picking');
        }
        else {
            var _loop_1 = function (ls) {
                this_1.isLoading = true;
                this_1.conteoService.getParentsStockLocation([+ls.location_id[0]]).subscribe(function (response) {
                    self.isLoading = false;
                    var resultParents = response.result.records;
                    _this.conteoService.createPicking(resultParents[0].location_id[0], self.locationSelected.location_id[0], 5)
                        .subscribe(function (response2) {
                        if (!response2.result) {
                            _this.showErrorMessage('Error al guardar la cabecera!');
                            return;
                        }
                        var pickingId = response2.result;
                        self.conteoService
                            .createPickingDetail(pickingId, self.locationSelected.id, self.loteSelected.product_id[0], self.loteSelected.location_id[0], 
                        // CAMBIO LOT_ID[0] POR ID
                        //self.loteSelected.lot_id[0],
                        self.loteSelected.id, self.loteSelected.quantity, self.loteSelected.product_uom_id[0], self.loteSelected.product_id[1], 5)
                            .subscribe(function (response3) {
                            if (response3.result) {
                                self.lotePickingArray = self.lotePickingArray
                                    .filter(function (el) { return el.id !== ls.id; });
                                self.loteSelectedArray = self.loteSelectedArray
                                    .filter(function (el) { return el.id !== ls.id; });
                                if (self.loteSelectedArray.length === 0) {
                                    var options2 = {
                                        title: 'Finalizar Picking',
                                        message: 'No existen mas productos!',
                                        okButtonText: 'Aceptar'
                                    };
                                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"](options2).then(function () {
                                        self._params.closeCallback(self.loteSelectedArray);
                                    });
                                }
                            }
                            else {
                                _this.showErrorMessage('Error al guardar la detalle!');
                            }
                        });
                    });
                });
            };
            var this_1 = this;
            for (var _i = 0, _a = this.lotePickingArray; _i < _a.length; _i++) {
                var ls = _a[_i];
                _loop_1(ls);
            }
        }
    };
    PickingFinalizarModalComponent.prototype.showErrorMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesError';
    };
    PickingFinalizarModalComponent.prototype.showOkMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesOk';
    };
    PickingFinalizarModalComponent.prototype.clearFields = function () {
        this.loteName = null;
        this.productLot = null;
        this.productName = null;
        this.loteNameTF.nativeElement.focus();
    };
    PickingFinalizarModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"] },
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_5__["ConteoService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loteNameTF', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PickingFinalizarModalComponent.prototype, "loteNameTF", void 0);
    PickingFinalizarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'PickingFinalizarModal',
            template: __importDefault(__webpack_require__("./app/transferencia/picking.finalizar.modal.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/transferencia/picking.finalizar.modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"],
            _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_5__["ConteoService"]])
    ], PickingFinalizarModalComponent);
    return PickingFinalizarModalComponent;
}());



/***/ }),

/***/ "./app/transferencia/picking.ver.modal.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.card {\n  background-color: #fff;\n  color: #4d4d4d;\n  margin: 15 15 0;\n}\n\n.card-layout {\n  padding: 20;\n}\n\n.card-layout .h1 {\n  margin-bottom: 15;\n}\n"

/***/ }),

/***/ "./app/transferencia/picking.ver.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <ActionItem\n    (tap)=\"onClose()\"\n    ios.systemIcon=\"1\"\n    ios.position=\"right\"\n    android.systemIcon=\"ic_menu_back\"\n  ></ActionItem>\n\n  <Label class=\"action-bar-title\" text=\"Ver Picking\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <CardView\n        *ngFor=\"let item of loteSelectedArray\"\n        class=\"card\"\n        elevation=\"40\"\n        radius=\"10\"\n        ios:shadowRadius=\"3\"\n      >\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h3\" [text]=\"item.lot_id[1]\"></Label>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.product_id[1]\"\n          ></Label>\n          <Button\n            text=\"Eliminar\"\n            (tap)=\"onRemoveCardButtonTap(item.id)\"\n            class=\"btn btn-primary\"\n          ></Button>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/transferencia/picking.ver.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickingVerModalComponent", function() { return PickingVerModalComponent; });
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
var PickingVerModalComponent = /** @class */ (function () {
    function PickingVerModalComponent(_params) {
        this._params = _params;
        this.loteSelectedArray = this._params.context.loteSelectedArray;
    }
    PickingVerModalComponent.prototype.ngOnInit = function () {
        this.messagesStyle = 'messagesOk';
    };
    PickingVerModalComponent.prototype.onClose = function () {
        this._params.closeCallback(this.loteSelectedArray);
    };
    PickingVerModalComponent.prototype.onRemoveCardButtonTap = function (id) {
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
    PickingVerModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"] }
    ]; };
    PickingVerModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'PickingVerModal',
            template: __importDefault(__webpack_require__("./app/transferencia/picking.ver.modal.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/transferencia/picking.ver.modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], PickingVerModalComponent);
    return PickingVerModalComponent;
}());



/***/ }),

/***/ "./app/transferencia/transferencia-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaRoutingModule", function() { return TransferenciaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transferencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/transferencia/transferencia.component.ts");
/* harmony import */ var _picking_ver_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/transferencia/picking.ver.modal.component.ts");
/* harmony import */ var _picking_finalizar_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/transferencia/picking.finalizar.modal.component.ts");





var routes = [
    {
        path: '',
        component: _transferencia_component__WEBPACK_IMPORTED_MODULE_2__["TransferenciaComponent"],
        children: [
            {
                path: 'verPicking',
                component: _picking_ver_modal_component__WEBPACK_IMPORTED_MODULE_3__["PickingVerModalComponent"]
            },
            {
                path: 'finalizarPicking',
                component: _picking_finalizar_modal_component__WEBPACK_IMPORTED_MODULE_4__["PickingFinalizarModalComponent"]
            }
        ]
    }
];
var TransferenciaRoutingModule = /** @class */ (function () {
    function TransferenciaRoutingModule() {
    }
    TransferenciaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], TransferenciaRoutingModule);
    return TransferenciaRoutingModule;
}());



/***/ }),

/***/ "./app/transferencia/transferencia.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.input {\n  font-size: 14;\n}\n\n.site-template-image {\n  border-radius: 100;\n  margin: 8 16;\n  width: 60;\n  height: 60;\n}\n\n.site-template-title {\n  margin: 0 0 6 0;\n  font-size: 18;\n}\n\n.site-template-description {\n  font-size: 14;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding: 16;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding: 16;\n}\n\n.gridLayoutLayout {\n  background-color: white;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.swipeTemplateLabel {\n  size: 20;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.listItemStackLayout {\n  background-color: white;\n  padding-left: 5;\n}\n\n.item-name {\n  color: #303c47;\n  font-family: 'Open Sans', 'OpenSans-Bold';\n  font-weight: bold;\n  padding: 2;\n}\n\n.messagesError {\n  font-size: 18;\n  color: red;\n  text-align: center;\n}\n\n.messagesOk {\n  font-size: 18;\n  color: blue;\n  text-align: center;\n}\n\n.input_ro {\n  font-size: 18;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/transferencia/transferencia.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <NavigationButton\n    ios:visibility=\"collapsed\"\n    icon=\"res://menu\"\n    (tap)=\"onDrawerButtonTap()\"\n  ></NavigationButton>\n  <ActionItem\n    icon=\"res://navigation/menu\"\n    android:visibility=\"collapsed\"\n    (tap)=\"onDrawerButtonTap()\"\n    ios.position=\"left\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Ver Picking\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onVerPickingButtonTap()\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Finalizar Picking\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onFinalizarPickingButtonTap()\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Cancelar Picking\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onCancelarPickingButtonTap()\"\n  >\n  </ActionItem>\n  <Label class=\"action-bar-title\" text=\"Transferencia por Demanda\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView>\n    <GridLayout rows=\"auto,auto,auto,auto,auto,auto,auto\" columns=\"*,*\">\n      <Label\n        row=\"0\"\n        colSpan=\"2\"\n        [ngClass]=\"messagesStyle\"\n        text=\"{{ message }}\"\n      ></Label>\n\n      <TextField\n        #loteNameTF\n        row=\"1\"\n        col=\"0\"\n        id=\"loteNameTF\"\n        [(ngModel)]=\"loteName\"\n        textWrap=\"true\"\n        class=\"input\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"allcharacters\"\n        hint=\"Escanee el serial\"\n        (textChange)=\"onTextLoteChange($event)\"\n      ></TextField>\n\n      <TextView\n        #locationNameSLTF=\"ngModel\"\n        row=\"1\"\n        col=\"1\"\n        hint=\"Serial Actual\"\n        autocorrect=\"false\"\n        class=\"input\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"loteNameSL\"\n        editable=\"false\"\n      ></TextView>\n\n      <TextField\n        #productUnitTF=\"ngModel\"\n        row=\"2\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Unidad del Producto\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productUnit\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productCurrentQtyTF=\"ngModel\"\n        row=\"2\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Cantidad Actual\"\n        keyboardType=\"number\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productQty\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLotTF=\"ngModel\"\n        row=\"3\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Lote / Serial\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLot\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLocTF=\"ngModel\"\n        row=\"3\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Ubicación del Lote\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLoc\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextView\n        #productNameTF=\"ngModel\"\n        row=\"4\"\n        colSpan=\"2\"\n        style=\"margin-top: 15px\"\n        height=\"100px\"\n        hint=\"Nombre del Producto\"\n        returnKeyType=\"next\"\n        [(ngModel)]=\"productName\"\n        class=\"input\"\n        borderColor=\"#DEDEDE\"\n        borderWidth=\"1\"\n        editable=\"false\"\n      ></TextView>\n    </GridLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/transferencia/transferencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaComponent", function() { return TransferenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/services/conteo.service.ts");
/* harmony import */ var _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/model/stock/quant.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _transferencia_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/transferencia/transferencia.modal.component.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);







var TransferenciaComponent = /** @class */ (function () {
    function TransferenciaComponent(conteoService, _vcRef, _modalService) {
        this.conteoService = conteoService;
        this._vcRef = _vcRef;
        this._modalService = _modalService;
    }
    TransferenciaComponent.prototype.ngOnInit = function () {
        this.locationName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_2__["Quant"]();
        this.messagesStyle = 'messagesOk';
        this.loteSelectedArray = new Array();
    };
    TransferenciaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loteNameTF.nativeElement.focus();
        }, 600);
    };
    TransferenciaComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__["getRootView"]();
        sideDrawer.showDrawer();
    };
    TransferenciaComponent.prototype.onVerPickingButtonTap = function () {
        var _this = this;
        this.message = null;
        var options = {
            viewContainerRef: this._vcRef,
            context: {
                ruta: 'verPicking',
                loteSelectedArray: this.loteSelectedArray
            },
            fullscreen: true
        };
        this._modalService
            .showModal(_transferencia_modal_component__WEBPACK_IMPORTED_MODULE_5__["TransferenciaModalComponent"], options)
            .then(function (result) {
            _this.loteSelectedArray = result;
        });
    };
    TransferenciaComponent.prototype.onFinalizarPickingButtonTap = function () {
        var _this = this;
        if (this.loteSelectedArray.length > 0) {
            this.loteName = null;
            this.message = null;
            this.clearFields();
            var options = {
                viewContainerRef: this._vcRef,
                context: {
                    ruta: 'finalizarPicking',
                    loteSelectedArray: this.loteSelectedArray
                },
                fullscreen: true
            };
            this._modalService
                .showModal(_transferencia_modal_component__WEBPACK_IMPORTED_MODULE_5__["TransferenciaModalComponent"], options)
                .then(function (result) {
                _this.loteSelectedArray = result;
            });
        }
        else {
            this.showErrorMessage('No ha selecionado ningun lote');
        }
    };
    TransferenciaComponent.prototype.onCancelarPickingButtonTap = function (id) {
        var _this = this;
        var self = new WeakRef(this).get();
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"]({
            title: 'Cancelar Picking',
            message: '¿Confirma la operación?',
            okButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result) {
                self.loteSelectedArray = new Array();
                _this.message = null;
                self.clearFields();
            }
        });
    };
    TransferenciaComponent.prototype.onTextLoteChange = function (args) {
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
                        var filter = _this.loteSelectedArray.filter(function (el) {
                            return el.id === _this.loteSelected.id;
                        });
                        if (filter.length === 0) {
                            _this.loteSelectedArray.push(_this.loteSelected);
                            _this.showOkMessage('Serial agregado');
                        }
                        else {
                            _this.showErrorMessage('Serial ya ha sido agregado');
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
    TransferenciaComponent.prototype.alert = function (message) {
        return alert({
            title: 'MH Móvil',
            okButtonText: 'OK',
            message: message
        });
    };
    TransferenciaComponent.prototype.showErrorMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesError';
    };
    TransferenciaComponent.prototype.showOkMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesOk';
    };
    TransferenciaComponent.prototype.clearFields = function () {
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
    TransferenciaComponent.ctorParameters = function () { return [
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_1__["ConteoService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__["ModalDialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loteNameTF', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferenciaComponent.prototype, "loteNameTF", void 0);
    TransferenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Transferencia',
            template: __importDefault(__webpack_require__("./app/transferencia/transferencia.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/transferencia/transferencia.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_1__["ConteoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_4__["ModalDialogService"]])
    ], TransferenciaComponent);
    return TransferenciaComponent;
}());



/***/ }),

/***/ "./app/transferencia/transferencia.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>"

/***/ }),

/***/ "./app/transferencia/transferencia.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaModalComponent", function() { return TransferenciaModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__);




var TransferenciaModalComponent = /** @class */ (function () {
    function TransferenciaModalComponent(_routerExtensions, _activeRoute, _params) {
        this._routerExtensions = _routerExtensions;
        this._activeRoute = _activeRoute;
        this._params = _params;
    }
    TransferenciaModalComponent.prototype.ngOnInit = function () {
        this._routerExtensions.navigate([this._params.context.ruta], {
            relativeTo: this._activeRoute
        });
    };
    TransferenciaModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__["ModalDialogParams"] }
    ]; };
    TransferenciaModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'TransferenciaModalOptions',
            template: __importDefault(__webpack_require__("./app/transferencia/transferencia.modal.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_3__["ModalDialogParams"]])
    ], TransferenciaModalComponent);
    return TransferenciaModalComponent;
}());



/***/ }),

/***/ "./app/transferencia/transferencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaModule", function() { return TransferenciaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _transferencia_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/transferencia/transferencia-routing.module.ts");
/* harmony import */ var _transferencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/transferencia/transferencia.component.ts");
/* harmony import */ var _transferencia_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/transferencia/transferencia.modal.component.ts");
/* harmony import */ var _picking_ver_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/transferencia/picking.ver.modal.component.ts");
/* harmony import */ var _picking_finalizar_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/transferencia/picking.finalizar.modal.component.ts");









var TransferenciaModule = /** @class */ (function () {
    function TransferenciaModule() {
    }
    TransferenciaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _transferencia_routing_module__WEBPACK_IMPORTED_MODULE_4__["TransferenciaRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _transferencia_component__WEBPACK_IMPORTED_MODULE_5__["TransferenciaComponent"],
                _transferencia_modal_component__WEBPACK_IMPORTED_MODULE_6__["TransferenciaModalComponent"],
                _picking_ver_modal_component__WEBPACK_IMPORTED_MODULE_7__["PickingVerModalComponent"],
                _picking_finalizar_modal_component__WEBPACK_IMPORTED_MODULE_8__["PickingFinalizarModalComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            entryComponents: [_transferencia_modal_component__WEBPACK_IMPORTED_MODULE_6__["TransferenciaModalComponent"], _picking_ver_modal_component__WEBPACK_IMPORTED_MODULE_7__["PickingVerModalComponent"], _picking_finalizar_modal_component__WEBPACK_IMPORTED_MODULE_8__["PickingFinalizarModalComponent"]]
        })
    ], TransferenciaModule);
    return TransferenciaModule;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LWNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvbW9kZWwvc3RvY2svbG9jYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9tb2RlbC9zdG9jay9xdWFudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHJhbnNmZXJlbmNpYS9waWNraW5nLmZpbmFsaXphci5tb2RhbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3BpY2tpbmcuZmluYWxpemFyLm1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3BpY2tpbmcuZmluYWxpemFyLm1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHJhbnNmZXJlbmNpYS9waWNraW5nLnZlci5tb2RhbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3BpY2tpbmcudmVyLm1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3BpY2tpbmcudmVyLm1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHJhbnNmZXJlbmNpYS90cmFuc2ZlcmVuY2lhLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3RyYW5zZmVyZW5jaWEuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdHJhbnNmZXJlbmNpYS90cmFuc2ZlcmVuY2lhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3RyYW5zZmVyZW5jaWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC90cmFuc2ZlcmVuY2lhL3RyYW5zZmVyZW5jaWEubW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RyYW5zZmVyZW5jaWEvdHJhbnNmZXJlbmNpYS5tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RyYW5zZmVyZW5jaWEvdHJhbnNmZXJlbmNpYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsaURBQXdCO0FBQzlDLHFCQUFxQixtQkFBTyxDQUFDLGtFQUFrQztBQUMvRCxhQUFhLG1CQUFPLENBQUMsdURBQStCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MseUJBQXlCO0FBQy9ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUNBQWlDO0FBQ3ZFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRCxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDckRBLDRGQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLDZEQUE4QjtBQUN4RCxjQUFjLG1CQUFPLENBQUMsaURBQXdCO0FBQzlDLHdCQUF3QixtQkFBTyxDQUFDLHlEQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUFBRSxxRkFBd0IsRUFBRSxpR0FBOEIsQ0FBQztTQUN6RyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBO0FBQUoiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7XG52YXIgY29udGVudF92aWV3XzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7XG52YXIgdmlld18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpO1xuZXhwb3J0cy5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSA9IHZpZXdfMS5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eTtcbmV4cG9ydHMuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHkgPSB2aWV3XzEuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHk7XG52YXIgQ2FyZFZpZXdDb21tb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXJkVmlld0NvbW1vbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYXJkVmlld0NvbW1vbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQ2FyZFZpZXdDb21tb247XG59KGNvbnRlbnRfdmlld18xLkNvbnRlbnRWaWV3KSk7XG5leHBvcnRzLkNhcmRWaWV3Q29tbW9uID0gQ2FyZFZpZXdDb21tb247XG5leHBvcnRzLnJhZGl1c1Byb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAncmFkaXVzJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5yYWRpdXNQcm9wZXJ0eS5yZWdpc3RlcihDYXJkVmlld0NvbW1vbik7XG5leHBvcnRzLmVsZXZhdGlvblByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnZWxldmF0aW9uJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5lbGV2YXRpb25Qcm9wZXJ0eS5yZWdpc3RlcihDYXJkVmlld0NvbW1vbik7XG5leHBvcnRzLnJpcHBsZVByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAncmlwcGxlJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnOyB9XG59KTtcbmV4cG9ydHMucmlwcGxlUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dSYWRpdXNQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd1JhZGl1cycsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93UmFkaXVzUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93T2Zmc2V0V2lkdGgnLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICt2YWx1ZTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd09mZnNldFdpZHRoUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRIZWlnaHRQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd09mZnNldEhlaWdodCcsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93T2Zmc2V0SGVpZ2h0UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dDb2xvclByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93Q29sb3InLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG5ldyBjb2xvcl8xLkNvbG9yKHZhbHVlKTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd0NvbG9yUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkgPSBuZXcgY29udGVudF92aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6ICdzaGFkb3dPcGFjaXR5JyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpO1xudmFyIGNhcmR2aWV3X2NvbW1vbl8xID0gcmVxdWlyZShcIi4vY2FyZHZpZXctY29tbW9uXCIpO1xudmFyIENhcmRWaWV3TmFtZXNwYWNlID0gdXNlQW5kcm9pZFgoKSA/IGdsb2JhbC5hbmRyb2lkeC5jYXJkdmlldy53aWRnZXQgOiBhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0O1xudmFyIEFwcENvbXBhdFJlc291cmNlc05hbWVzcGFjZSA9IHVzZUFuZHJvaWRYKCkgPyAnYW5kcm9pZHguYXBwY29tcGF0JyA6ICdhbmRyb2lkLnN1cHBvcnQudjcuYXBwY29tcGF0JztcbmZ1bmN0aW9uIHVzZUFuZHJvaWRYKCkge1xuICAgIHJldHVybiBnbG9iYWwuYW5kcm9pZHggJiYgZ2xvYmFsLmFuZHJvaWR4LmNhcmR2aWV3O1xufVxudmFyIENhcmRWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FyZFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2FyZFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcmRWaWV3LnByb3RvdHlwZSwgXCJhbmRyb2lkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVWaWV3O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEucmFkaXVzUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0UmFkaXVzKHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5lbGV2YXRpb25Qcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYXJkRWxldmF0aW9uKHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5yaXBwbGVQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDbGlja2FibGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlc1VyaSA9IEFwcENvbXBhdFJlc291cmNlc05hbWVzcGFjZSArICcuUiRhdHRyJztcbiAgICAgICAgICAgIHZhciBhdHRyID0gamF2YS5sYW5nLkNsYXNzLmZvck5hbWUocmVzb3VyY2VzVXJpKTtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGF0dHIuZ2V0RmllbGQoJ3NlbGVjdGFibGVJdGVtQmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgaWYgKGZpZWxkICYmIGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IDIzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc0lkID0gZmllbGQuZ2V0SW50KG51bGwpO1xuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IEFycmF5LmNyZWF0ZSgnaW50JywgMSk7XG4gICAgICAgICAgICAgICAgYXR0cnNbMF0gPSByZXNJZDtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHkgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZWRWYWx1ZSA9IGFjdGl2aXR5Lm9idGFpblN0eWxlZEF0dHJpYnV0ZXMoYXR0cnMpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEl0ZW1EcmF3YWJsZSA9IHR5cGVkVmFsdWUuZ2V0RHJhd2FibGUoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldEZvcmVncm91bmQoc2VsZWN0ZWRJdGVtRHJhd2FibGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDbGlja2FibGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZS5jcmVhdGVOYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IENhcmRWaWV3TmFtZXNwYWNlLkNhcmRWaWV3KHRoaXMuX2NvbnRleHQpO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlLmluaXROYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9hbmRyb2lkVmlld0lkID0gYW5kcm9pZC52aWV3LlZpZXcuZ2VuZXJhdGVWaWV3SWQoKTtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldElkKHRoaXMuX2FuZHJvaWRWaWV3SWQpO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlW2NhcmR2aWV3X2NvbW1vbl8xLmJhY2tncm91bmRDb2xvclByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYXJkQmFja2dyb3VuZENvbG9yKHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5hbmRyb2lkIDogbmV3IGNvbG9yXzEuQ29sb3IoJyNGRkZGRkYnKS5hbmRyb2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXRpdmVTY3JpcHQtQ2FyZHZpZXcgLS0tIGludmFsaWQgYmFja2dyb3VuZC1jb2xvciB2YWx1ZSAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5iYWNrZ3JvdW5kSW50ZXJuYWxQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2FyZEJhY2tncm91bmRDb2xvcihuZXcgY29sb3JfMS5Db2xvcih2YWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gdmFsdWUuY29sb3IgKyAnJyA6ICcjRkZGRkZGJykuYW5kcm9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF0aXZlU2NyaXB0LUNhcmR2aWV3IC0tLSBpbnZhbGlkIGJhY2tncm91bmQtY29sb3IgdmFsdWU6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FyZFZpZXc7XG59KGNhcmR2aWV3X2NvbW1vbl8xLkNhcmRWaWV3Q29tbW9uKSk7XG5leHBvcnRzLkNhcmRWaWV3ID0gQ2FyZFZpZXc7XG4iLCJleHBvcnQgY2xhc3MgU3RvY2tMb2NhdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheV9uYW1lOiBzdHJpbmc7XG4gIGNvbW1wYW55X2lkOiBBcnJheTxhbnk+O1xuICBsb2NhdGlvbl9pZDogQXJyYXk8YW55Pjtcbn1cbiIsImV4cG9ydCBjbGFzcyBRdWFudCB7XG4gIGlkOiBudW1iZXI7XG4gIGxvdGVOYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uX2lkOiBBcnJheTxhbnk+O1xuICBsb3RfaWQ6IEFycmF5PGFueT47XG4gIHByb2R1Y3RfaWQ6IEFycmF5PGFueT47XG4gIHByb2R1Y3RfdW9tX2lkOiBBcnJheTxhbnk+O1xuICBxdWFudGl0eTogbnVtYmVyO1xuICBwcm9kdWN0X3F0eTogbnVtYmVyO1xuICBsaW5lSWQ6IG51bWJlcjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBY3Rpb25CYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtaW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwO1xcbiAgbWFyZ2luOiA4IDE2O1xcbiAgd2lkdGg6IDYwO1xcbiAgaGVpZ2h0OiA2MDtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDAgNiAwO1xcbiAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLm1hcmtWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZGVsZXRlVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZ3JpZExheW91dExheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hcmtWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHBhZGRpbmctbGVmdDogMTY7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG59XFxuXFxuLnN3aXBlVGVtcGxhdGVMYWJlbCB7XFxuICBzaXplOiAyMDtcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxufVxcblxcbi5saXN0SXRlbVN0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiA1O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gIGNvbG9yOiAjMzAzYzQ3O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnT3BlblNhbnMtQm9sZCc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDI7XFxufVxcblxcbi5tZXNzYWdlc0Vycm9yIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBjb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVzc2FnZXNPayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dF9ybyB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgKHRhcCk9XFxcIm9uQ2xvc2UoKVxcXCJcXG4gICAgaW9zLnN5c3RlbUljb249XFxcIjFcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgPjwvQWN0aW9uSXRlbT5cXG5cXG4gIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiRmluYWxpemFyIFBpY2tpbmdcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0byxhdXRvLGF1dG8sYXV0byxhdXRvLGF1dG8sYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgIFtuZ0NsYXNzXT1cXFwibWVzc2FnZXNTdHlsZVxcXCJcXG4gICAgICAgIHRleHQ9XFxcInt7IG1lc3NhZ2UgfX1cXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI2xvdGVOYW1lVEZcXG4gICAgICAgIHJvdz1cXFwiMVxcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGlkPVxcXCJsb3RlTmFtZVRGXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcImxvdGVOYW1lXFxcIlxcbiAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJhbGxjaGFyYWN0ZXJzXFxcIlxcbiAgICAgICAgaGludD1cXFwiRXNjYW5lZSBlbCBzZXJpYWxcXFwiXFxuICAgICAgICAodGV4dENoYW5nZSk9XFxcIm9uVGV4dExvdGVDaGFuZ2UoJGV2ZW50KVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIHRleHQ9XFxcIlViaWNhY2nDs24gYSBUcmFuc2ZlcmlyXFxcIj48L0xhYmVsPlxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNwcm9kdWN0TG9jVEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjNcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBoaW50PVxcXCJVYmljYWNpw7NuIGEgVHJhbnNmZXJpclxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwibG9jYXRpb25TZWxlY3RlZC5kaXNwbGF5X25hbWVcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8TGFiZWwgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdGV4dD1cXFwiU2VyaWFsIEFjdHVhbFxcXCI+PC9MYWJlbD5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdExvY1RGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCI1XFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiU2VyaWFsIEFjdHVhbFxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwibG90ZVNlbGVjdGVkLmxvdGVOYW1lXFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPExhYmVsIHJvdz1cXFwiNlxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIHRleHQ9XFxcIk5vbWJyZSBkZWwgUHJvZHVjdG9cXFwiPjwvTGFiZWw+XFxuICAgICAgPFRleHRWaWV3XFxuICAgICAgICAjcHJvZHVjdE5hbWVURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiN1xcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxNXB4XFxcIlxcbiAgICAgICAgaGVpZ2h0PVxcXCIxMjBweFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIk5vbWJyZSBkZWwgUHJvZHVjdG9cXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3ROYW1lXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgYm9yZGVyQ29sb3I9XFxcIiNERURFREVcXFwiXFxuICAgICAgICBib3JkZXJXaWR0aD1cXFwiMVxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0Vmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbiAgPEFjdGl2aXR5SW5kaWNhdG9yXFxuICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgW2J1c3ldPVxcXCJpc0xvYWRpbmdcXFwiXFxuICA+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gIDxPZmZsaW5lTm90aWZpY2F0aW9uPjwvT2ZmbGluZU5vdGlmaWNhdGlvbj5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBRdWFudCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9xdWFudCc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBTdG9ja0xvY2F0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3N0b2NrL2xvY2F0aW9uJztcbmltcG9ydCB7IENvbnRlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY29udGVvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdQaWNraW5nRmluYWxpemFyTW9kYWwnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vcGlja2luZy5maW5hbGl6YXIubW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9waWNraW5nLmZpbmFsaXphci5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGlja2luZ0ZpbmFsaXphck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBsb3RlU2VsZWN0ZWRBcnJheTogQXJyYXk8UXVhbnQ+O1xuICBsb3RlUGlja2luZ0FycmF5OiBBcnJheTxRdWFudD47XG5cbiAgbWVzc2FnZTogc3RyaW5nO1xuICBtZXNzYWdlc1N0eWxlOiBzdHJpbmc7XG5cbiAgbG90ZU5hbWU6IHN0cmluZztcbiAgbG9jYXRpb25TZWxlY3RlZDogU3RvY2tMb2NhdGlvbjtcbiAgbG90ZVNlbGVjdGVkOiBRdWFudDtcbiAgcHJvZHVjdExvdDogc3RyaW5nO1xuICBwcm9kdWN0TmFtZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2xvdGVOYW1lVEYnLCB7IHN0YXRpYzogZmFsc2UgfSkgbG90ZU5hbWVURjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgIHByaXZhdGUgY29udGVvU2VydmljZTogQ29udGVvU2VydmljZVxuICApIHtcbiAgICB0aGlzLmxvdGVTZWxlY3RlZEFycmF5ID0gdGhpcy5fcGFyYW1zLmNvbnRleHQubG90ZVNlbGVjdGVkQXJyYXk7XG4gICAgdGhpcy5sb3RlUGlja2luZ0FycmF5ID0gbmV3IEFycmF5PFF1YW50PigpO1xuICAgIHRoaXMubG9jYXRpb25TZWxlY3RlZCA9IG5ldyBTdG9ja0xvY2F0aW9uKCk7XG4gICAgdGhpcy5sb3RlU2VsZWN0ZWQgPSBuZXcgUXVhbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc09rJztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG90ZU5hbWVURi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSwgNjAwKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG90ZVNlbGVjdGVkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6ICdGaW5hbGl6YXIgUGlja2luZycsXG4gICAgICAgIG1lc3NhZ2U6ICdUb2RhdsOtYSBleGlzdGVuIGxvdGVzIHNpbiB0cmFuc2ZlcmlyLiBEZXNhciB0ZXJtaW5hciBsYSBvcGVyYWNpw7NuPycsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ1NpJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmxvdGVTZWxlY3RlZEFycmF5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMubG90ZVNlbGVjdGVkQXJyYXkpO1xuICAgIH1cbiAgfVxuXG4gIG9uVGV4dExvdGVDaGFuZ2UoYXJncykge1xuICAgIGNvbnN0IGNvZGU6IHN0cmluZyA9IGFyZ3Mub2JqZWN0Wyd0ZXh0J107XG4gICAgY29uc3Qgc2VsZiA9IG5ldyBXZWFrUmVmKHRoaXMpLmdldCgpO1xuICAgIGlmIChjb2RlICYmIGNvZGUubGVuZ3RoID09PSAxMSkge1xuICAgICAgaWYgKGNvZGUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgPT09ICdYJykge1xuICAgICAgICBjb25zdCBpZCA9IGNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICB0aGlzLnNlYXJjaExvY2F0aW9uKCtpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2VsZi5sb2NhdGlvblNlbGVjdGVkLmlkID09IG51bGwpIHtcbiAgICAgICAgICBzZWxmLnNob3dFcnJvck1lc3NhZ2UoJ0RlYmUgc2VsZWNjaW9uYXIgcHJpbWVybyB1bmEgdWJpY2FjacOzbicpO1xuICAgICAgICAgIHNlbGYuY2xlYXJGaWVsZHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIHNlbGYuaXNMb2FkaW5nID0gdHJ1ZTsgIFxuICAgICAgICAgIC8vQ0FNQklPIEJVU1FVRURBIDIwMjEtMDMtMDEgIGdldExvdGUoK2lkKSA+PiAgIGdldExvdEJ5TmFtZShjb2RlKVxuICAgICAgICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRMb3RCeU5hbWUoY29kZSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkID0gcmVzcG9uc2UucmVzdWx0LnJlY29yZHNbMF07XG4gICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkLmxvdGVOYW1lID0gc2VsZi5sb3RlTmFtZTtcbiAgICAgICAgICAgICAgLy9zZWxmLnByb2R1Y3RMb3QgPSBzZWxmLmxvdGVTZWxlY3RlZC5sb3RfaWRbMV07XG4gICAgICAgICAgICAgIC8vQ2FtYmlvIHBhcmEgcG9ibGFyIGVsIGNhbXBvIGluZmVyaW9yIGRlIGxvdGUsIGRlYmUgcXVlZGFyIGlndWFsIGFsIHNlcmlhbCBlc2NhbmVhZG8gc2VsZi5sb3RlU2VsZWN0ZWQubG90X2lkWzFdID4+ICBzZWxmLmxvdGVOYW1lO1xuICAgICAgICAgICAgICBzZWxmLnByb2R1Y3RMb3QgPSBzZWxmLmxvdGVOYW1lO1xuICAgICAgICAgICAgICBzZWxmLnByb2R1Y3ROYW1lID0gc2VsZi5sb3RlU2VsZWN0ZWQucHJvZHVjdF9pZFsxXTtcblxuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmxvdGVQaWNraW5nQXJyYXkuZmlsdGVyKChlbCkgPT4gZWwuaWQgPT09IHRoaXMubG90ZVNlbGVjdGVkLmlkKTtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zaG93RXJyb3JNZXNzYWdlKCdFbCBsb3RlIHlhIGZ1ZSBsZWlkbycpO1xuICAgICAgICAgICAgICAgIHNlbGYubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvd09rTWVzc2FnZSgnU2VyaWFsIGVuY29udHJhZG8nKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLmxvdGVQaWNraW5nQXJyYXkucHVzaChzZWxmLmxvdGVTZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubG90ZVBpY2tpbmdBcnJheS5sZW5ndGggPT09IHNlbGYubG90ZVNlbGVjdGVkQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnRyYW5zZmVyQWN0aW9uKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5zaG93T2tNZXNzYWdlKCdTZXJpYWwgbm8gZXhpc3RlJyk7XG4gICAgICAgICAgICAgIHNlbGYubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgICAgICBzZWxmLmNsZWFyRmllbGRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWFyY2hMb2NhdGlvbihpZDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IG5ldyBXZWFrUmVmKHRoaXMpLmdldCgpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRTdG9ja0xvY2F0aW9uKGlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZi5sb2NhdGlvblNlbGVjdGVkID0gcmVzcG9uc2UucmVzdWx0LnJlY29yZHNbMF07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzZWxmLmxvY2F0aW9uU2VsZWN0ZWQubG9jYXRpb25faWQpKSB7XG4gICAgICAgICAgc2VsZi5zaG93RXJyb3JNZXNzYWdlKCdMYSB1YmljYWNpw7NuIG5vIHRpZW5lIGFzb2NpYWRhIHVuIHBhZHJlIScpO1xuICAgICAgICAgIHNlbGYuY2xlYXJGaWVsZHMoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNob3dPa01lc3NhZ2UoJ1ViaWNhY2nDs24gZW5jb250cmFkYScpO1xuICAgICAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubG90ZVBpY2tpbmdBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2VsZi50cmFuc2ZlckFjdGlvbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuc2hvd0Vycm9yTWVzc2FnZSgnTm8gZXhpc3RlIHViaWNhY2nDs24nKTtcbiAgICAgICAgc2VsZi5jbGVhckZpZWxkcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdHJhbnNmZXJBY3Rpb24odmFsaWRhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5sb3RlU2VsZWN0ZWRBcnJheS5maWx0ZXIoKGVsKSA9PiBlbC5pZCA9PT0gdGhpcy5sb3RlU2VsZWN0ZWQuaWQpO1xuICAgIGlmIChmaWx0ZXIubGVuZ3RoID09PSAwICYmIHZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoJ0VsIGxvdGUgbm8gZXN0w6EgZW4gZWwgcGlja2luZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGxzIG9mIHRoaXMubG90ZVBpY2tpbmdBcnJheSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRQYXJlbnRzU3RvY2tMb2NhdGlvbihbK2xzLmxvY2F0aW9uX2lkWzBdXSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCByZXN1bHRQYXJlbnRzID0gcmVzcG9uc2UucmVzdWx0LnJlY29yZHM7XG4gICAgICAgICAgdGhpcy5jb250ZW9TZXJ2aWNlLmNyZWF0ZVBpY2tpbmcocmVzdWx0UGFyZW50c1swXS5sb2NhdGlvbl9pZFswXSwgc2VsZi5sb2NhdGlvblNlbGVjdGVkLmxvY2F0aW9uX2lkWzBdLCA1KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZTIucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBhbCBndWFyZGFyIGxhIGNhYmVjZXJhIScpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgcGlja2luZ0lkID0gcmVzcG9uc2UyLnJlc3VsdDtcbiAgICAgICAgICAgICAgc2VsZi5jb250ZW9TZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVBpY2tpbmdEZXRhaWwoXG4gICAgICAgICAgICAgICAgICBwaWNraW5nSWQsXG4gICAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uU2VsZWN0ZWQuaWQsXG4gICAgICAgICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5wcm9kdWN0X2lkWzBdLFxuICAgICAgICAgICAgICAgICAgc2VsZi5sb3RlU2VsZWN0ZWQubG9jYXRpb25faWRbMF0sXG4gICAgICAgICAgICAgICAgICAvLyBDQU1CSU8gTE9UX0lEWzBdIFBPUiBJRFxuICAgICAgICAgICAgICAgICAgLy9zZWxmLmxvdGVTZWxlY3RlZC5sb3RfaWRbMF0sXG4gICAgICAgICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5pZCxcbiAgICAgICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkLnF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgc2VsZi5sb3RlU2VsZWN0ZWQucHJvZHVjdF91b21faWRbMF0sXG4gICAgICAgICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5wcm9kdWN0X2lkWzFdLFxuICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlMy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb3RlUGlja2luZ0FycmF5ID0gc2VsZi5sb3RlUGlja2luZ0FycmF5XG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsLmlkICE9PSBscy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkQXJyYXkgPSBzZWxmLmxvdGVTZWxlY3RlZEFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsLmlkICE9PSBscy5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubG90ZVNlbGVjdGVkQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRmluYWxpemFyIFBpY2tpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIGV4aXN0ZW4gbWFzIHByb2R1Y3RvcyEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQWNlcHRhcidcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhzZWxmLmxvdGVTZWxlY3RlZEFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBhbCBndWFyZGFyIGxhIGRldGFsbGUhJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvd0Vycm9yTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc0Vycm9yJztcbiAgfVxuXG4gIHNob3dPa01lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm1lc3NhZ2VzU3R5bGUgPSAnbWVzc2FnZXNPayc7XG4gIH1cblxuICBjbGVhckZpZWxkcygpOiB2b2lkIHtcbiAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLnByb2R1Y3RMb3QgPSBudWxsO1xuICAgIHRoaXMucHJvZHVjdE5hbWUgPSBudWxsO1xuICAgIHRoaXMubG90ZU5hbWVURi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBY3Rpb25CYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG5cXG4uY2FyZC1sYXlvdXQge1xcbiAgcGFkZGluZzogMjA7XFxufVxcblxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgKHRhcCk9XFxcIm9uQ2xvc2UoKVxcXCJcXG4gICAgaW9zLnN5c3RlbUljb249XFxcIjFcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgPjwvQWN0aW9uSXRlbT5cXG5cXG4gIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiVmVyIFBpY2tpbmdcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8Q2FyZFZpZXdcXG4gICAgICAgICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgbG90ZVNlbGVjdGVkQXJyYXlcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiY2FyZFxcXCJcXG4gICAgICAgIGVsZXZhdGlvbj1cXFwiNDBcXFwiXFxuICAgICAgICByYWRpdXM9XFxcIjEwXFxcIlxcbiAgICAgICAgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoM1xcXCIgW3RleHRdPVxcXCJpdGVtLmxvdF9pZFsxXVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgW3RleHRdPVxcXCJpdGVtLnByb2R1Y3RfaWRbMV1cXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgICAgdGV4dD1cXFwiRWxpbWluYXJcXFwiXFxuICAgICAgICAgICAgKHRhcCk9XFxcIm9uUmVtb3ZlQ2FyZEJ1dHRvblRhcChpdGVtLmlkKVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICAgICA+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDwvQ2FyZFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuICA8QWN0aXZpdHlJbmRpY2F0b3JcXG4gICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCJcXG4gID48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgPE9mZmxpbmVOb3RpZmljYXRpb24+PC9PZmZsaW5lTm90aWZpY2F0aW9uPlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFF1YW50IH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3N0b2NrL3F1YW50JztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICcuLi9AbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdQaWNraW5nVmVyTW9kYWwnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vcGlja2luZy52ZXIubW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9waWNraW5nLnZlci5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGlja2luZ1Zlck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBsb3RlU2VsZWN0ZWRBcnJheTogQXJyYXk8UXVhbnQ+O1xuXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgbWVzc2FnZXNTdHlsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcbiAgKSB7XG4gICAgdGhpcy5sb3RlU2VsZWN0ZWRBcnJheSA9IHRoaXMuX3BhcmFtcy5jb250ZXh0LmxvdGVTZWxlY3RlZEFycmF5O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlc1N0eWxlID0gJ21lc3NhZ2VzT2snO1xuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmxvdGVTZWxlY3RlZEFycmF5KTtcbiAgfVxuXG4gIG9uUmVtb3ZlQ2FyZEJ1dHRvblRhcChpZDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IG5ldyBXZWFrUmVmKHRoaXMpLmdldCgpO1xuXG4gICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgIHRpdGxlOiAnSW52ZW50YXJpb3MnLFxuICAgICAgbWVzc2FnZTogJ8K/Q29uZmlybWEgbGEgb3BlcmFjacOzbj8nLFxuICAgICAgb2tCdXR0b25UZXh0OiAnU2knLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZEFycmF5ID0gc2VsZi5sb3RlU2VsZWN0ZWRBcnJheS5maWx0ZXIoKGVsKSA9PiBlbC5pZCAhPT0gaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFuc2ZlcmVuY2lhQ29tcG9uZW50IH0gZnJvbSAnLi90cmFuc2ZlcmVuY2lhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNraW5nVmVyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3BpY2tpbmcudmVyLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNraW5nRmluYWxpemFyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3BpY2tpbmcuZmluYWxpemFyLm1vZGFsLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBUcmFuc2ZlcmVuY2lhQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd2ZXJQaWNraW5nJyxcbiAgICAgICAgY29tcG9uZW50OiBQaWNraW5nVmVyTW9kYWxDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdmaW5hbGl6YXJQaWNraW5nJyxcbiAgICAgICAgY29tcG9uZW50OiBQaWNraW5nRmluYWxpemFyTW9kYWxDb21wb25lbnRcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyZW5jaWFSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtaW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwO1xcbiAgbWFyZ2luOiA4IDE2O1xcbiAgd2lkdGg6IDYwO1xcbiAgaGVpZ2h0OiA2MDtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDAgNiAwO1xcbiAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnNpdGUtdGVtcGxhdGUtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLm1hcmtWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZGVsZXRlVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZ3JpZExheW91dExheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hcmtWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHBhZGRpbmctbGVmdDogMTY7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG59XFxuXFxuLnN3aXBlVGVtcGxhdGVMYWJlbCB7XFxuICBzaXplOiAyMDtcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxufVxcblxcbi5saXN0SXRlbVN0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiA1O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gIGNvbG9yOiAjMzAzYzQ3O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnT3BlblNhbnMtQm9sZCc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDI7XFxufVxcblxcbi5tZXNzYWdlc0Vycm9yIHtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBjb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVzc2FnZXNPayB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dF9ybyB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCJcXG4gICAgaWNvbj1cXFwicmVzOi8vbWVudVxcXCJcXG4gICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgaWNvbj1cXFwicmVzOi8vbmF2aWdhdGlvbi9tZW51XFxcIlxcbiAgICBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCJcXG4gID5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxBY3Rpb25JdGVtXFxuICAgIHRleHQ9XFxcIlZlciBQaWNraW5nXFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uVmVyUGlja2luZ0J1dHRvblRhcCgpXFxcIlxcbiAgPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgdGV4dD1cXFwiRmluYWxpemFyIFBpY2tpbmdcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicG9wdXBcXFwiXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICAodGFwKT1cXFwib25GaW5hbGl6YXJQaWNraW5nQnV0dG9uVGFwKClcXFwiXFxuICA+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8QWN0aW9uSXRlbVxcbiAgICB0ZXh0PVxcXCJDYW5jZWxhciBQaWNraW5nXFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uQ2FuY2VsYXJQaWNraW5nQnV0dG9uVGFwKClcXFwiXFxuICA+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIlRyYW5zZmVyZW5jaWEgcG9yIERlbWFuZGFcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICA8U2Nyb2xsVmlldz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0byxhdXRvLGF1dG8sYXV0byxhdXRvLGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiKiwqXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgIGNvbFNwYW49XFxcIjJcXFwiXFxuICAgICAgICBbbmdDbGFzc109XFxcIm1lc3NhZ2VzU3R5bGVcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJ7eyBtZXNzYWdlIH19XFxcIlxcbiAgICAgID48L0xhYmVsPlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNsb3RlTmFtZVRGXFxuICAgICAgICByb3c9XFxcIjFcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBpZD1cXFwibG90ZU5hbWVURlxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJsb3RlTmFtZVxcXCJcXG4gICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwiYWxsY2hhcmFjdGVyc1xcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkVzY2FuZWUgZWwgc2VyaWFsXFxcIlxcbiAgICAgICAgKHRleHRDaGFuZ2UpPVxcXCJvblRleHRMb3RlQ2hhbmdlKCRldmVudClcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0Vmlld1xcbiAgICAgICAgI2xvY2F0aW9uTmFtZVNMVEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjFcXFwiXFxuICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICBoaW50PVxcXCJTZXJpYWwgQWN0dWFsXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJsb3RlTmFtZVNMXFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRWaWV3PlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNwcm9kdWN0VW5pdFRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIyXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiVW5pZGFkIGRlbCBQcm9kdWN0b1xcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdFVuaXRcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdEN1cnJlbnRRdHlURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiMlxcXCJcXG4gICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkNhbnRpZGFkIEFjdHVhbFxcXCJcXG4gICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0UXR5XFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI3Byb2R1Y3RMb3RURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiM1xcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIkxvdGUgLyBTZXJpYWxcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3RMb3RcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdExvY1RGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIzXFxcIlxcbiAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiVWJpY2FjacOzbiBkZWwgTG90ZVxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdExvY1xcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0Vmlld1xcbiAgICAgICAgI3Byb2R1Y3ROYW1lVEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjRcXFwiXFxuICAgICAgICBjb2xTcGFuPVxcXCIyXFxcIlxcbiAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDE1cHhcXFwiXFxuICAgICAgICBoZWlnaHQ9XFxcIjEwMHB4XFxcIlxcbiAgICAgICAgaGludD1cXFwiTm9tYnJlIGRlbCBQcm9kdWN0b1xcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdE5hbWVcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBib3JkZXJDb2xvcj1cXFwiI0RFREVERVxcXCJcXG4gICAgICAgIGJvcmRlcldpZHRoPVxcXCIxXFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRWaWV3PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuICA8QWN0aXZpdHlJbmRpY2F0b3JcXG4gICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCJcXG4gID48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgPE9mZmxpbmVOb3RpZmljYXRpb24+PC9PZmZsaW5lTm90aWZpY2F0aW9uPlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL25vdGUubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jb250ZW8uc2VydmljZSc7XG5pbXBvcnQgeyBRdWFudCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9xdWFudCc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgVHJhbnNmZXJlbmNpYU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi90cmFuc2ZlcmVuY2lhLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyYW5zZmVyZW5jaWEnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJhbnNmZXJlbmNpYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyYW5zZmVyZW5jaWEuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyZW5jaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIG5vdGVzQXJyYXk6IEFycmF5PE5vdGU+O1xuICBwcm9jZXNvSWQ6IG51bWJlcjtcbiAgcHJvZHVjdE5hbWU6IHN0cmluZztcbiAgcHJvZHVjdFF0eU5ldzogbnVtYmVyO1xuICBwcm9kdWN0UXR5OiBudW1iZXI7XG4gIHByb2R1Y3RVbml0OiBzdHJpbmc7XG4gIHByb2R1Y3RMb2M6IHN0cmluZztcbiAgcHJvZHVjdExvdDogc3RyaW5nO1xuICBsb2NhdGlvbk5hbWU6IHN0cmluZztcbiAgbG90ZU5hbWU6IHN0cmluZztcbiAgbG90ZU5hbWVTTDogc3RyaW5nO1xuICBpbnZlbnRvcnlOYW1lOiBzdHJpbmc7XG5cbiAgbG90ZVNlbGVjdGVkOiBRdWFudDtcbiAgbG90ZVNlbGVjdGVkQXJyYXk6IEFycmF5PFF1YW50PjtcblxuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG1lc3NhZ2VzU3R5bGU6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdsb3RlTmFtZVRGJywgeyBzdGF0aWM6IGZhbHNlIH0pIGxvdGVOYW1lVEY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250ZW9TZXJ2aWNlOiBDb250ZW9TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBudWxsO1xuICAgIHRoaXMubG90ZVNlbGVjdGVkID0gbmV3IFF1YW50KCk7XG4gICAgdGhpcy5tZXNzYWdlc1N0eWxlID0gJ21lc3NhZ2VzT2snO1xuICAgIHRoaXMubG90ZVNlbGVjdGVkQXJyYXkgPSBuZXcgQXJyYXk8UXVhbnQ+KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvdGVOYW1lVEYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0sIDYwMCk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBvblZlclBpY2tpbmdCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcblxuICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZjUmVmLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBydXRhOiAndmVyUGlja2luZycsXG4gICAgICAgIGxvdGVTZWxlY3RlZEFycmF5OiB0aGlzLmxvdGVTZWxlY3RlZEFycmF5XG4gICAgICB9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2VcbiAgICAgIC5zaG93TW9kYWwoVHJhbnNmZXJlbmNpYU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgLnRoZW4oKHJlc3VsdDogQXJyYXk8UXVhbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMubG90ZVNlbGVjdGVkQXJyYXkgPSByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRmluYWxpemFyUGlja2luZ0J1dHRvblRhcCgpIHtcbiAgICBpZiAodGhpcy5sb3RlU2VsZWN0ZWRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgICB0aGlzLmNsZWFyRmllbGRzKCk7XG4gICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZjUmVmLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgcnV0YTogJ2ZpbmFsaXphclBpY2tpbmcnLFxuICAgICAgICAgIGxvdGVTZWxlY3RlZEFycmF5OiB0aGlzLmxvdGVTZWxlY3RlZEFycmF5XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX21vZGFsU2VydmljZVxuICAgICAgICAuc2hvd01vZGFsKFRyYW5zZmVyZW5jaWFNb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3VsdDogQXJyYXk8UXVhbnQ+KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb3RlU2VsZWN0ZWRBcnJheSA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnTm8gaGEgc2VsZWNpb25hZG8gbmluZ3VuIGxvdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbGFyUGlja2luZ0J1dHRvblRhcChpZDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IG5ldyBXZWFrUmVmKHRoaXMpLmdldCgpO1xuICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICB0aXRsZTogJ0NhbmNlbGFyIFBpY2tpbmcnLFxuICAgICAgbWVzc2FnZTogJ8K/Q29uZmlybWEgbGEgb3BlcmFjacOzbj8nLFxuICAgICAgb2tCdXR0b25UZXh0OiAnU2knLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZEFycmF5ID0gbmV3IEFycmF5PFF1YW50PigpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgICAgICBzZWxmLmNsZWFyRmllbGRzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblRleHRMb3RlQ2hhbmdlKGFyZ3MpIHtcbiAgICBjb25zdCBjb2RlOiBzdHJpbmcgPSBhcmdzLm9iamVjdFsndGV4dCddO1xuICAgIGlmIChjb2RlICYmIGNvZGUubGVuZ3RoID09PSAxMSkge1xuICAgICAgLy9DQU1CSU8gQlVTUVVFREEgMjAyMS0wMy0wMSAgUSA+PiAgIFNcbiAgICAgIGlmIChjb2RlLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICE9PSAnUycpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdTZXJpYWwgbm8gZXhpc3RlJyk7XG4gICAgICAgIHRoaXMubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNsZWFyRmllbGRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpZCA9IGNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIC8vQ0FNQklPIEJVU1FVRURBIDIwMjEtMDMtMDEgIGdldExvdGUoK2lkKSA+PiAgIGdldExvdEJ5TmFtZShjb2RlKVxuICAgICAgICB0aGlzLmNvbnRlb1NlcnZpY2UuZ2V0TG90QnlOYW1lKGNvZGUpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvdGVTZWxlY3RlZCA9IHJlc3BvbnNlLnJlc3VsdC5yZWNvcmRzWzBdO1xuICAgICAgICAgICAgdGhpcy5sb3RlU2VsZWN0ZWQubG90ZU5hbWUgPSB0aGlzLmxvdGVOYW1lO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9IHRoaXMubG90ZVNlbGVjdGVkLnByb2R1Y3RfaWRbMV07XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RRdHkgPSB0aGlzLmxvdGVTZWxlY3RlZC5xdWFudGl0eTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFVuaXQgPSB0aGlzLmxvdGVTZWxlY3RlZC5wcm9kdWN0X3VvbV9pZFsxXTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExvYyA9IHRoaXMubG90ZVNlbGVjdGVkLmxvY2F0aW9uX2lkWzFdO1xuICAgICAgICAgICAgLy90aGlzLnByb2R1Y3RMb3QgPSB0aGlzLmxvdGVTZWxlY3RlZC5sb3RfaWRbMV07XG4gICAgICAgICAgICAvL0NhbWJpbyBwYXJhIHBvYmxhciBlbCBjYW1wbyBpbmZlcmlvciBkZSBsb3RlLCBkZWJlIHF1ZWRhciBpZ3VhbCBhbCBzZXJpYWwgZXNjYW5lYWRvIHNlbGYubG90ZVNlbGVjdGVkLmxvdF9pZFsxXSA+PiAgc2VsZi5sb3RlTmFtZTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExvdCA9IHRoaXMubG90ZU5hbWU7XG4gICAgICAgICAgICB0aGlzLmxvdGVOYW1lU0wgPSB0aGlzLmxvdGVOYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5sb3RlU2VsZWN0ZWRBcnJheS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBlbC5pZCA9PT0gdGhpcy5sb3RlU2VsZWN0ZWQuaWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZpbHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5sb3RlU2VsZWN0ZWRBcnJheS5wdXNoKHRoaXMubG90ZVNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93T2tNZXNzYWdlKCdTZXJpYWwgYWdyZWdhZG8nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnU2VyaWFsIHlhIGhhIHNpZG8gYWdyZWdhZG8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdTZXJpYWwgbm8gZXhpc3RlJyk7XG4gICAgICAgICAgICB0aGlzLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICB0aXRsZTogJ01IIE3Ds3ZpbCcsXG4gICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICBtZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBzaG93RXJyb3JNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5tZXNzYWdlc1N0eWxlID0gJ21lc3NhZ2VzRXJyb3InO1xuICB9XG5cbiAgc2hvd09rTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubWVzc2FnZXNTdHlsZSA9ICdtZXNzYWdlc09rJztcbiAgfVxuXG4gIGNsZWFyRmllbGRzKCk6IHZvaWQge1xuICAgIHRoaXMubG90ZU5hbWUgPSBudWxsO1xuICAgIHRoaXMubG90ZVNlbGVjdGVkID0gbmV3IFF1YW50KCk7XG4gICAgdGhpcy5wcm9kdWN0UXR5ID0gMDtcbiAgICB0aGlzLnByb2R1Y3RRdHlOZXcgPSAwO1xuICAgIHRoaXMucHJvZHVjdE5hbWUgPSBudWxsO1xuICAgIHRoaXMucHJvZHVjdFVuaXQgPSBudWxsO1xuICAgIHRoaXMucHJvZHVjdExvYyA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0TG90ID0gbnVsbDtcbiAgICB0aGlzLmxvdGVOYW1lU0wgPSBudWxsO1xuICAgIHRoaXMubG90ZU5hbWVURi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUcmFuc2ZlcmVuY2lhTW9kYWxPcHRpb25zJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyYW5zZmVyZW5jaWEubW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyZW5jaWFNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBfYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX3BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt0aGlzLl9wYXJhbXMuY29udGV4dC5ydXRhXSwge1xuICAgICAgcmVsYXRpdmVUbzogdGhpcy5fYWN0aXZlUm91dGVcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNmZXJlbmNpYVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RyYW5zZmVyZW5jaWEtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNmZXJlbmNpYUNvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNmZXJlbmNpYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNmZXJlbmNpYU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi90cmFuc2ZlcmVuY2lhLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNraW5nVmVyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3BpY2tpbmcudmVyLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNraW5nRmluYWxpemFyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3BpY2tpbmcuZmluYWxpemFyLm1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNmZXJlbmNpYVJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUcmFuc2ZlcmVuY2lhQ29tcG9uZW50LFxuICAgIFRyYW5zZmVyZW5jaWFNb2RhbENvbXBvbmVudCxcbiAgICBQaWNraW5nVmVyTW9kYWxDb21wb25lbnQsXG4gICAgUGlja2luZ0ZpbmFsaXphck1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVHJhbnNmZXJlbmNpYU1vZGFsQ29tcG9uZW50LCBQaWNraW5nVmVyTW9kYWxDb21wb25lbnQsIFBpY2tpbmdGaW5hbGl6YXJNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJlbmNpYU1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=