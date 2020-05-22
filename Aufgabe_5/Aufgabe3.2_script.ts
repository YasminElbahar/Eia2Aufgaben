namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;

    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        
        GenerateContent(data);

        form = <HTMLFormElement>document.querySelector("div#tasks");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#mass");
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#publish");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");

        button.addEventListener("click", submitData);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }


    async function sendOrder(_event: Event): void {
        let formData: FormData = new FormData(form);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("Aufgabe3.2.html?" + query.toString());
        alert("Deiner Bestellung wird bald da sein!");

    }

    function submitData(_event: Event): void {
        alert("your Data has been published!");
        console.log("Hey");
    }

    function handleChange(_event: Event): void {
        console.log(_event);
    }
    function displayOrder(): void {

        let price: number = 0;
    }

    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    order.innerHTML = "";

    let FormData: FormData = new FormData(form[0]);

    for (let entry of FormData) {
        //console.log("name: " + entry[0]);
        //console.log("value: " + entry[1]);
        //console.log("price:" + entry[2]);

        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
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
