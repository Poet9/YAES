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

export type Item = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};
// let modalItem = {
//     id: "",
//     title: "",
//     price: 0,
//     description: "",
//     category: "",
//     image: "",
//     rating: { rate: 0, count: 0 },
// };
