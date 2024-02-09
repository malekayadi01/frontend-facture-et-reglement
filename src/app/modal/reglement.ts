import { Facture } from "./facture";

export class Reglement  {
    idR: number | undefined;
    dateR: string | undefined;
    montant: number | undefined;
    facture: Facture | undefined;
  }