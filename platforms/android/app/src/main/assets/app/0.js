(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

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

/***/ "./app/conteo/conteo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoRoutingModule", function() { return ConteoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _conteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/conteo/conteo.component.ts");
/* harmony import */ var _conteo_create_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/conteo/conteo.create.modal.component.ts");
/* harmony import */ var _conteo_ver_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/conteo/conteo.ver.modal.component.ts");





var routes = [
    {
        path: '',
        component: _conteo_component__WEBPACK_IMPORTED_MODULE_2__["ConteoComponent"],
        children: [
            {
                path: 'create',
                component: _conteo_create_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConteoCreateModalComponent"]
            },
            {
                path: 'view',
                component: _conteo_ver_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConteoVerModalComponent"]
            }
        ]
    }
];
var ConteoRoutingModule = /** @class */ (function () {
    function ConteoRoutingModule() {
    }
    ConteoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], ConteoRoutingModule);
    return ConteoRoutingModule;
}());



/***/ }),

/***/ "./app/conteo/conteo.component.css":
/***/ (function(module, exports) {

module.exports = ".site-item-header {\n  margin: 12 0;\n  font-size: 12;\n}\n\n.site-input-field {\n  font-size: 20;\n  margin-left: 0;\n  margin-top: 0;\n  word-wrap: normal;\n}"

/***/ }),

/***/ "./app/conteo/conteo.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n  <NavigationButton\n    ios:visibility=\"collapsed\"\n    icon=\"res://menu\"\n    (tap)=\"onDrawerButtonTap()\"\n  ></NavigationButton>\n  <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n  <ActionItem\n    icon=\"res://navigation/menu\"\n    android:visibility=\"collapsed\"\n    (tap)=\"onDrawerButtonTap()\"\n    ios.position=\"left\"\n  >\n  </ActionItem>\n  <Label class=\"action-bar-title\" text=\"Procesos\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView>\n    <GridLayout rows=\"auto, auto\">\n      <StackLayout class=\"site-main-content\" row=\"1\">\n        <Label class=\"site-item-header\" text=\"Procesos *\"></Label>\n        <ListPicker\n          [items]=\"procesosArray\"\n          textField=\"name\"\n          valueField=\"id\"\n          class=\"site-input-field\"\n          (selectedIndexChange)=\"onSelectedProcesoChanged($event)\"\n        ></ListPicker>\n\n        <StackLayout android:opacity=\"0\" class=\"line\"></StackLayout>\n        <Button\n          text=\"Iniciar Inventario\"\n          class=\"btn btn-primary\"\n          (tap)=\"onSaveButtonTap()\"\n        ></Button>\n      </StackLayout>\n    </GridLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/conteo/conteo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoComponent", function() { return ConteoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/services/conteo.service.ts");
/* harmony import */ var _shared_model_stock_inventory_process_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/model/stock/inventory.process.model.ts");
/* harmony import */ var _conteo_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/conteo/conteo.modal.component.ts");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__);






var ConteoComponent = /** @class */ (function () {
    function ConteoComponent(conteoService, _vcRef, _modalService) {
        this.conteoService = conteoService;
        this._vcRef = _vcRef;
        this._modalService = _modalService;
        // Use the component constructor to inject providers.
    }
    ConteoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.procesosArray = new Array();
        this.conteoService.getProcesos().subscribe(function (data) {
            if (data.error) {
                console.log(data);
            }
            else {
                _this.procesosArray.push(new _shared_model_stock_inventory_process_model__WEBPACK_IMPORTED_MODULE_3__["InventoryProcess"](null, '-- Seleccione --'));
                _this.procesosArray = _this.procesosArray.concat(data.result.records);
            }
            _this.isLoading = false;
        });
    };
    ConteoComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ConteoComponent.prototype.onSelectedProcesoChanged = function (event) {
        this.inventoryProcessSelected = this.procesosArray[event.value];
    };
    ConteoComponent.prototype.onSaveButtonTap = function () {
        if (this.inventoryProcessSelected && this.inventoryProcessSelected.id) {
            var options = {
                viewContainerRef: this._vcRef,
                context: {
                    inventoryProcessSelected: this.inventoryProcessSelected
                },
                fullscreen: true
            };
            this._modalService
                .showModal(_conteo_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConteoModalComponent"], options)
                .then(function (result) {
                console.log(result);
            });
        }
        else {
            this.alert('Debe seleccionar un proceso y una tarea');
        }
    };
    ConteoComponent.prototype.alert = function (message) {
        return alert({
            title: 'MH Móvil',
            okButtonText: 'OK',
            message: message
        });
    };
    ConteoComponent.ctorParameters = function () { return [
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_2__["ConteoService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"] }
    ]; };
    ConteoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Conteo',
            template: __importDefault(__webpack_require__("./app/conteo/conteo.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/conteo/conteo.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_2__["ConteoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"]])
    ], ConteoComponent);
    return ConteoComponent;
}());



/***/ }),

/***/ "./app/conteo/conteo.create.modal.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.input {\n  font-size: 14;\n}\n\n.site-template-image {\n  border-radius: 100;\n  margin: 8 16;\n  width: 60;\n  height: 60;\n}\n\n.site-template-title {\n  margin: 0 0 6 0;\n  font-size: 18;\n}\n\n.site-template-description {\n  font-size: 14;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding: 16;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding: 16;\n}\n\n.gridLayoutLayout {\n  background-color: white;\n}\n\n.markViewStackLayout {\n  background-color: blue;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.swipeTemplateLabel {\n  size: 20;\n}\n\n.deleteViewStackLayout {\n  background-color: red;\n  padding-left: 16;\n  padding-right: 16;\n}\n\n.listItemStackLayout {\n  background-color: white;\n  padding-left: 5;\n}\n\n.item-name {\n  color: #303c47;\n  font-family: 'Open Sans', 'OpenSans-Bold';\n  font-weight: bold;\n  padding: 2;\n}\n\n.messagesError {\n  font-size: 18;\n  color: red;\n  text-align: center;\n}\n\n.messagesOk {\n  font-size: 18;\n  color: blue;\n  text-align: center;\n}\n\n.input_ro {\n  font-size: 18;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/conteo/conteo.create.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <ActionItem\n    text=\"Regresar\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onClose()\"\n  >\n  </ActionItem>\n  <ActionItem\n    text=\"Últimas Transacciones\"\n    ios.position=\"popup\"\n    android.position=\"popup\"\n    (tap)=\"onViewTapButton()\"\n  >\n  </ActionItem>\n\n  <Label class=\"action-bar-title\" text=\"{{ title }}\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView>\n    <GridLayout rows=\"auto,auto,auto,auto,auto,auto,auto\" columns=\"*,*\">\n      <Label\n        row=\"0\"\n        colSpan=\"2\"\n        [ngClass]=\"messagesStyle\"\n        text=\"{{ message }}\"\n      ></Label>\n\n      <TextField\n        #loteNameTF\n        row=\"1\"\n        col=\"0\"\n        id=\"loteNameTF\"\n        [(ngModel)]=\"loteName\"\n        textWrap=\"true\"\n        class=\"input\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"allcharacters\"\n        hint=\"Escanee el serial\"\n        (textChange)=\"onTextLoteChange($event)\"\n      ></TextField>\n\n      <TextView\n        #locationNameSLTF=\"ngModel\"\n        row=\"1\"\n        col=\"1\"\n        hint=\"Serial Actual\"\n        autocorrect=\"false\"\n        class=\"input\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"loteNameSL\"\n        editable=\"false\"\n      ></TextView>\n\n      <Label row=\"2\" col=\"0\" class=\"input\" text=\"Nueva Cantidad *\"></Label>\n      <TextField\n        #productQtyTF=\"ngModel\"\n        row=\"2\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Digite la cantidad\"\n        keyboardType=\"number\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productQtyNew\"\n        returnKeyType=\"next\"\n        ngDefaultControl\n      ></TextField>\n\n      <TextField\n        #productUnitTF=\"ngModel\"\n        row=\"3\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Unidad del Producto\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productUnit\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productCurrentQtyTF=\"ngModel\"\n        row=\"3\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Cantidad Actual\"\n        keyboardType=\"number\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productQty\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLotTF=\"ngModel\"\n        row=\"4\"\n        col=\"0\"\n        class=\"input\"\n        hint=\"Lote / Serial\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLot\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextField\n        #productLocTF=\"ngModel\"\n        row=\"4\"\n        col=\"1\"\n        class=\"input\"\n        hint=\"Ubicación del Lote\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [(ngModel)]=\"productLoc\"\n        returnKeyType=\"next\"\n        editable=\"false\"\n      ></TextField>\n\n      <TextView\n        #productNameTF=\"ngModel\"\n        row=\"5\"\n        colSpan=\"2\"\n        style=\"margin-top: 15px\"\n        height=\"100px\"\n        hint=\"Nombre del Producto\"\n        returnKeyType=\"next\"\n        [(ngModel)]=\"productName\"\n        class=\"input\"\n        borderColor=\"#DEDEDE\"\n        borderWidth=\"1\"\n        editable=\"false\"\n      ></TextView>\n\n      <Button\n        row=\"6\"\n        colSpan=\"2\"\n        text=\"Aceptar\"\n        class=\"btn btn-primary\"\n        (tap)=\"onSaveButtonTap()\"\n      ></Button>\n    </GridLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/conteo/conteo.create.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCreateModalComponent", function() { return ConteoCreateModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/services/conteo.service.ts");
/* harmony import */ var _shared_model_stock_inventory_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/model/stock/inventory.model.ts");
/* harmony import */ var _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/model/stock/quant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");









var ConteoCreateModalComponent = /** @class */ (function () {
    function ConteoCreateModalComponent(_params, conteoService, router, _activeRoute) {
        this._params = _params;
        this.conteoService = conteoService;
        this.router = router;
        this._activeRoute = _activeRoute;
        this.inventoryProcessSelected = this._params.context.inventoryProcessSelected;
    }
    ConteoCreateModalComponent.prototype.ngOnInit = function () {
        this.locationName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_5__["Quant"]();
        this.locationSelected = null;
        this.messagesStyle = 'messagesOk';
        this.title = 'Inventario: Sin Información';
    };
    ConteoCreateModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loteNameTF.nativeElement.focus();
        }, 600);
    };
    ConteoCreateModalComponent.prototype.onClose = function () {
        this._params.closeCallback('return value');
    };
    ConteoCreateModalComponent.prototype.onViewTapButton = function () {
        if (this.inventorySelected && this.inventorySelected.id) {
            this.router.navigate(['../view'], {
                queryParams: {
                    inventorySelectedId: this.inventorySelected.id
                },
                relativeTo: this._activeRoute
            });
        }
        else {
            this.showErrorMessage('Debe seleccionar primero una ubicación');
        }
    };
    ConteoCreateModalComponent.prototype.onTextLoteChange = function (args) {
        var _this = this;
        var code = args.object['text'];
        var self = new WeakRef(this).get();
        if (code && code.length === 11) {
            if (code.substring(0, 1).toUpperCase() === 'X') {
                var id = code.substring(1);
                this.searchLocation(+id);
            }
            else {
                if (self.locationSelected == null) {
                    self.showErrorMessage('Debe seleccionar primero una ubicación');
                    self.clearFields();
                }
                else {
                    var id = code.substring(1);
                    self.isLoading = true; //CAMBIO 2021
                    //CAMBIO BUSQUEDA 2021-02-14  getLote(+id) >>   getLotByName(code)
                    this.conteoService.getLotByName(code).subscribe(function (response) {
                        self.isLoading = false;
                        if (response.result.length > 0) {
                            self.loteSelected = response.result.records[0];
                            if (self.loteSelected.location_id[0] !== self.locationSelected.id) {
                                self.showErrorMessage('Este lote no pertenece a esta ubicación!');
                                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["confirm"]({
                                    title: 'Este lote no pertenece a esta ubicación',
                                    message: '¿Desea transferir a la actual ubiación?',
                                    okButtonText: 'Si',
                                    cancelButtonText: 'No'
                                }).then(function (result) {
                                    if (result) {
                                        self.createTransfer();
                                    }
                                    else {
                                        self.clearFields();
                                    }
                                });
                            }
                            else {
                                self.productName = self.loteSelected.product_id[1];
                                self.productQty = self.loteSelected.quantity;
                                self.productUnit = self.loteSelected.product_uom_id[1];
                                self.productLoc = self.loteSelected.location_id[1];
                                //self.productLot = self.loteSelected.lot_id[1];
                                //Cambio para poblar el campo inferior de lote, debe quedar igual al serial escaneado self.loteSelected.lot_id[1] >>  self.loteName;
                                self.productLot = self.loteName;
                                self.loteNameSL = self.loteName;
                                self.showOkMessage('Serial encontrado');
                                self.saveLine();
                                _this.loteName = null;
                            }
                        }
                        else {
                            _this.showOkMessage('Serial no existe');
                            self.clearFields();
                        }
                    });
                }
            }
        }
    };
    ConteoCreateModalComponent.prototype.onSaveButtonTap = function () {
        this.updateLine();
    };
    ConteoCreateModalComponent.prototype.alert = function (message) {
        return alert({
            title: 'MH Móvil',
            okButtonText: 'OK',
            message: message
        });
    };
    ConteoCreateModalComponent.prototype.showErrorMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesError';
    };
    ConteoCreateModalComponent.prototype.showOkMessage = function (message) {
        this.message = message;
        this.messagesStyle = 'messagesOk';
    };
    ConteoCreateModalComponent.prototype.clearFields = function () {
        this.loteName = null;
        this.loteSelected = new _shared_model_stock_quant__WEBPACK_IMPORTED_MODULE_5__["Quant"]();
        this.productQty = 0;
        this.productQtyNew = 0;
        this.productName = null;
        this.productUnit = null;
        this.productLoc = null;
        this.productLot = null;
        this.loteNameSL = null;
        this.loteNameTF.nativeElement.focus();
    };
    ConteoCreateModalComponent.prototype.searchLocation = function (id) {
        var _this = this;
        var self = new WeakRef(this).get();
        this.isLoading = true;
        this.conteoService
            .getStockLocation(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (response) {
            if (response['result'].length > 0) {
                self.locationSelected = response['result'].records[0];
                self.locationName = _this.locationSelected.name;
                self.loteNameSL = self.loteName;
                self.loteName = null;
                self.showOkMessage('Ubicación encontrada');
            }
            else {
                self.loteName = null;
                self.showErrorMessage('No existe ubicación');
                self.isLoading = false;
            }
            return self.conteoService.getTareas(self.inventoryProcessSelected.id, self.locationSelected.id);
        }))
            .subscribe(function (response2) {
            if (response2.result.length > 0) {
                self.inventorySelected = response2.result.records[0];
                self.inventoryName = self.inventorySelected.name;
                self.title = 'Inventario: ' + self.inventorySelected.location_id[1] + '(' + self.inventorySelected.name + ')';
            }
            else {
                self.createTask();
            }
            self.isLoading = false;
        });
    };
    ConteoCreateModalComponent.prototype.createTask = function () {
        var _this = this;
        this.inventorySelected = new _shared_model_stock_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]();
        this.inventorySelected.inventory_process_id = [
            this.inventoryProcessSelected.id,
            this.inventoryProcessSelected.name
        ];
        this.inventorySelected.location_id = [
            this.locationSelected.id,
            this.locationSelected.display_name
        ];
        var taskName = 'INV-' +
            this.inventoryProcessSelected.id +
            '-' +
            this.locationSelected.id;
        this.inventorySelected.name = taskName;
        this.inventoryName = taskName;
        this.title = 'Inventario: ' + this.inventorySelected.location_id[1] + '(' +
            this.inventorySelected.name + ')';
        this.conteoService
            .createTarea(this.inventorySelected)
            .subscribe(function (response) {
            _this.inventorySelected.id = response.result;
            _this.conteoService
                .startTaskInventary(response.result)
                .subscribe(function (result) {
                _this.showOkMessage('Tarea Creada!');
                _this.loteName = null;
            });
        });
    };
    ConteoCreateModalComponent.prototype.saveLine = function () {
        if (this.loteSelected.id && this.productQty) {
            var self_1 = new WeakRef(this).get();
            this.conteoService
                .insertInventaryLine(this.inventorySelected.id, this.loteSelected.product_id[0], this.inventorySelected.location_id[0], 
            // CAMBIO LOT_ID[0] POR ID
            //this.loteSelected.lot_id[0],
            this.loteSelected.id, this.productQty, this.loteSelected.product_uom_id[0])
                .subscribe(function (response) {
                if (response.result) {
                    self_1.loteName = null;
                    self_1.loteSelected.lineId = response.result;
                    self_1.showOkMessage('Serial ingresado correctamente');
                }
                else {
                    self_1.showErrorMessage('El Serial ya fue ingresado!');
                }
            });
        }
        else {
            this.showErrorMessage('Todos los campos son obligatorios');
        }
    };
    ConteoCreateModalComponent.prototype.updateLine = function () {
        if (this.loteSelected.id && this.productQtyNew) {
            var self_2 = new WeakRef(this).get();
            this.conteoService
                .updateInventaryLine(this.inventorySelected.id, this.loteSelected.lineId, 
            // CAMBIO LOT_ID[0] POR ID
            //this.loteSelected.lot_id[0],
            this.loteSelected.id, this.productQtyNew)
                .subscribe(function (response) {
                if (response.result) {
                    self_2.loteName = null;
                    self_2.clearFields();
                    self_2.showOkMessage('Serial ingresado correctamente');
                }
                else {
                    self_2.showErrorMessage('El Serial ya fue ingresado!');
                }
            });
        }
        else {
            this.showErrorMessage('Todos los campos son obligatorios');
        }
    };
    ConteoCreateModalComponent.prototype.createTransfer = function () {
        var _this = this;
        this.isLoading = true;
        var self = new WeakRef(this).get();
        this.conteoService.getParentsStockLocation([self.loteSelected.location_id[0]]).subscribe(function (response) {
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
                        var options2 = {
                            title: 'Conteo',
                            message: 'Transferencia Realizada!',
                            okButtonText: 'Aceptar'
                        };
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"](options2).then(function () {
                            self.clearFields();
                            self.loteName = null;
                        });
                    }
                    else {
                        _this.showErrorMessage('Error al guardar la detalle!');
                    }
                });
            });
        });
    };
    ConteoCreateModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"] },
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_3__["ConteoService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loteNameTF', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConteoCreateModalComponent.prototype, "loteNameTF", void 0);
    ConteoCreateModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ConteoCreateModal',
            template: __importDefault(__webpack_require__("./app/conteo/conteo.create.modal.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/conteo/conteo.create.modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"],
            _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_3__["ConteoService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], ConteoCreateModalComponent);
    return ConteoCreateModalComponent;
}());



/***/ }),

/***/ "./app/conteo/conteo.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>"

/***/ }),

/***/ "./app/conteo/conteo.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoModalComponent", function() { return ConteoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);



var ConteoModalComponent = /** @class */ (function () {
    function ConteoModalComponent(_routerExtensions, _activeRoute) {
        this._routerExtensions = _routerExtensions;
        this._activeRoute = _activeRoute;
    }
    ConteoModalComponent.prototype.ngOnInit = function () {
        this._routerExtensions.navigate(['create'], {
            relativeTo: this._activeRoute
        });
    };
    ConteoModalComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ConteoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ConteoModalOptions',
            template: __importDefault(__webpack_require__("./app/conteo/conteo.modal.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ConteoModalComponent);
    return ConteoModalComponent;
}());



/***/ }),

/***/ "./app/conteo/conteo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoModule", function() { return ConteoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _conteo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/conteo/conteo-routing.module.ts");
/* harmony import */ var _conteo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/conteo/conteo.component.ts");
/* harmony import */ var _conteo_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/conteo/conteo.modal.component.ts");
/* harmony import */ var _conteo_create_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/conteo/conteo.create.modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _conteo_ver_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/conteo/conteo.ver.modal.component.ts");









var ConteoModule = /** @class */ (function () {
    function ConteoModule() {
    }
    ConteoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _conteo_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConteoRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [
                _conteo_component__WEBPACK_IMPORTED_MODULE_3__["ConteoComponent"],
                _conteo_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConteoModalComponent"],
                _conteo_create_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConteoCreateModalComponent"],
                _conteo_ver_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConteoVerModalComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            entryComponents: [_conteo_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConteoModalComponent"], _conteo_ver_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConteoVerModalComponent"]]
        })
    ], ConteoModule);
    return ConteoModule;
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

/***/ "./app/conteo/conteo.ver.modal.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\n  font-size: 14;\n}\n\n.card {\n  background-color: #fff;\n  color: #4d4d4d;\n  margin: 15 15 0;\n}\n\n.card-layout {\n  padding: 20;\n}\n\n.card-layout .h1 {\n  margin-bottom: 15;\n}\n"

/***/ }),

/***/ "./app/conteo/conteo.ver.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n  <ActionItem\n    (tap)=\"onClose()\"\n    ios.systemIcon=\"1\"\n    ios.position=\"right\"\n    android.systemIcon=\"ic_menu_back\"\n  ></ActionItem>\n\n  <Label class=\"action-bar-title\" text=\"Últimas Transacciones\"></Label>\n</ActionBar>\n\n<GridLayout>\n  <ScrollView class=\"page\">\n    <StackLayout>\n      <CardView\n        *ngFor=\"let item of loteSelectedArray\"\n        class=\"card\"\n        elevation=\"40\"\n        radius=\"10\"\n        ios:shadowRadius=\"3\"\n      >\n        <StackLayout class=\"card-layout\">\n          <Label class=\"h3\" [text]=\"item.loteName\"></Label>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"item.product_id[1]\"\n          ></Label>\n          <Label\n            class=\"body\"\n            textWrap=\"true\"\n            [text]=\"'Cantidad: ' + item.product_qty\"\n          ></Label>\n        </StackLayout>\n      </CardView>\n    </StackLayout>\n  </ScrollView>\n  <ActivityIndicator\n    verticalAlignment=\"center\"\n    horizontalAlignment=\"center\"\n    [busy]=\"isLoading\"\n  ></ActivityIndicator>\n  <OfflineNotification></OfflineNotification>\n</GridLayout>\n"

/***/ }),

/***/ "./app/conteo/conteo.ver.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoVerModalComponent", function() { return ConteoVerModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/@nstudio/nativescript-cardview/cardview.js");
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/router-extensions.js");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/services/conteo.service.ts");






Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__["registerElement"])('CardView', function () { return _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_2__["CardView"]; });
var ConteoVerModalComponent = /** @class */ (function () {
    function ConteoVerModalComponent(route, router, conteoService) {
        this.route = route;
        this.router = router;
        this.conteoService = conteoService;
    }
    ConteoVerModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = new WeakRef(this).get();
        this.messagesStyle = 'messagesOk';
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.inventorySelectedId = +params.inventorySelectedId;
            _this.conteoService
                .getInventoryLine(_this.inventorySelectedId)
                .subscribe(function (response) {
                self.loteSelectedArray = response.result.records;
            });
        });
    };
    ConteoVerModalComponent.prototype.onClose = function () {
        this.router.back();
    };
    ConteoVerModalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"] },
        { type: _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_5__["ConteoService"] }
    ]; };
    ConteoVerModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ConteoVerModal',
            template: __importDefault(__webpack_require__("./app/conteo/conteo.ver.modal.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/conteo/conteo.ver.modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"],
            _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_5__["ConteoService"]])
    ], ConteoVerModalComponent);
    return ConteoVerModalComponent;
}());



/***/ }),

/***/ "./app/shared/model/stock/inventory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inventory", function() { return Inventory; });
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());



/***/ }),

/***/ "./app/shared/model/stock/inventory.process.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryProcess", function() { return InventoryProcess; });
var InventoryProcess = /** @class */ (function () {
    function InventoryProcess(id, name) {
        this.id = id;
        this.name = name;
    }
    return InventoryProcess;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LWNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3L2NhcmR2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRlby9jb250ZW8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRlby9jb250ZW8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLmNyZWF0ZS5tb2RhbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLmNyZWF0ZS5tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGVvL2NvbnRlby5jcmVhdGUubW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLm1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLm1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGVvL2NvbnRlby5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRlby9jb250ZW8udmVyLm1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRlby9jb250ZW8udmVyLm1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb250ZW8vY29udGVvLnZlci5tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9tb2RlbC9zdG9jay9pbnZlbnRvcnkubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9tb2RlbC9zdG9jay9pbnZlbnRvcnkucHJvY2Vzcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL21vZGVsL3N0b2NrL3F1YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLGlEQUF3QjtBQUM5QyxxQkFBcUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDL0QsYUFBYSxtQkFBTyxDQUFDLHVEQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHlCQUF5QjtBQUMvRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlDQUFpQztBQUN2RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQsQ0FBQztBQUNEOzs7Ozs7OztBQ3JEQSw0RkFBOEMsY0FBYztBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyw2REFBOEI7QUFDeEQsY0FBYyxtQkFBTyxDQUFDLGlEQUF3QjtBQUM5Qyx3QkFBd0IsbUJBQU8sQ0FBQyx5REFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Z0I7WUFDVCw2RUFBYTtPQWIzQix1QkFBdUIsQ0FvQ25DO0lBQUQsOEJBQUM7Q0FBQTtBQXBDbUM7Ozs7Ozs7OztBQ2pCcEM7QUFBQTtBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBO0lBTUUsMEJBQVksRUFBVSxFQUFFLElBQVk7UUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0lBQUE7SUFVQSxDQUFDO0lBQUQsWUFBQztBQUFELENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7XG52YXIgY29udGVudF92aWV3XzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7XG52YXIgdmlld18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpO1xuZXhwb3J0cy5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSA9IHZpZXdfMS5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eTtcbmV4cG9ydHMuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHkgPSB2aWV3XzEuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHk7XG52YXIgQ2FyZFZpZXdDb21tb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXJkVmlld0NvbW1vbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYXJkVmlld0NvbW1vbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQ2FyZFZpZXdDb21tb247XG59KGNvbnRlbnRfdmlld18xLkNvbnRlbnRWaWV3KSk7XG5leHBvcnRzLkNhcmRWaWV3Q29tbW9uID0gQ2FyZFZpZXdDb21tb247XG5leHBvcnRzLnJhZGl1c1Byb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAncmFkaXVzJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5yYWRpdXNQcm9wZXJ0eS5yZWdpc3RlcihDYXJkVmlld0NvbW1vbik7XG5leHBvcnRzLmVsZXZhdGlvblByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnZWxldmF0aW9uJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5lbGV2YXRpb25Qcm9wZXJ0eS5yZWdpc3RlcihDYXJkVmlld0NvbW1vbik7XG5leHBvcnRzLnJpcHBsZVByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAncmlwcGxlJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnOyB9XG59KTtcbmV4cG9ydHMucmlwcGxlUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dSYWRpdXNQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd1JhZGl1cycsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93UmFkaXVzUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93T2Zmc2V0V2lkdGgnLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICt2YWx1ZTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd09mZnNldFdpZHRoUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRIZWlnaHRQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd09mZnNldEhlaWdodCcsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93T2Zmc2V0SGVpZ2h0UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dDb2xvclByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93Q29sb3InLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG5ldyBjb2xvcl8xLkNvbG9yKHZhbHVlKTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd0NvbG9yUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkgPSBuZXcgY29udGVudF92aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6ICdzaGFkb3dPcGFjaXR5JyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpO1xudmFyIGNhcmR2aWV3X2NvbW1vbl8xID0gcmVxdWlyZShcIi4vY2FyZHZpZXctY29tbW9uXCIpO1xudmFyIENhcmRWaWV3TmFtZXNwYWNlID0gdXNlQW5kcm9pZFgoKSA/IGdsb2JhbC5hbmRyb2lkeC5jYXJkdmlldy53aWRnZXQgOiBhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0O1xudmFyIEFwcENvbXBhdFJlc291cmNlc05hbWVzcGFjZSA9IHVzZUFuZHJvaWRYKCkgPyAnYW5kcm9pZHguYXBwY29tcGF0JyA6ICdhbmRyb2lkLnN1cHBvcnQudjcuYXBwY29tcGF0JztcbmZ1bmN0aW9uIHVzZUFuZHJvaWRYKCkge1xuICAgIHJldHVybiBnbG9iYWwuYW5kcm9pZHggJiYgZ2xvYmFsLmFuZHJvaWR4LmNhcmR2aWV3O1xufVxudmFyIENhcmRWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FyZFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2FyZFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcmRWaWV3LnByb3RvdHlwZSwgXCJhbmRyb2lkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVWaWV3O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEucmFkaXVzUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0UmFkaXVzKHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5lbGV2YXRpb25Qcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYXJkRWxldmF0aW9uKHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5yaXBwbGVQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDbGlja2FibGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlc1VyaSA9IEFwcENvbXBhdFJlc291cmNlc05hbWVzcGFjZSArICcuUiRhdHRyJztcbiAgICAgICAgICAgIHZhciBhdHRyID0gamF2YS5sYW5nLkNsYXNzLmZvck5hbWUocmVzb3VyY2VzVXJpKTtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGF0dHIuZ2V0RmllbGQoJ3NlbGVjdGFibGVJdGVtQmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgaWYgKGZpZWxkICYmIGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IDIzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc0lkID0gZmllbGQuZ2V0SW50KG51bGwpO1xuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IEFycmF5LmNyZWF0ZSgnaW50JywgMSk7XG4gICAgICAgICAgICAgICAgYXR0cnNbMF0gPSByZXNJZDtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHkgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZWRWYWx1ZSA9IGFjdGl2aXR5Lm9idGFpblN0eWxlZEF0dHJpYnV0ZXMoYXR0cnMpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEl0ZW1EcmF3YWJsZSA9IHR5cGVkVmFsdWUuZ2V0RHJhd2FibGUoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldEZvcmVncm91bmQoc2VsZWN0ZWRJdGVtRHJhd2FibGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDbGlja2FibGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZS5jcmVhdGVOYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IENhcmRWaWV3TmFtZXNwYWNlLkNhcmRWaWV3KHRoaXMuX2NvbnRleHQpO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlLmluaXROYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9hbmRyb2lkVmlld0lkID0gYW5kcm9pZC52aWV3LlZpZXcuZ2VuZXJhdGVWaWV3SWQoKTtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldElkKHRoaXMuX2FuZHJvaWRWaWV3SWQpO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlW2NhcmR2aWV3X2NvbW1vbl8xLmJhY2tncm91bmRDb2xvclByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYXJkQmFja2dyb3VuZENvbG9yKHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5hbmRyb2lkIDogbmV3IGNvbG9yXzEuQ29sb3IoJyNGRkZGRkYnKS5hbmRyb2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXRpdmVTY3JpcHQtQ2FyZHZpZXcgLS0tIGludmFsaWQgYmFja2dyb3VuZC1jb2xvciB2YWx1ZSAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5iYWNrZ3JvdW5kSW50ZXJuYWxQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2FyZEJhY2tncm91bmRDb2xvcihuZXcgY29sb3JfMS5Db2xvcih2YWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gdmFsdWUuY29sb3IgKyAnJyA6ICcjRkZGRkZGJykuYW5kcm9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF0aXZlU2NyaXB0LUNhcmR2aWV3IC0tLSBpbnZhbGlkIGJhY2tncm91bmQtY29sb3IgdmFsdWU6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FyZFZpZXc7XG59KGNhcmR2aWV3X2NvbW1vbl8xLkNhcmRWaWV3Q29tbW9uKSk7XG5leHBvcnRzLkNhcmRWaWV3ID0gQ2FyZFZpZXc7XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENvbnRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW9DcmVhdGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVvLmNyZWF0ZS5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVvVmVyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlby52ZXIubW9kYWwuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IENvbnRlb0NvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnY3JlYXRlJyxcbiAgICAgICAgY29tcG9uZW50OiBDb250ZW9DcmVhdGVNb2RhbENvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3ZpZXcnLFxuICAgICAgICBjb21wb25lbnQ6IENvbnRlb1Zlck1vZGFsQ29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW9Sb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5zaXRlLWl0ZW0taGVhZGVyIHtcXG4gIG1hcmdpbjogMTIgMDtcXG4gIGZvbnQtc2l6ZTogMTI7XFxufVxcblxcbi5zaXRlLWlucHV0LWZpZWxkIHtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICA8IS0tIFxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCJcXG4gICAgaWNvbj1cXFwicmVzOi8vbWVudVxcXCJcXG4gICAgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPCEtLSBcXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gIDxBY3Rpb25JdGVtXFxuICAgIGljb249XFxcInJlczovL25hdmlnYXRpb24vbWVudVxcXCJcXG4gICAgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiXFxuICAgICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiXFxuICA+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIlByb2Nlc29zXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0PlxcbiAgPFNjcm9sbFZpZXc+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2l0ZS1tYWluLWNvbnRlbnRcXFwiIHJvdz1cXFwiMVxcXCI+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInNpdGUtaXRlbS1oZWFkZXJcXFwiIHRleHQ9XFxcIlByb2Nlc29zICpcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGlzdFBpY2tlclxcbiAgICAgICAgICBbaXRlbXNdPVxcXCJwcm9jZXNvc0FycmF5XFxcIlxcbiAgICAgICAgICB0ZXh0RmllbGQ9XFxcIm5hbWVcXFwiXFxuICAgICAgICAgIHZhbHVlRmllbGQ9XFxcImlkXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwic2l0ZS1pbnB1dC1maWVsZFxcXCJcXG4gICAgICAgICAgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVxcXCJvblNlbGVjdGVkUHJvY2Vzb0NoYW5nZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgID48L0xpc3RQaWNrZXI+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQgYW5kcm9pZDpvcGFjaXR5PVxcXCIwXFxcIiBjbGFzcz1cXFwibGluZVxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgIDxCdXR0b25cXG4gICAgICAgICAgdGV4dD1cXFwiSW5pY2lhciBJbnZlbnRhcmlvXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICAgICAodGFwKT1cXFwib25TYXZlQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICA+PC9CdXR0b24+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbiAgPEFjdGl2aXR5SW5kaWNhdG9yXFxuICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgW2J1c3ldPVxcXCJpc0xvYWRpbmdcXFwiXFxuICA+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gIDxPZmZsaW5lTm90aWZpY2F0aW9uPjwvT2ZmbGluZU5vdGlmaWNhdGlvbj5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IENvbnRlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY29udGVvLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52ZW50b3J5UHJvY2VzcyB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9pbnZlbnRvcnkucHJvY2Vzcy5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVvLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBNb2RhbERpYWxvZ09wdGlvbnMsXG4gIE1vZGFsRGlhbG9nU2VydmljZVxufSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdDb250ZW8nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGVvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGVvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgcHJvY2Vzb3NBcnJheTogQXJyYXk8SW52ZW50b3J5UHJvY2Vzcz47XG4gIGludmVudG9yeVByb2Nlc3NTZWxlY3RlZDogSW52ZW50b3J5UHJvY2VzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbnRlb1NlcnZpY2U6IENvbnRlb1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2VcbiAgKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnByb2Nlc29zQXJyYXkgPSBuZXcgQXJyYXk8SW52ZW50b3J5UHJvY2Vzcz4oKTtcbiAgICB0aGlzLmNvbnRlb1NlcnZpY2UuZ2V0UHJvY2Vzb3MoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb2Nlc29zQXJyYXkucHVzaChuZXcgSW52ZW50b3J5UHJvY2VzcyhudWxsLCAnLS0gU2VsZWNjaW9uZSAtLScpKTtcbiAgICAgICAgdGhpcy5wcm9jZXNvc0FycmF5ID0gdGhpcy5wcm9jZXNvc0FycmF5LmNvbmNhdChkYXRhLnJlc3VsdC5yZWNvcmRzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBvblNlbGVjdGVkUHJvY2Vzb0NoYW5nZWQoZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmludmVudG9yeVByb2Nlc3NTZWxlY3RlZCA9IHRoaXMucHJvY2Vzb3NBcnJheVtldmVudC52YWx1ZV07XG4gIH1cblxuICBvblNhdmVCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkICYmIHRoaXMuaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkLmlkKSB7XG4gICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZjUmVmLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkOiB0aGlzLmludmVudG9yeVByb2Nlc3NTZWxlY3RlZFxuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2VcbiAgICAgICAgLnNob3dNb2RhbChDb250ZW9Nb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWxlcnQoJ0RlYmUgc2VsZWNjaW9uYXIgdW4gcHJvY2VzbyB5IHVuYSB0YXJlYScpO1xuICAgIH1cbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICB0aXRsZTogJ01IIE3Ds3ZpbCcsXG4gICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBY3Rpb25CYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLWltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDtcXG4gIG1hcmdpbjogOCAxNjtcXG4gIHdpZHRoOiA2MDtcXG4gIGhlaWdodDogNjA7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLXRpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDYgMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxufVxcblxcbi5zaXRlLXRlbXBsYXRlLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiAxNjtcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAxNjtcXG59XFxuXFxuLmdyaWRMYXlvdXRMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxufVxcblxcbi5zd2lwZVRlbXBsYXRlTGFiZWwge1xcbiAgc2l6ZTogMjA7XFxufVxcblxcbi5kZWxldGVWaWV3U3RhY2tMYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZy1sZWZ0OiAxNjtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbn1cXG5cXG4ubGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogNTtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICBjb2xvcjogIzMwM2M0NztcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ09wZW5TYW5zLUJvbGQnO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAyO1xcbn1cXG5cXG4ubWVzc2FnZXNFcnJvciB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lc3NhZ2VzT2sge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXRfcm8ge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gIDxBY3Rpb25JdGVtXFxuICAgIHRleHQ9XFxcIlJlZ3Jlc2FyXFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uQ2xvc2UoKVxcXCJcXG4gID5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxBY3Rpb25JdGVtXFxuICAgIHRleHQ9XFxcIsOabHRpbWFzIFRyYW5zYWNjaW9uZXNcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicG9wdXBcXFwiXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIlxcbiAgICAodGFwKT1cXFwib25WaWV3VGFwQnV0dG9uKClcXFwiXFxuICA+XFxuICA8L0FjdGlvbkl0ZW0+XFxuXFxuICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcInt7IHRpdGxlIH19XFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0PlxcbiAgPFNjcm9sbFZpZXc+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sYXV0byxhdXRvLGF1dG8sYXV0byxhdXRvLGF1dG9cXFwiIGNvbHVtbnM9XFxcIiosKlxcXCI+XFxuICAgICAgPExhYmVsXFxuICAgICAgICByb3c9XFxcIjBcXFwiXFxuICAgICAgICBjb2xTcGFuPVxcXCIyXFxcIlxcbiAgICAgICAgW25nQ2xhc3NdPVxcXCJtZXNzYWdlc1N0eWxlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3sgbWVzc2FnZSB9fVxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjbG90ZU5hbWVURlxcbiAgICAgICAgcm93PVxcXCIxXFxcIlxcbiAgICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgaWQ9XFxcImxvdGVOYW1lVEZcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwibG90ZU5hbWVcXFwiXFxuICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcImFsbGNoYXJhY3RlcnNcXFwiXFxuICAgICAgICBoaW50PVxcXCJFc2NhbmVlIGVsIHNlcmlhbFxcXCJcXG4gICAgICAgICh0ZXh0Q2hhbmdlKT1cXFwib25UZXh0TG90ZUNoYW5nZSgkZXZlbnQpXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dFZpZXdcXG4gICAgICAgICNsb2NhdGlvbk5hbWVTTFRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIxXFxcIlxcbiAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgaGludD1cXFwiU2VyaWFsIEFjdHVhbFxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwibG90ZU5hbWVTTFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0Vmlldz5cXG5cXG4gICAgICA8TGFiZWwgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdGV4dD1cXFwiTnVldmEgQ2FudGlkYWQgKlxcXCI+PC9MYWJlbD5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdFF0eVRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCIyXFxcIlxcbiAgICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgaGludD1cXFwiRGlnaXRlIGxhIGNhbnRpZGFkXFxcIlxcbiAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3RRdHlOZXdcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgbmdEZWZhdWx0Q29udHJvbFxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICAjcHJvZHVjdFVuaXRURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiM1xcXCJcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIlVuaWRhZCBkZWwgUHJvZHVjdG9cXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3RVbml0XFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI3Byb2R1Y3RDdXJyZW50UXR5VEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjNcXFwiXFxuICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBoaW50PVxcXCJDYW50aWRhZCBBY3R1YWxcXFwiXFxuICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdFF0eVxcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgICNwcm9kdWN0TG90VEY9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICByb3c9XFxcIjRcXFwiXFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBoaW50PVxcXCJMb3RlIC8gU2VyaWFsXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJwcm9kdWN0TG90XFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgPFRleHRGaWVsZFxcbiAgICAgICAgI3Byb2R1Y3RMb2NURj1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgIHJvdz1cXFwiNFxcXCJcXG4gICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIlViaWNhY2nDs24gZGVsIExvdGVcXFwiXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3RMb2NcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgZWRpdGFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgID48L1RleHRGaWVsZD5cXG5cXG4gICAgICA8VGV4dFZpZXdcXG4gICAgICAgICNwcm9kdWN0TmFtZVRGPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgcm93PVxcXCI1XFxcIlxcbiAgICAgICAgY29sU3Bhbj1cXFwiMlxcXCJcXG4gICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxNXB4XFxcIlxcbiAgICAgICAgaGVpZ2h0PVxcXCIxMDBweFxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIk5vbWJyZSBkZWwgUHJvZHVjdG9cXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInByb2R1Y3ROYW1lXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgYm9yZGVyQ29sb3I9XFxcIiNERURFREVcXFwiXFxuICAgICAgICBib3JkZXJXaWR0aD1cXFwiMVxcXCJcXG4gICAgICAgIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICA+PC9UZXh0Vmlldz5cXG5cXG4gICAgICA8QnV0dG9uXFxuICAgICAgICByb3c9XFxcIjZcXFwiXFxuICAgICAgICBjb2xTcGFuPVxcXCIyXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiQWNlcHRhclxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgICAodGFwKT1cXFwib25TYXZlQnV0dG9uVGFwKClcXFwiXFxuICAgICAgPjwvQnV0dG9uPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L1Njcm9sbFZpZXc+XFxuICA8QWN0aXZpdHlJbmRpY2F0b3JcXG4gICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCJcXG4gID48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgPE9mZmxpbmVOb3RpZmljYXRpb24+PC9PZmZsaW5lTm90aWZpY2F0aW9uPlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFNlbGYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcbmltcG9ydCB7IE5vdGUgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvbm90ZS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NvbnRlby5zZXJ2aWNlJztcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9pbnZlbnRvcnkubW9kZWwnO1xuaW1wb3J0IHsgUXVhbnQgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvc3RvY2svcXVhbnQnO1xuaW1wb3J0IHsgU3RvY2tMb2NhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9zdG9jay9sb2NhdGlvbic7XG5pbXBvcnQgeyBJbnZlbnRvcnlQcm9jZXNzIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3N0b2NrL2ludmVudG9yeS5wcm9jZXNzLm1vZGVsJztcbmltcG9ydCB7IGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ29udGVvQ3JlYXRlTW9kYWwnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGVvLmNyZWF0ZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRlby5jcmVhdGUubW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlb0NyZWF0ZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBub3Rlc0FycmF5OiBBcnJheTxOb3RlPjtcbiAgcHJvY2Vzb0lkOiBudW1iZXI7XG4gIHByb2R1Y3ROYW1lOiBzdHJpbmc7XG4gIHByb2R1Y3RRdHlOZXc6IG51bWJlcjtcbiAgcHJvZHVjdFF0eTogbnVtYmVyO1xuICBwcm9kdWN0VW5pdDogc3RyaW5nO1xuICBwcm9kdWN0TG9jOiBzdHJpbmc7XG4gIHByb2R1Y3RMb3Q6IHN0cmluZztcbiAgbG9jYXRpb25OYW1lOiBzdHJpbmc7XG4gIGxvdGVOYW1lOiBzdHJpbmc7XG4gIGxvdGVOYW1lU0w6IHN0cmluZztcbiAgaW52ZW50b3J5TmFtZTogc3RyaW5nO1xuXG4gIGxvY2F0aW9uU2VsZWN0ZWQ6IFN0b2NrTG9jYXRpb247XG4gIGludmVudG9yeVNlbGVjdGVkOiBJbnZlbnRvcnk7XG4gIGxvdGVTZWxlY3RlZDogUXVhbnQ7XG4gIGludmVudG9yeVByb2Nlc3NTZWxlY3RlZDogSW52ZW50b3J5UHJvY2VzcztcblxuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG1lc3NhZ2VzU3R5bGU6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdsb3RlTmFtZVRGJywgeyBzdGF0aWM6IGZhbHNlIH0pIGxvdGVOYW1lVEY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICBwcml2YXRlIGNvbnRlb1NlcnZpY2U6IENvbnRlb1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBfYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgIHRoaXMuaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkID0gdGhpcy5fcGFyYW1zLmNvbnRleHQuaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBudWxsO1xuICAgIHRoaXMubG90ZVNlbGVjdGVkID0gbmV3IFF1YW50KCk7XG4gICAgdGhpcy5sb2NhdGlvblNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VzU3R5bGUgPSAnbWVzc2FnZXNPayc7XG4gICAgdGhpcy50aXRsZSA9ICdJbnZlbnRhcmlvOiBTaW4gSW5mb3JtYWNpw7NuJztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG90ZU5hbWVURi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSwgNjAwKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soJ3JldHVybiB2YWx1ZScpO1xuICB9XG5cbiAgb25WaWV3VGFwQnV0dG9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludmVudG9yeVNlbGVjdGVkICYmIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQuaWQpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vdmlldyddLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgaW52ZW50b3J5U2VsZWN0ZWRJZDogdGhpcy5pbnZlbnRvcnlTZWxlY3RlZC5pZFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLl9hY3RpdmVSb3V0ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnRGViZSBzZWxlY2Npb25hciBwcmltZXJvIHVuYSB1YmljYWNpw7NuJyk7XG4gICAgfVxuICB9XG5cbiAgb25UZXh0TG90ZUNoYW5nZShhcmdzKSB7XG4gICAgY29uc3QgY29kZTogc3RyaW5nID0gYXJncy5vYmplY3RbJ3RleHQnXTtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgaWYgKGNvZGUgJiYgY29kZS5sZW5ndGggPT09IDExKSB7XG4gICAgICBpZiAoY29kZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSA9PT0gJ1gnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHRoaXMuc2VhcmNoTG9jYXRpb24oK2lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZWxmLmxvY2F0aW9uU2VsZWN0ZWQgPT0gbnVsbCkge1xuICAgICAgICAgIHNlbGYuc2hvd0Vycm9yTWVzc2FnZSgnRGViZSBzZWxlY2Npb25hciBwcmltZXJvIHVuYSB1YmljYWNpw7NuJyk7XG4gICAgICAgICAgc2VsZi5jbGVhckZpZWxkcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSB0cnVlOyAgLy9DQU1CSU8gMjAyMVxuICAgICAgICAgIC8vQ0FNQklPIEJVU1FVRURBIDIwMjEtMDItMTQgIGdldExvdGUoK2lkKSA+PiAgIGdldExvdEJ5TmFtZShjb2RlKVxuICAgICAgICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRMb3RCeU5hbWUoY29kZSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkID0gcmVzcG9uc2UucmVzdWx0LnJlY29yZHNbMF07XG5cbiAgICAgICAgICAgICAgaWYgKHNlbGYubG90ZVNlbGVjdGVkLmxvY2F0aW9uX2lkWzBdICE9PSBzZWxmLmxvY2F0aW9uU2VsZWN0ZWQuaWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dFcnJvck1lc3NhZ2UoJ0VzdGUgbG90ZSBubyBwZXJ0ZW5lY2UgYSBlc3RhIHViaWNhY2nDs24hJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXN0ZSBsb3RlIG5vIHBlcnRlbmVjZSBhIGVzdGEgdWJpY2FjacOzbicsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnwr9EZXNlYSB0cmFuc2ZlcmlyIGEgbGEgYWN0dWFsIHViaWFjacOzbj8nLFxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnU2knLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZVRyYW5zZmVyKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyRmllbGRzKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9kdWN0TmFtZSA9IHNlbGYubG90ZVNlbGVjdGVkLnByb2R1Y3RfaWRbMV07XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9kdWN0UXR5ID0gc2VsZi5sb3RlU2VsZWN0ZWQucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9kdWN0VW5pdCA9IHNlbGYubG90ZVNlbGVjdGVkLnByb2R1Y3RfdW9tX2lkWzFdO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjdExvYyA9IHNlbGYubG90ZVNlbGVjdGVkLmxvY2F0aW9uX2lkWzFdO1xuICAgICAgICAgICAgICAgIC8vc2VsZi5wcm9kdWN0TG90ID0gc2VsZi5sb3RlU2VsZWN0ZWQubG90X2lkWzFdO1xuICAgICAgICAgICAgICAgIC8vQ2FtYmlvIHBhcmEgcG9ibGFyIGVsIGNhbXBvIGluZmVyaW9yIGRlIGxvdGUsIGRlYmUgcXVlZGFyIGlndWFsIGFsIHNlcmlhbCBlc2NhbmVhZG8gc2VsZi5sb3RlU2VsZWN0ZWQubG90X2lkWzFdID4+ICBzZWxmLmxvdGVOYW1lO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjdExvdCA9IHNlbGYubG90ZU5hbWU7XG4gICAgICAgICAgICAgICAgc2VsZi5sb3RlTmFtZVNMID0gc2VsZi5sb3RlTmFtZTtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dPa01lc3NhZ2UoJ1NlcmlhbCBlbmNvbnRyYWRvJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5zYXZlTGluZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNob3dPa01lc3NhZ2UoJ1NlcmlhbCBubyBleGlzdGUnKTtcbiAgICAgICAgICAgICAgc2VsZi5jbGVhckZpZWxkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TYXZlQnV0dG9uVGFwKCkge1xuICAgIHRoaXMudXBkYXRlTGluZSgpO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgIHRpdGxlOiAnTUggTcOzdmlsJyxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgIG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dFcnJvck1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm1lc3NhZ2VzU3R5bGUgPSAnbWVzc2FnZXNFcnJvcic7XG4gIH1cblxuICBzaG93T2tNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5tZXNzYWdlc1N0eWxlID0gJ21lc3NhZ2VzT2snO1xuICB9XG5cbiAgY2xlYXJGaWVsZHMoKTogdm9pZCB7XG4gICAgdGhpcy5sb3RlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5sb3RlU2VsZWN0ZWQgPSBuZXcgUXVhbnQoKTtcbiAgICB0aGlzLnByb2R1Y3RRdHkgPSAwO1xuICAgIHRoaXMucHJvZHVjdFF0eU5ldyA9IDA7XG4gICAgdGhpcy5wcm9kdWN0TmFtZSA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0VW5pdCA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0TG9jID0gbnVsbDtcbiAgICB0aGlzLnByb2R1Y3RMb3QgPSBudWxsO1xuICAgIHRoaXMubG90ZU5hbWVTTCA9IG51bGw7XG4gICAgdGhpcy5sb3RlTmFtZVRGLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHNlYXJjaExvY2F0aW9uKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY29udGVvU2VydmljZVxuICAgICAgLmdldFN0b2NrTG9jYXRpb24oaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgZmxhdE1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2VbJ3Jlc3VsdCddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYubG9jYXRpb25TZWxlY3RlZCA9IHJlc3BvbnNlWydyZXN1bHQnXS5yZWNvcmRzWzBdO1xuICAgICAgICAgICAgc2VsZi5sb2NhdGlvbk5hbWUgPSB0aGlzLmxvY2F0aW9uU2VsZWN0ZWQubmFtZTtcbiAgICAgICAgICAgIHNlbGYubG90ZU5hbWVTTCA9IHNlbGYubG90ZU5hbWU7XG4gICAgICAgICAgICBzZWxmLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuc2hvd09rTWVzc2FnZSgnVWJpY2FjacOzbiBlbmNvbnRyYWRhJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5zaG93RXJyb3JNZXNzYWdlKCdObyBleGlzdGUgdWJpY2FjacOzbicpO1xuICAgICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2VsZi5jb250ZW9TZXJ2aWNlLmdldFRhcmVhcyhcbiAgICAgICAgICAgIHNlbGYuaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkLmlkLFxuICAgICAgICAgICAgc2VsZi5sb2NhdGlvblNlbGVjdGVkLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlMikgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UyLnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2VsZi5pbnZlbnRvcnlTZWxlY3RlZCA9IHJlc3BvbnNlMi5yZXN1bHQucmVjb3Jkc1swXTtcbiAgICAgICAgICBzZWxmLmludmVudG9yeU5hbWUgPSBzZWxmLmludmVudG9yeVNlbGVjdGVkLm5hbWU7XG4gICAgICAgICAgc2VsZi50aXRsZSA9ICdJbnZlbnRhcmlvOiAnICsgc2VsZi5pbnZlbnRvcnlTZWxlY3RlZC5sb2NhdGlvbl9pZFsxXSArICcoJyArIHNlbGYuaW52ZW50b3J5U2VsZWN0ZWQubmFtZSArICcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNyZWF0ZVRhc2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVUYXNrKCk6IHZvaWQge1xuICAgIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQgPSBuZXcgSW52ZW50b3J5KCk7XG4gICAgdGhpcy5pbnZlbnRvcnlTZWxlY3RlZC5pbnZlbnRvcnlfcHJvY2Vzc19pZCA9IFtcbiAgICAgIHRoaXMuaW52ZW50b3J5UHJvY2Vzc1NlbGVjdGVkLmlkLFxuICAgICAgdGhpcy5pbnZlbnRvcnlQcm9jZXNzU2VsZWN0ZWQubmFtZVxuICAgIF07XG4gICAgdGhpcy5pbnZlbnRvcnlTZWxlY3RlZC5sb2NhdGlvbl9pZCA9IFtcbiAgICAgIHRoaXMubG9jYXRpb25TZWxlY3RlZC5pZCxcbiAgICAgIHRoaXMubG9jYXRpb25TZWxlY3RlZC5kaXNwbGF5X25hbWVcbiAgICBdO1xuICAgIGNvbnN0IHRhc2tOYW1lID1cbiAgICAgICdJTlYtJyArXG4gICAgICB0aGlzLmludmVudG9yeVByb2Nlc3NTZWxlY3RlZC5pZCArXG4gICAgICAnLScgK1xuICAgICAgdGhpcy5sb2NhdGlvblNlbGVjdGVkLmlkO1xuICAgIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQubmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMuaW52ZW50b3J5TmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMudGl0bGUgPSAnSW52ZW50YXJpbzogJyArIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQubG9jYXRpb25faWRbMV0gKyAnKCcgK1xuICAgICAgdGhpcy5pbnZlbnRvcnlTZWxlY3RlZC5uYW1lICsgJyknO1xuICAgIHRoaXMuY29udGVvU2VydmljZVxuICAgICAgLmNyZWF0ZVRhcmVhKHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQuaWQgPSByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgIHRoaXMuY29udGVvU2VydmljZVxuICAgICAgICAgIC5zdGFydFRhc2tJbnZlbnRhcnkocmVzcG9uc2UucmVzdWx0KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dPa01lc3NhZ2UoJ1RhcmVhIENyZWFkYSEnKTtcbiAgICAgICAgICAgIHRoaXMubG90ZU5hbWUgPSBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzYXZlTGluZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb3RlU2VsZWN0ZWQuaWQgJiYgdGhpcy5wcm9kdWN0UXR5KSB7XG4gICAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgICB0aGlzLmNvbnRlb1NlcnZpY2VcbiAgICAgICAgLmluc2VydEludmVudGFyeUxpbmUoXG4gICAgICAgICAgdGhpcy5pbnZlbnRvcnlTZWxlY3RlZC5pZCxcbiAgICAgICAgICB0aGlzLmxvdGVTZWxlY3RlZC5wcm9kdWN0X2lkWzBdLFxuICAgICAgICAgIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWQubG9jYXRpb25faWRbMF0sXG4gICAgICAgICAgLy8gQ0FNQklPIExPVF9JRFswXSBQT1IgSURcbiAgICAgICAgICAvL3RoaXMubG90ZVNlbGVjdGVkLmxvdF9pZFswXSxcbiAgICAgICAgICB0aGlzLmxvdGVTZWxlY3RlZC5pZCxcbiAgICAgICAgICB0aGlzLnByb2R1Y3RRdHksXG4gICAgICAgICAgdGhpcy5sb3RlU2VsZWN0ZWQucHJvZHVjdF91b21faWRbMF1cbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgc2VsZi5sb3RlTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5saW5lSWQgPSByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgICAgICBzZWxmLnNob3dPa01lc3NhZ2UoJ1NlcmlhbCBpbmdyZXNhZG8gY29ycmVjdGFtZW50ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNob3dFcnJvck1lc3NhZ2UoJ0VsIFNlcmlhbCB5YSBmdWUgaW5ncmVzYWRvIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnVG9kb3MgbG9zIGNhbXBvcyBzb24gb2JsaWdhdG9yaW9zJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGluZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb3RlU2VsZWN0ZWQuaWQgJiYgdGhpcy5wcm9kdWN0UXR5TmV3KSB7XG4gICAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgICB0aGlzLmNvbnRlb1NlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUludmVudGFyeUxpbmUoXG4gICAgICAgICAgdGhpcy5pbnZlbnRvcnlTZWxlY3RlZC5pZCxcbiAgICAgICAgICB0aGlzLmxvdGVTZWxlY3RlZC5saW5lSWQsXG4gICAgICAgICAgLy8gQ0FNQklPIExPVF9JRFswXSBQT1IgSURcbiAgICAgICAgICAvL3RoaXMubG90ZVNlbGVjdGVkLmxvdF9pZFswXSxcbiAgICAgICAgICB0aGlzLmxvdGVTZWxlY3RlZC5pZCxcbiAgICAgICAgICB0aGlzLnByb2R1Y3RRdHlOZXdcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgc2VsZi5sb3RlTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmNsZWFyRmllbGRzKCk7XG4gICAgICAgICAgICBzZWxmLnNob3dPa01lc3NhZ2UoJ1NlcmlhbCBpbmdyZXNhZG8gY29ycmVjdGFtZW50ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNob3dFcnJvck1lc3NhZ2UoJ0VsIFNlcmlhbCB5YSBmdWUgaW5ncmVzYWRvIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgnVG9kb3MgbG9zIGNhbXBvcyBzb24gb2JsaWdhdG9yaW9zJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUcmFuc2ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgY29uc3Qgc2VsZiA9IG5ldyBXZWFrUmVmKHRoaXMpLmdldCgpO1xuICAgIHRoaXMuY29udGVvU2VydmljZS5nZXRQYXJlbnRzU3RvY2tMb2NhdGlvbihbc2VsZi5sb3RlU2VsZWN0ZWQubG9jYXRpb25faWRbMF1dKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCByZXN1bHRQYXJlbnRzID0gcmVzcG9uc2UucmVzdWx0LnJlY29yZHM7XG4gICAgICB0aGlzLmNvbnRlb1NlcnZpY2UuY3JlYXRlUGlja2luZyhyZXN1bHRQYXJlbnRzWzBdLmxvY2F0aW9uX2lkWzBdLCBzZWxmLmxvY2F0aW9uU2VsZWN0ZWQubG9jYXRpb25faWRbMF0sIDUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlMjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZTIucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIGFsIGd1YXJkYXIgbGEgY2FiZWNlcmEhJyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwaWNraW5nSWQgPSByZXNwb25zZTIucmVzdWx0O1xuICAgICAgICAgIHNlbGYuY29udGVvU2VydmljZVxuICAgICAgICAgICAgLmNyZWF0ZVBpY2tpbmdEZXRhaWwoXG4gICAgICAgICAgICAgIHBpY2tpbmdJZCxcbiAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvblNlbGVjdGVkLmlkLFxuICAgICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5wcm9kdWN0X2lkWzBdLFxuICAgICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5sb2NhdGlvbl9pZFswXSxcbiAgICAgICAgICAgICAgLy8gQ0FNQklPIExPVF9JRFswXSBQT1IgSURcbiAgICAgICAgICAgICAgLy9zZWxmLmxvdGVTZWxlY3RlZC5sb3RfaWRbMF0sXG4gICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkLmlkLFxuICAgICAgICAgICAgICBzZWxmLmxvdGVTZWxlY3RlZC5xdWFudGl0eSxcbiAgICAgICAgICAgICAgc2VsZi5sb3RlU2VsZWN0ZWQucHJvZHVjdF91b21faWRbMF0sXG4gICAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkLnByb2R1Y3RfaWRbMV0sXG4gICAgICAgICAgICAgIDVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlMzogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZTMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29udGVvJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUcmFuc2ZlcmVuY2lhIFJlYWxpemFkYSEnLFxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQWNlcHRhcidcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyRmllbGRzKCk7XG4gICAgICAgICAgICAgICAgICBzZWxmLmxvdGVOYW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIGFsIGd1YXJkYXIgbGEgZGV0YWxsZSEnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ29udGVvTW9kYWxPcHRpb25zJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlby5tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVvTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgX2FjdGl2ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2NyZWF0ZSddLCB7XG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLl9hY3RpdmVSb3V0ZVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29udGVvUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29udGVvLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENvbnRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVvLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW9DcmVhdGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVvLmNyZWF0ZS5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRlb1Zlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW8udmVyLm1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQ29udGVvUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRlb0NvbXBvbmVudCxcbiAgICBDb250ZW9Nb2RhbENvbXBvbmVudCxcbiAgICBDb250ZW9DcmVhdGVNb2RhbENvbXBvbmVudCxcbiAgICBDb250ZW9WZXJNb2RhbENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NvbnRlb01vZGFsQ29tcG9uZW50LCBDb250ZW9WZXJNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVvTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICM0ZDRkNGQ7XFxuICBtYXJnaW46IDE1IDE1IDA7XFxufVxcblxcbi5jYXJkLWxheW91dCB7XFxuICBwYWRkaW5nOiAyMDtcXG59XFxuXFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICA8QWN0aW9uSXRlbVxcbiAgICAodGFwKT1cXFwib25DbG9zZSgpXFxcIlxcbiAgICBpb3Muc3lzdGVtSWNvbj1cXFwiMVxcXCJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCJcXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiXFxuICA+PC9BY3Rpb25JdGVtPlxcblxcbiAgPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLXRpdGxlXFxcIiB0ZXh0PVxcXCLDmmx0aW1hcyBUcmFuc2FjY2lvbmVzXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0PlxcbiAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPENhcmRWaWV3XFxuICAgICAgICAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGxvdGVTZWxlY3RlZEFycmF5XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImNhcmRcXFwiXFxuICAgICAgICBlbGV2YXRpb249XFxcIjQwXFxcIlxcbiAgICAgICAgcmFkaXVzPVxcXCIxMFxcXCJcXG4gICAgICAgIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCI+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDNcXFwiIFt0ZXh0XT1cXFwiaXRlbS5sb3RlTmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgW3RleHRdPVxcXCJpdGVtLnByb2R1Y3RfaWRbMV1cXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICBbdGV4dF09XFxcIidDYW50aWRhZDogJyArIGl0ZW0ucHJvZHVjdF9xdHlcXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8L0NhcmRWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbiAgPEFjdGl2aXR5SW5kaWNhdG9yXFxuICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgW2J1c3ldPVxcXCJpc0xvYWRpbmdcXFwiXFxuICA+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gIDxPZmZsaW5lTm90aWZpY2F0aW9uPjwvT2ZmbGluZU5vdGlmaWNhdGlvbj5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUXVhbnQgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvc3RvY2svcXVhbnQnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJy4uL0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7IENvbnRlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY29udGVvLnNlcnZpY2UnO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdDb250ZW9WZXJNb2RhbCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW8udmVyLm1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGVvLnZlci5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVvVmVyTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGxvdGVTZWxlY3RlZEFycmF5OiBBcnJheTxRdWFudD47XG5cbiAgbWVzc2FnZTogc3RyaW5nO1xuICBtZXNzYWdlc1N0eWxlOiBzdHJpbmc7XG5cbiAgaW52ZW50b3J5U2VsZWN0ZWRJZDogbnVtYmVyO1xuICBsb2NhdGlvblNlbGVjdGVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBjb250ZW9TZXJ2aWNlOiBDb250ZW9TZXJ2aWNlXG4gICkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gbmV3IFdlYWtSZWYodGhpcykuZ2V0KCk7XG4gICAgdGhpcy5tZXNzYWdlc1N0eWxlID0gJ21lc3NhZ2VzT2snO1xuICAgIHRoaXMucm91dGVcbiAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5U2VsZWN0ZWRJZCA9ICtwYXJhbXMuaW52ZW50b3J5U2VsZWN0ZWRJZDtcbiAgICAgICAgdGhpcy5jb250ZW9TZXJ2aWNlXG4gICAgICAgICAgLmdldEludmVudG9yeUxpbmUodGhpcy5pbnZlbnRvcnlTZWxlY3RlZElkKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNlbGYubG90ZVNlbGVjdGVkQXJyYXkgPSByZXNwb25zZS5yZXN1bHQucmVjb3JkcztcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJbnZlbnRvcnkge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGludmVudG9yeV9wcm9jZXNzX2lkOiBBcnJheTxhbnk+O1xuICBsb2NhdGlvbl9pZDogQXJyYXk8YW55PjtcbiAgc3RhdGU6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGNsYXNzIEludmVudG9yeVByb2Nlc3Mge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0b2NrX3dhcmVob3VzZV9pZDogQXJyYXk8YW55PjtcbiAgc3RhdHVzOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBRdWFudCB7XG4gIGlkOiBudW1iZXI7XG4gIGxvdGVOYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uX2lkOiBBcnJheTxhbnk+O1xuICBsb3RfaWQ6IEFycmF5PGFueT47XG4gIHByb2R1Y3RfaWQ6IEFycmF5PGFueT47XG4gIHByb2R1Y3RfdW9tX2lkOiBBcnJheTxhbnk+O1xuICBxdWFudGl0eTogbnVtYmVyO1xuICBwcm9kdWN0X3F0eTogbnVtYmVyO1xuICBsaW5lSWQ6IG51bWJlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=