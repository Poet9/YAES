import Table from "@/components/table";
import { categories } from "./data";
import Row from "@/components/table/row";

async function Dashboard() {
    // here request if user is admin
    //
    const myCategories = await categories();
    return (
        <div className="pt-36 w-screen min-h-screen">
            <h1 className="mt-8">welcome to your Dashboard</h1>
            <Table>
                {Array.isArray(myCategories)
                    ? myCategories.map((row, i) => <Row key={"category_" + i} rowData={row} />)
                    : null}
            </Table>
        </div>
    );
}

export default Dashboard;
