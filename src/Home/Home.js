import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const forms = [{
    path: "/default-form",
    name: "Default Form"
}, {
    path: "/registration-form",
    name: "Registration Form"
}, {
    path: "/registration-form-wizard",
    name: "Registration Form Wizard"
}, {
    path: "/registration-form-tabs",
    name: "Registration Form Tabs"
}];
function Home() {
    return (
        <div className="app-body">
            <Header />
            <p>This site contains samples of mui-forms</p>
            <h1><Link to="/">Grouped Forms</Link></h1>
            <ul>
                {forms.map(form => {
                    return <li key={form.name}><Link to={form.path}>{form.name}</Link></li>
                })}
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
