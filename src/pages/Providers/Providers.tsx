import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import Header from "./Header.tsx";
import Chips from "./Chips.tsx";
import Grid from "./Grid.tsx";

const Providers = () => {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <Sidebar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <Chips />
                    <Grid />
                </main>
            </div>
        </>
    );
};

export default Providers;