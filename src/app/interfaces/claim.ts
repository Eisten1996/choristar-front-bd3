import { TypeClaim } from "./type-claim";

export interface Claim {
    dateClaim: string;
    id?: string;
    stateClaim: string;
    typeClaim: TypeClaim;
    user: string;
}
