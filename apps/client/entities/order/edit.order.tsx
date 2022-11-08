
import { 
  Edit,
  SimpleForm,
  
NumberInput,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditOrder(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <NumberInput source="price" variant="outlined"  />
<TextInput source="address" variant="outlined"   />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}