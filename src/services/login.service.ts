import { iSingin } from "@/types/userAccessValidatons"


export const login = (values: iSingin) =>{
    return{ 
        id: 1,
        nome: "Matheus",
        email: values.email
    }
}