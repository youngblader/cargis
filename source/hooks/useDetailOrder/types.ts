import { DetailOrder } from '../../types/DetailOrder';

export interface useDetailOrderResponse {
  order: DetailOrder | null;
  isLoading: boolean;
  isError: string;
}
