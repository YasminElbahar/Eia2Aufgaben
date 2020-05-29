var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    var form;
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var response, offer, data, slider, button, submit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("data.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        offer = _a.sent();
                        data = JSON.parse(offer);
                        Haushaltshilfe.GenerateContent(data);
                        form = document.querySelector("div#tasks");
                        slider = document.querySelector("input#mass");
                        button = document.querySelector("#button[type=button]");
                        submit = document.querySelector("button[type=reset]");
                        button.addEventListener("click", submitData);
                        form.addEventListener("change", handleChange);
                        slider.addEventListener("input", displayMass);
                        submit.addEventListener("click", sendOrder);
                        displayOrder();
                        return [2 /*return*/];
                }
            });
        });
    }
    function sendOrder(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData(form);
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch("Aufgabe3.2.html?" + query.toString())];
                    case 1:
                        response = _a.sent();
                        alert("Deiner Bestellung wird bald da sein!");
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        alert("" + responseText);
                        return [2 /*return*/];
                }
            });
        });
    }
    function submitData(_event) {
        alert("your Data has been published!");
        console.log("Hey");
    }
    function handleChange(_event) {
        console.log(_event);
    }
    function displayOrder() {
        var price = 0;
    }
    var order = document.querySelector("div#order");
    order.innerHTML = "";
    var FormData = new FormData(form[0]);
    for (var _i = 0, FormData_1 = FormData; _i < FormData_1.length; _i++) {
        var entry = FormData_1[_i];
        //console.log("name: " + entry[0]);
        //console.log("value: " + entry[1]);
        //console.log("price:" + entry[2]);
        var progress = document.querySelector("progress");
        var item = document.querySelector("[value='" + entry[1] + "']");
        var price = Number(item.getAttribute("price"));
        order.innerHTML += item.value + " " + price + " € ";
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
function displayMass(_event) {
    var progress = document.querySelector("progress");
    var amount = _event.target.value;
    progress.value = parseFloat(amount);
}
//# sourceMappingURL=Aufgabe3.2_script.js.map