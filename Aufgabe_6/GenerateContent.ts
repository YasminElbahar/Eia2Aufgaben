namespace Haushaltshilfe {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data;

    export function GenerateContent(_data: Data): void {

        for (let category in _data) {
            //console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "Grocery":
                    group = createGrocery(items, category);

                    break;

                case "HouseholdChores":
                    group = createHouseholdChores(items, category);

                    break;

                case "WithdrawDeposit":
                    group = createWithdrawDeposit(items, category);

                    break;

                default:
                    break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    function createGrocery(_items: Item[], _category: String): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let item of _items) {
            let select: HTMLInputElement = document.createElement("input");
            select.type = "select";
            select.setAttribute("price", item.price.toFixed(2));
            select.value = item.name;
            select.name = _category;
            select.id = item.name;

            let label: HTMLInputElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(select);
            group.appendChild(label);

            return group;
        }
    }

    function createHouseholdChores(_items: Item[], _category: String): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLInputElement = document.createElement("label");

            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);

            return group;
        }

        function createWithdrawDeposit(_items: Item[], _category: String): HTMLElement | null {
            let group: HTMLSpanElement = document.createElement("span");
            for (let item of _items) {
                let Single: HTMLInputElement = document.createElement("input");
                Single.type = "select";
                Single.setAttribute("price", item.price.toFixed(2));
                Single.value = item.name;
                Single.name = _category;
                Single.id = item.name;

                let label: HTMLInputElement = document.createElement("label");

                label.textContent = item.name;
                group.appendChild(Single);
                group.appendChild(label);

                return group;

            }
