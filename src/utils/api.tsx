import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';


const hash = (sensitiveString: string) => {
    const salt = bcrypt.genSaltSync(10);
    // example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
    return bcrypt.hashSync(sensitiveString, salt) // hash created previously created upon sign up
    
}

export const postEndpoint = async (account: string) => {
    const url = "http://0.0.0.0:8080/api/payment_methods/"
    const hashed = hash(account);
    const header : any = {
        'merchant-account': hashed,
        'idempotency-key': uuidv4(),
    }
    const resp = await fetch(url, {
        method: 'POST',
        headers: header
      });
    const data = await resp?.json();
    return data;
}