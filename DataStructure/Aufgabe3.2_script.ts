namespace L03_Househelp {
    window.addEventListener("load", handleLoad);
   

    function handleLoad(_event: Event): void {
        GenerateContent(data);
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#tasks");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#mass");
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#publish");

        button.addEventListener("click", submitData);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);
 }

    function submitData (_event: Event): void {
alert("your Data has been published!");
console.log("Hey");
 }

    function handleChange(_event: Event): void {
     console.log(_event);

     let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
     order.innerHTML = "";

     let All: FormData = new FormData(document.forms[0]);

     for (let entry of All) {
         //console.log("name: " + entry[0]);
         //console.log("value: " + entry[1]);
         //console.log("price:" + entry[2]);
            
         let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
         let price: number = Number(item.getAttribute("price"));

         order.innerHTML += item.value + " " + price + " € ";
        }
}


    function displayMass(_event: Event): void {
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    let amount: string = (<HTMLInputElement>_event.target).value;
    progress.value = parseFloat(amount);
}
}
