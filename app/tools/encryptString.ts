import bcrypt from 'bcryptjs';

export const encrypt = async (text: string) => {
    const key = <string>process.env.KEY;
    const roundSal = parseInt(<string>process.env.SAL);

    return await bcrypt.hash(text, roundSal);
}

export const compare = async (text: string, encriptedText: string) => {
    return await bcrypt.compare(text, encriptedText);
}