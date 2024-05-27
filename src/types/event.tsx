import { UUID } from "crypto";
import {Location} from './location';
export interface Event {
    id: UUID;
    header: boolean;
    title: string;
    description: string;
    additionalInfo?: string;
    prepare?: string;
    eventprice?: number;
    location: Location;
  }
  