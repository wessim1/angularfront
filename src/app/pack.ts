import { TypePack } from "./TypePack";

export interface Pack {
    id_pack: number;
    price: number;
    devis: string;
    date: Date;
    type_pack:TypePack ;
}