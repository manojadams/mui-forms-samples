import Home from "./Home/Home";
import DefaultForm from "./forms/RegistrationForm/DefaultForm";
import RegistrationForm from "./forms/RegistrationForm/RegistrationForm";
import RegistrationFormWizard from "./forms/RegistrationForm/RegistrationFormWizard";
import RegistrationFormTabs from "./forms/RegistrationForm/RegistrationFormTabs";
import AddressForm from "./forms/AddressForms/AddressForm";
import RegistrationFormDisableTabs from "./forms/RegistrationForm/RegistrationFormDisableTabs";
import DisabledFieldForm from "./forms/RegistrationForm/DisabledFieldForm";
import AddToCart from "./forms/AddToCart";
import InitialForm from "./forms/InitialForm";

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
    }, {
        path: "registration-form-disable-tabs",
        Component: RegistrationFormDisableTabs
    }, {
        path: "address-form",
        Component: AddressForm
    }, {
        path: "disabled-field-form",
        Component: DisabledFieldForm
    }, {
        path: "add-to-cart",
        Component: AddToCart
    }, {
        path: "initial-form-data",
        Component: InitialForm
    }]
}];