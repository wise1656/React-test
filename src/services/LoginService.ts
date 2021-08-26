import {SingInModel} from "../models/SingInModel";

export class LoginService {
    static async singIn(data: SingInModel): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:3000', {
                method: "POST",
                body: JSON.stringify(data)
            })
            await response.json();
            return true;
        }
        catch (e) {
            return false;
        }
    }
}

