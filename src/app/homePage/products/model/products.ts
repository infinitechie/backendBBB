export class Products {
    constructor(
            public id: string,
            public name: string,
            public quantity: number,
            public cost: number,
            public vat: number,
            public unitsSold: number,
            public imageUrl: string,
            public currentStock: number,
            public dateEntered: string,
            public dateLastTransaction: string,
            public productDescription: string,
            public stockTransactions: [number],
            public addedToCart?: string,
            public imageStorageRef?: string,
            public quantityInCart?: number

    ){}
}