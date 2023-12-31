import * as Styled from "./styles/edit.styled";
import EditableField from "./components/EditableField";
import UpdateImageField from "./components/UpdateImageField";

const Edit: React.FC = () => {
  return (
    <Styled.Edit>
      <UpdateImageField />

      <div className="user-settings__details-block">
        <EditableField title="Full Name" value="Tom Odell" />

        <EditableField title="Email Address" value="email@io.com" />

        <EditableField
          title="Username"
          value="T.Odell"
          showCounter={true}
          max={16}
        />

        <EditableField
          title="Bio"
          showCounter={true}
          max={160}
          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nemo voluptate assumenda velit rerum blanditiis non, fugit quibusdam recusandae, quisquam cum!"
        />
      </div>
    </Styled.Edit>
  );
};

export default Edit;
