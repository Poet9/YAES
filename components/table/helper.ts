// function to delete a row
export const deleteRow = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/category/`, {
            method: "DELETE",
            body: JSON.stringify({ categoryId: id }),
        });
        return res.status;
    } catch (err) {
        console.log({ error: err });
    }
};
