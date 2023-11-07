// email needs to match this regex:
// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// user type
export type user = {
    email: string;
    name: string;
    firstName: string;
    password: string;
    birthday: Date;
};

export type RequestBody = {
    password: string;
    email: string;
    name: string;
    firstName: string;
    birthDate: Date;
    gender: boolean;
};
export type Product = {
    name: string;
    id: string;
    description: string;
    price: number;
    imgs: string[];
};
