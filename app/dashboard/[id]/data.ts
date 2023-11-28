// here we retrieve data from the backend and display it
export const items = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/product?id=${id}`, {
            method: "GET",
            cache: "no-store",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log({ error: err });
    }
};
