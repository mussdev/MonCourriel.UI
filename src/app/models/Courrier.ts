import { Guid } from 'guid-typescript';

export interface Courrier {
    id: Guid ;
    expediteur: string;
    mailCourrier: string;
    adresse: string;
    contact: string;
    codeCourrier: string;
    dateCourrier: Date;
    obejt: string;
    note: string;
    statut: string;
    typeCourrier: string;
   // imputationCourrier: string;
   // motifImputation: string
  
}