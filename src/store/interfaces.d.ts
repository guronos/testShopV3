export interface Card {
    id: string;
    title: string;
    price: string;
    old_price: string;
    description: string;
    category: string;
    size: string;
    count?: string | null;
}
