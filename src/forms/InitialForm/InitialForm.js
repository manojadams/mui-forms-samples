import MuiForms from 'mui-forms';
import React from 'react';
import schema from './schema.json';

function InitialForm() {
  return (
    <MuiForms
        data={{
            basic_details: {
                first_name: "Bulma",
            },
            more_details: {
                personal_details: {
                    last_name: "Bulmamoti",
                }
            }
        }}
        schema={schema}
        onSubmit={(formData) => {
            console.log(formData);
        }}
    />
  )
}

export default InitialForm