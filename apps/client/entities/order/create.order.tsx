
import { 
  Create,
  SimpleForm,
  
NumberInput,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateOrder(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <NumberInput source="price" variant="outlined"  />
<TextInput source="address" variant="outlined"   />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
