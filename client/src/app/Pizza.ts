interface Ingredients{
    id: string;
    iname: string;
}

interface Topping{
    id: string;
    tname: string;
    price: string;
}

export interface Pizza {
    _id: string;
    id: string;
    type: string;
    price: string;
    name: string;
    image: string;
    description: string;
    ingredients: Ingredients[];
    topping: Topping[];
    __v: number;
    qty?: number;
}