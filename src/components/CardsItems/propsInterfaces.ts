export interface Card {
    id: string;
    imageSrc?: string;
    title: string;
    descriptions: string;
    price: string;
    currency?: string;
    handleCount?: number;
    inBasket?: boolean;
}
export interface CardBasket extends Card {
    basketId?: string
}
