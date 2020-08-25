import { Nutrients } from './nutrients';

export interface Food {
    id: number;
    description: string;
    tags: Array<string>;
    manufacturer: string;
    group: string;
    nutrients: Array<Nutrients>;
    portions: Array<object>;
}
