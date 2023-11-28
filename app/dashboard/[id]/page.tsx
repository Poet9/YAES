import Table from "@/components/table";
import { items } from "./data";
import RowItem from "@/components/table/rowItem";

async function Item(props: any) {
    // here request if user is admin

    const categoryId: string = props.params?.id || " ";
    const myCategories = await items(categoryId);
    return (
        <div className="pt-36 w-screen min-h-screen">
            <h1 className="mt-8">welcome to your Dashboard</h1>
            <Table tableFor="product">
                {Array.isArray(myCategories)
                    ? myCategories.map((row, i) => <RowItem key={"items_" + i} rowData={row} />)
                    : null}
            </Table>
        </div>
    );
}

export default Item;
