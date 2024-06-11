import { iSingin, iUser } from "./userAccessValidatons";


export interface iAuthContext {
    singIn: (values: iSingin) => void
    user: iUser
    isLogged: boolean;
    logout: () => void;
}