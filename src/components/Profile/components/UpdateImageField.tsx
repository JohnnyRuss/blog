import { useState, useRef } from "react";

import { useSearchParams } from "@/hooks/utils";
import { animateBottom } from "@/styles/animations";
import { USER_DEFAULT_AVATAR } from "@/config/config";
import ProfileImageActions from "./ProfileImageActions";
import { useProfileImageQuery } from "@/hooks/api/user";

import * as Styled from "./styles/updateImage.styled";
import ProfileImageCameraLabel from "./ProfileImageCameraLabel";

type UpdateImageFieldT = {
  existingImage: string;
};

const UpdateImageField: React.FC<UpdateImageFieldT> = ({ existingImage }) => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const { onChangeImage, onDeleteImage, status } = useProfileImageQuery();

  const currentTarget = getParam("edit");
  const isEditingProfileImage = currentTarget === "profile_image";

  const disabled =
    (currentTarget && !isEditingProfileImage) || status.loading ? true : false;

  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (!file) return;

    setFile(file);
    setParam("edit", "profile_image");
  };

  const onCancel = () => {
    removeParam("edit");
    setFile(null);
    fileRef.current.value = null;
  };

  const onSave = () => {
    if (!file) return;
    onChangeImage(file);
  };

  const onRemove = () => onDeleteImage(existingImage);

  return (
    <Styled.UpdateImageField
      className="user-settings__img-block"
      {...animateBottom({ once: true })}
    >
      <input
        type="file"
        hidden
        id="profile-change"
        onChange={onFileChange}
        accept="image/*"
        ref={fileRef}
      />

      <figure className="user-settings__img-block--fig">
        <img
          width={120}
          height={120}
          src={file ? URL.createObjectURL(file) : existingImage}
          alt="user"
          loading="eager"
        />

        {!currentTarget && <ProfileImageCameraLabel />}
      </figure>

      <ProfileImageActions
        disabled={disabled}
        onCancel={onCancel}
        onRemove={onRemove}
        onSave={onSave}
        fileExists={file && isEditingProfileImage ? true : false}
        differentFromDefault={existingImage !== USER_DEFAULT_AVATAR}
      />
    </Styled.UpdateImageField>
  );
};

export default UpdateImageField;
