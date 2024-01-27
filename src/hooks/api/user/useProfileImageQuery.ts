import { useParams } from "react-router-dom";

import { userStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import { useSearchParams } from "@/hooks/utils";

export default function useProfileImageQuery() {
  const { username } = useParams();

  const { removeParam } = useSearchParams();

  const status = userStore.use.updateDetailStatus();
  const changeProfilePicture = userStore.use.changeProfilePicture();
  const deleteProfilePicture = userStore.use.deleteProfilePicture();

  const onChangeImage = async (file: File) => {
    try {
      if (!username || !file) return;

      await changeProfilePicture({ file, username });
      removeParam("edit");
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  const onDeleteImage = async (url: string) => {
    try {
      if (!username || !url) return;

      await deleteProfilePicture({ url, username });
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { onChangeImage, onDeleteImage, status };
}
