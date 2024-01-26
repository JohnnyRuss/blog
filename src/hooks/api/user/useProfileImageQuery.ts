import { useParams } from "react-router-dom";

import { userStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import { useSearchParams } from "@/hooks/utils";

export default function useProfileImageQuery() {
  const { username } = useParams();

  const { removeParam } = useSearchParams();

  const changeProfilePicture = userStore.use.changeProfilePicture();
  const status = userStore.use.updateDetailStatus();

  const onChangeImage = async (file: File) => {
    try {
      if (!username) return;

      await changeProfilePicture({ file, username });
      removeParam("edit");
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { onChangeImage, status };
}
