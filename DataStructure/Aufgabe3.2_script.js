var L03_Househelp;
(function (L03_Househelp) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        GenerateContent(data);
        var form = document.querySelector("div#tasks");
        var slider = document.querySelector("input#mass");
        var button = document.querySelector("#publish");
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
        var order = document.querySelector("div#order");
        order.innerHTML = "";
        var All = new FormData(document.forms[0]);
        for (var _i = 0, All_1 = All; _i < All_1.length; _i++) {
            var entry = All_1[_i];
            //console.log("name: " + entry[0]);
            //console.log("value: " + entry[1]);
            //console.log("price:" + entry[2]);
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            order.innerHTML += item.value + " " + price + " € ";
        }
    }
    function displayMass(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_Househelp || (L03_Househelp = {}));
//# sourceMappingURL=Aufgabe3.2_script.js.map