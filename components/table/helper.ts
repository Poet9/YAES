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
// create new category
type CategoryT = {
    name: string;
    description: string;
};
export const newCategory = async (formData: CategoryT) => {
    try {
        const res = await fetch("http://localhost:3000/api/category", {
            method: "POST",
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (err: any) {
        console.log({ error: err.message });
    }
};
