import { useState, useEffect } from "react";
import MuiForms from "mui-forms";
import registrtionSchema from "./schema-disable-tabs.json";

function RegistrationFormDisableTabs() {
    const [schema, setSchema] = useState(null);

    useEffect(() => {
        setSchema(registrtionSchema);
    }, []);

    return (
        <div className={"flex flex-col max-w-2xl m-auto h-screen"}>
            {
                schema &&
                    <MuiForms
                        className="s-form"
                        sectionLayout="tabs"
                        schema={schema}
                        onSubmit={() => {
                            // to do
                        }}
                    />
            }
        </div>
    )
}

export default RegistrationFormDisableTabs;
