export interface Realty {
  id: number;
  amount: number;
  rent: number;
  label: string;
  image: string;
  deedType: REALTY_TYPE;
  scoring: number;
  lastScoreUpdate: Date;
}

export enum REALTY_TYPE {
  APARTMENT = 'APARTMENT',
  PARTICIPATIVE = 'PARTICIPATIVE',
}
