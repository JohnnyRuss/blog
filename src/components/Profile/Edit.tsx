import { motion } from "framer-motion";

import { userStore } from "@/store";
import { animateTopStagger } from "@/styles/animations";

import * as Styled from "./styles/edit.styled";
import EditableField from "./components/EditableField";
import UpdateImageField from "./components/UpdateImageField";

const { container, child } = animateTopStagger();

const Edit: React.FC = () => {
  const userDetails = userStore.use.userDetails();

  return (
    <Styled.Edit>
      <UpdateImageField existingImage={userDetails.avatar} />

      <motion.div className="user-settings__details-block" {...container}>
        <motion.div {...child}>
          <EditableField
            name="full_name"
            title="Full Name"
            value={userDetails.fullname}
          />
        </motion.div>

        <motion.div {...child}>
          <EditableField
            name="email"
            title="Email Address"
            value={userDetails.email}
          />
        </motion.div>

        <motion.div {...child}>
          <EditableField
            max={16}
            showCounter={true}
            name="username"
            title="Username"
            value={userDetails.username}
          />
        </motion.div>

        <motion.div {...child}>
          <EditableField
            max={160}
            name="bio"
            title="Bio"
            type="textarea"
            showCounter={true}
            value={userDetails.bio}
          />
        </motion.div>
      </motion.div>
    </Styled.Edit>
  );
};

export default Edit;
