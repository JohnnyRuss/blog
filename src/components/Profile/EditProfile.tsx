import { motion } from "framer-motion";

import { userStore } from "@/store";
import { animateTopStagger } from "@/styles/animations";

import { useUpdateUserQuery, useGetUserDetailsQuery } from "@/hooks/api/user";

import * as UI from "./components/EditProfile";
import * as Styled from "./styles/edit.styled";
import { StandSpinner } from "@/components/Layouts";

const { container, child } = animateTopStagger();

const EditProfile: React.FC = () => {
  useGetUserDetailsQuery();

  const userDetails = userStore.use.userDetails();

  const { fullnameForm, emailForm, usernameForm, bioForm, onSaveData, status } =
    useUpdateUserQuery();

  return (
    <Styled.Edit>
      <UI.UpdateImageField existingImage={userDetails.avatar} />

      <motion.div className="user-settings__details-block" {...container}>
        <motion.div {...child}>
          <UI.EditableField
            name="fullname"
            title="Fullname"
            form={fullnameForm}
            status={status}
            onSave={fullnameForm.handleSubmit(onSaveData)}
          />
        </motion.div>

        <motion.div {...child}>
          <UI.EditableField
            name="email"
            title="Email Address"
            status={status}
            form={emailForm}
            onSave={emailForm.handleSubmit(onSaveData)}
          />
        </motion.div>

        <motion.div {...child}>
          <UI.EditableField
            max={16}
            title="Username"
            showCounter={true}
            name="username"
            status={status}
            form={usernameForm}
            onSave={usernameForm.handleSubmit(onSaveData)}
          />
        </motion.div>

        <motion.div {...child}>
          <UI.EditableField
            max={160}
            name="bio"
            title="Bio"
            type="textarea"
            showCounter={true}
            status={status}
            form={bioForm}
            onSave={bioForm.handleSubmit(onSaveData)}
          />
        </motion.div>
      </motion.div>

      <UI.DeleteAccountField />

      <UI.UserInterests />

      {status.loading && <StandSpinner />}
    </Styled.Edit>
  );
};

export default EditProfile;
