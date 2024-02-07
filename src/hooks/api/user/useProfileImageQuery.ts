import { useParams } from "react-router-dom";

import { userStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

export default function useProfileImageQuery() {
  const { username } = useParams();

  const { removeParam } = useSearchParams();

  const status = userStore.use.updateDetailStatus();
  const changeProfilePicture = userStore.use.changeProfilePicture();
  const deleteProfilePicture = userStore.use.deleteProfilePicture();

  const onChangeImage = async (file: File) => {
    if (!username || !file) return;

    await changeProfilePicture({ file, username });
    removeParam("edit");
  };

  const onDeleteImage = async (url: string) => {
    if (!username || !url) return;
    await deleteProfilePicture({ url, username });
  };

  return { onChangeImage, onDeleteImage, status };
}
