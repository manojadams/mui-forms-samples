import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeUIProvider } from "theme-ui";
import theme from "./theme";

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
}, {
    path: "/registration-form-disable-tabs",
    name: "Registration Form Tabs - Enable/Disable"
}, {
    path: "/add-to-cart",
    name: "Add to cart"
}, {
    path: "/initial-form-data",
    name: "Form with initial data"
}];

const dynamicForms = [{
    path: "/address-form",
    name: "Load states dynamically"
}, {
    path: "disabled-field-form",
    name: "Disabled field"
}];

function Home() {
    return (
        // <ThemeUIProvider theme={theme}>
            <div className="app-body">
                <Header />
                <p>This site contains samples of mui-forms</p>
                <h1><Link to="/">Grouped Forms</Link></h1>
                <ul>
                    {forms.map(form => {
                        return <li key={form.name}><Link to={form.path}>{form.name}</Link></li>
                    })}
                </ul>
                <h1>Dynamic fields</h1>
                <ul>
                    {dynamicForms.map(form => {
                        return <li key={form.name}><Link to={form.path}>{form.name}</Link></li>
                    })}
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>
        // </ThemeUIProvider>
    );
}

export default Home;
