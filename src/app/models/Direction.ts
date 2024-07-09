import { Guid } from "guid-typescript";
import { Service } from "./Service";

export interface Direction{
    id: Guid ;
    code: string ;
    description: string; 
    services: Service[]
} 