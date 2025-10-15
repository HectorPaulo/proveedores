import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import Header from "./Header.tsx";
import Grid from "./Grid.tsx";

const Favorites = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <Grid />
            </main>
        </>
    );
};

export default Favorites;