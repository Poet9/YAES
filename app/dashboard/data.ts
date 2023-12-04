// here we retrieve data from the backend and display it
const { signal } = new AbortController();
export const categories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category`, {
            method: "GET",
            cache: "no-store",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log({ error: err });
    }
};
