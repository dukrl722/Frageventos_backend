export default interface BaseUser {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    passwordSalt: string;
    isActive: boolean;

    hashPassword(): Promise<void>;
}
