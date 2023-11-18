// here we retrieve data from the backend and display it
export const items = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/category/");
        const data = await res.json();
        return data;
    } catch (err) {
        console.log({ error: err });
    }
};
