import React from 'react';
import MuiForms from 'mui-forms';
import schema from './schema.json';

function MultiSearch() {
  return (
    <MuiForms 
        schema={schema}
        onSubmit={(data) => {
            // TODO
        }}
    />
  );
}

export default MultiSearch;

