import { Guid } from "guid-typescript";
import { Direction } from "./Direction";

export interface Service {
    id: Guid;
    code: string;
    description: string;
    directionId: Guid;
    direction: Direction;
}