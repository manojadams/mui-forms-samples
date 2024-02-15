import React, { useEffect, useState } from "react";
import stateSchema from "./schema.json";
import MuiForms from "mui-forms";

function AddressForm() {
    const [schema, setSchema] = useState(null);

    useEffect(() => {
        setSchema(stateSchema);
    }, []);

    return (<div>
        {schema && 
            <MuiForms 
                config={{
                    gapY: 10,
                    gapY: 10
                }}
                schema={schema}
                onSubmit={() => { 
                    // console.log(formdata);
                }}
            />
        }
    </div>)
}

export default AddressForm;
