const AdminDashboard = () => {
    return (
        <>
            <header>
                <h1>Admin Dashboard</h1>
            </header>
            <aside>
                <nav>
                    <ul>
                        {/*<li><a href="/admin/users">Gestionar usuarios</a></li>*/}
                        <li><a href="/admin/solicitudes">Solicitudes de conversión a proveedor</a></li>
                    </ul>
                </nav>
            </aside>
            <main>
                <p>Este es el dashboard del usuario de tipo admin</p>
                <div>
                    Hola mamus del mundo
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Admin Dashboard</p>
            </footer>
        </>
    );
};

export default AdminDashboard;