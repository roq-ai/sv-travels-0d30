import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoyaltyProgramInterface {
  id?: string;
  program_name: string;
  business_owner_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LoyaltyProgramGetQueryInterface extends GetQueryInterface {
  id?: string;
  program_name?: string;
  business_owner_id?: string;
}
