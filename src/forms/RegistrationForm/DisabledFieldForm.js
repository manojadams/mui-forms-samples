import MuiForms from "mui-forms";

const schema = {
  fields: [
    {
      name: "basic_details",
      meta: {
        type: "section",
        displayName: "Basic Details",
      },
      fields: [
        {
          name: "countries",
          meta: {
            displayName: "Select Country",
            displayType: "search",
            value: "IN",
            options: [
              {
                label: "India",
                value: "IN",
              },
              {
                label: "South Africa",
                value: "ZA",
              },
            ],
            events: {
              change: {
                type: "eventEmitter",
                eventType: "$disable-tab",
                payload: {
                  section: "other_details",
                },
                valueMap: {
                  "ZA": true,
                  "IN": false
                },
                value: "ZA"
              }
            }
          },
        },
        {
          name: "first_name",
          meta: {
            displayType: "text_field",
            displayName: "First Name",
          },
        },
        {
          name: "type",
          meta: {
            displayType: "text_field",
            displayName: "Last Name",
          },
          dependencies: {
            exists: {
              ref: "countries",
              value: "IN",
            },
          },
        },
      ],
    },
    {
      name: "other_details",
      meta: {
        type: "section",
        displayName: "Other Details",
      },
      fields: [
        {
          name: "age",
          meta: {
            displayName: "Age",
            displayType: "number",
          },
        },
        {
          name: "email",
          meta: {
            displayName: "Email",
            displayType: "email",
          },
          dependencies: {
            exists: {
              section: "basic_details",
              ref: "countries",
              value: "IN",
            },
          },
        },
      ],
    },
  ],
};
export default function () {
  return (
    <div>
      <MuiForms
        config={{
          variant: "outlined",
          size: "small",
        }}
        schema={schema}
        onSubmit={() => {
          // to do
        }}
      />
    </div>
  );
}
