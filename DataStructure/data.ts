namespace Haushaltshilfe {


    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Grocery: [

            { name: "Avocado", price: 1.10 },
            { name: "Apple", price: 2.60 },
            { name: "Apricot", price: 2.10 },
            { name: "Banana", price: 0.99 },
            { name: "Strawberries", price: 1.95 },
            { name: "Eggplant", price: 0.99 },
            { name: "Tomato", price: 1.49 },
            { name: "Broccoli", price: 1.29 },
            { name: "Milk", price: 1.20 },
            { name: "Cheese", price: 2.85 },
            { name: "Icecream", price: 2.50 },
            { name: "Rice", price: 2.36 },
            { name: "Bread", price: 1.79 },
            { name: "Pasta", price: 0.59 },
            { name: "Lentils", price: 1.19 },
            { name: "Cocacola", price: 1.10 },
            { name: "Cupcake", price: 2.29 },
            { name: "Chocolate", price: 0.99 },
            { name: "Jelly Beans", price: 1.20 },
            { name: "Shampoo", price: 3.50 },
            { name: "Hand Cream", price: 1.89 },
            { name: "Shower Gel", price: 0.95 },
            { name: "Soap", price: 1.25 }
        ],


        HouseholdChores: [

            { name: "Do Laundry", price: 10 },
            { name: "Iron Clothes", price: 15 },
            { name: "Water The Plants", price: 2 },
            { name: "Clean The House", price: 30 }
        ],


        WithdrawDeposit: [

            { name: "Withdraw", price: 500 },
            { name: "submitmoney", price: 0 }


        ]


       }}