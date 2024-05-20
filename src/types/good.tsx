export interface Good {
    id: string;
    name: string;
    img?: string;
    description: string;
    cost: string;
    available_count: number | null;
    effective_to?: string;
    neighborhoodId: string;
    type: string;
  }