namespace Haushaltshilfe {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[]; }

    export function GenerateContent(_data: Data): void {

        for (let category in _data) {
            //console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "Grocery":
                    group = createSelect(items, category);

                    break;

                case "HousholdChores":
                    group = createMultiple(items, category);

                    break;

                case "WithdrawDeposit":
                    group = createSingle(items, category);

                    break;

                default:
                    break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    function createSelect(_items: Item[], _category: String): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let select: HTMLInputElement = document.createElement("input");
            select.type = "select";
            select.setAttribute("price", item.price.toFixed(2));
            select.value = item.name;
            select.name = _category;
            select.id = item.name;

            let label: HTMLInputElement = document.createElement("label");

            label.textContent = item.name;
            group.appendChild(select);
            group.appendChild(label);

            return group;
        }
    }

    function createMultiple(_items: Item[], _category: String): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "select";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLInputElement = document.createElement("label");

            label.textContent = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);

            return group;
        }

        function createSingle(_items: Item[], _category: String): HTMLElement | null {
            let group: HTMLDivElement = document.createElement("div");
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
        