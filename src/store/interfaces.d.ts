export interface CardResponse {
    id: string;
    title: string;
    price: string;
    old_price: string;
    description: string;
    category: string;
    size: string;
    count?: string | null;
}
export interface Card extends CardResponse {
    inBasket: boolean;
    handleCount: number;
}
export interface CardBasket extends Card {
    basketId?: string;
}
