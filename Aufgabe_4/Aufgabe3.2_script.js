"use strict";
var L03_Househelp;
(function (L03_Househelp) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let form = document.querySelector("div#tasks");
        let slider = document.querySelector("input#mass");
        let button = document.querySelector("#publish");
        button.addEventListener("click", submitData);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);
    }
    function submitData(_event) {
        alert("your Data has been published!");
        console.log("Hey");
    }
    function handleChange(_event) {
        console.log(_event);
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let All = new FormData(document.forms[0]);
        for (let entry of All) {
            //console.log("name: " + entry[0]);
            //console.log("value: " + entry[1]);
            //console.log("price:" + entry[2]);
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.value + " " + price + " € ";
        }
    }
    function displayMass(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_Househelp || (L03_Househelp = {}));
//# sourceMappingURL=househelp.js.map