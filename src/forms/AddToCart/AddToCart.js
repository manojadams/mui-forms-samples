import MuiForms from "mui-forms";
import schema from "./schema.json";

const AddToCart = () => {
    return (
        <MuiForms
            schema={schema}
            onSubmit={(formData) => {
                // TODO
            }}
        />
    )
};

export default AddToCart;
