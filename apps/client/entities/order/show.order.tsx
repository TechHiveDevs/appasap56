
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowOrder(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<NumberField source="price" />
<TextField source="address" />
<ReferenceField source="userid" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}