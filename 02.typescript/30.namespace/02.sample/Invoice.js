"use strict";
var Runoob;
(function (Runoob) {
    let invoiceApp;
    (function (invoiceApp) {
        class Invoice {
            calculateDiscount(price) {
                return price * .40;
            }
        }
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = Runoob.invoiceApp || (Runoob.invoiceApp = {}));
})(Runoob || (Runoob = {}));
