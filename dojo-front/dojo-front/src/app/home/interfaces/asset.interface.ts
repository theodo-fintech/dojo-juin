import { Realty } from 'src/shared/interface/realty';

export interface Asset {
  userId: string;
  realtyId: string;
  type: string;
  realty: Realty;
}
