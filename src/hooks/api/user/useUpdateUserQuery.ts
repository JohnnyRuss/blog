/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { userStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";
import { UpdateUserArgsT } from "@/interface/db/user.types";
import { useEditProfileForms } from "@/utils/validations/editProfileSchemas";

export default function useUpdateUserQuery() {
  const { username } = useParams();

  const { removeParam } = useSearchParams();

  const userDetails = userStore.use.userDetails();
  const status = userStore.use.updateDetailStatus();
  const updateUserDetail = userStore.use.updateUserDetail();

  const { fullnameForm, emailForm, usernameForm, bioForm } =
    useEditProfileForms();

  const onSaveData = async (args: { [key: string]: string }) => {
    if (!username || status.loading) return;

    const data: UpdateUserArgsT = {
      username,
      data: { key: "", value: "" },
    };

    let fieldKey = "";

    for (const [key, value] of Object.entries(args)) {
      data.data.key = key;
      data.data.value = value;

      fieldKey = key;
    }

    await updateUserDetail(data);

    if (fieldKey !== "username") removeParam("edit");
  };

  useEffect(() => {
    bioForm.reset({ bio: userDetails.bio });
    emailForm.reset({ email: userDetails.email });
    fullnameForm.reset({ fullname: userDetails.fullname });
    usernameForm.reset({ username: userDetails.username });
  }, [userDetails]);

  return { fullnameForm, emailForm, usernameForm, bioForm, onSaveData, status };
}
