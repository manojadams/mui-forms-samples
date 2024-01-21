import Home from "./Home/Home";
import DefaultForm from "./forms/RegistrationForm/DefaultForm";
import RegistrationForm from "./forms/RegistrationForm/RegistrationForm";
import RegistrationFormWizard from "./forms/RegistrationForm/RegistrationFormWizard";
import RegistrationFormTabs from "./forms/RegistrationForm/RegistrationFormTabs";

export const ROUTES = [{
    path: "/",
    Component: Home,
    children: [{
        path: "registration-form",
        Component: RegistrationForm
    }, {
        path: "registration-form-wizard",
        Component: RegistrationFormWizard
    }, {
        path: "default-form",
        Component: DefaultForm
    }, {
        path: "registration-form-tabs",
        Component: RegistrationFormTabs
    }]
}];