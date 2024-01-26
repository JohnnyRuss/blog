/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { userStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import { useSearchParams } from "@/hooks/utils";
import { UpdateUserArgsT } from "@/interface/db/user.types";
import { useEditProfileForms } from "@/utils/validations/editProfileSchemas";

export default function useUpdateUserQuery() {
  const { username } = useParams();

  const { removeParam } = useSearchParams();

  const status = userStore.use.updateDetailStatus();
  const userDetails = userStore.use.userDetails();
  const updateUserDetail = userStore.use.updateUserDetail();

  const { fullnameForm, emailForm, usernameForm, bioForm } =
    useEditProfileForms();

  const onSaveData = async (args: { [key: string]: string }) => {
    try {
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
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  useEffect(() => {
    fullnameForm.reset({ fullname: userDetails.fullname });
    emailForm.reset({ email: userDetails.email });
    usernameForm.reset({ username: userDetails.username });
    bioForm.reset({ bio: userDetails.bio });
  }, [userDetails]);

  return { fullnameForm, emailForm, usernameForm, bioForm, onSaveData, status };
}
