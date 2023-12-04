export const searchFunction = async (query: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product?name=${query}`);
        const data = await res.json();
        return data;
    } catch (err: any) {
        console.warn({ err: err.message });
    }
};
