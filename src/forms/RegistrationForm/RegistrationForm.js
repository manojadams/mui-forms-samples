import { useState, useEffect } from "react";
import MuiForms from "mui-forms";
import registrtionSchema from "./schema.json";

function RegistrationForm() {
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
                        sectionLayout="stepper"
                        schema={schema}
                        onSubmit={() => {
                            // to do
                        }}
                    />
            }
        </div>
    )
}

export default RegistrationForm;
