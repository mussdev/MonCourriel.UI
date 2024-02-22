import { Guid } from 'guid-typescript';

export interface Courrier {
    Id: Guid ;
    Expediteur: string;
    MailCourrier: string;
    Adresse: string;
    Contact: string;
    CodeCourrier: string;
    DateCourrier: Date;
    Obejt: string;
    Note: string;
    Statut: string;
  
}