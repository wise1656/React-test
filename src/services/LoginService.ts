import {SingInModel} from "../models/SingInModel";
import {SingUpModel} from "../models/SingUpModel";

export class LoginService {
    static async singIn(data: SingInModel): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:3004/login', {
                method: "POST",
                body: JSON.stringify(data)
            })
            return response.ok;
        }
        catch (e) {
            return false;
        }
    }

    static async singUp(data: SingUpModel): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:3004/register', {
                method: "POST",
                body: JSON.stringify(data)
            })
            return response.ok;
        }
        catch (e) {
            return false;
        }
    }
}

