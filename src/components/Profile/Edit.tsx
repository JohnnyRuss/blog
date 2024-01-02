import { motion } from "framer-motion";
import { animateTopStagger } from "@/styles/animations";

import * as Styled from "./styles/edit.styled";
import EditableField from "./components/EditableField";
import UpdateImageField from "./components/UpdateImageField";

const { container, child } = animateTopStagger();

const Edit: React.FC = () => {
  return (
    <Styled.Edit>
      <UpdateImageField />

      <motion.div className="user-settings__details-block" {...container}>
        <motion.div {...child}>
          <EditableField title="Full Name" value="Tom Odell" name="full_name" />
        </motion.div>

        <motion.div {...child}>
          <EditableField
            title="Email Address"
            value="email@io.com"
            name="email"
          />
        </motion.div>

        <motion.div {...child}>
          <EditableField
            title="Username"
            value="T.Odell"
            showCounter={true}
            max={16}
            name="username"
          />
        </motion.div>

        <motion.div {...child}>
          <EditableField
            name="bio"
            title="Bio"
            showCounter={true}
            max={160}
            type="textarea"
            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nemo voluptate assumenda velit rerum blanditiis non, fugit quibusdam recusandae, quisquam cum!"
          />
        </motion.div>
      </motion.div>
    </Styled.Edit>
  );
};

export default Edit;
