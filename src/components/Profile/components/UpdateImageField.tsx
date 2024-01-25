import { useState, useRef } from "react";

import { USER_DEFAULT_AVATAR } from "@/config/config";
import { useSearchParams } from "@/hooks/utils";
import { animateBottom } from "@/styles/animations";

import * as Styled from "./styles/updateImage.styled";

type UpdateImageFieldT = {
  existingImage: string;
};

const UpdateImageField: React.FC<UpdateImageFieldT> = ({ existingImage }) => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const currentTarget = getParam("edit");
  const disabled =
    currentTarget && currentTarget !== "profile_image" ? true : false;

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

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

        {!currentTarget && (
          <label htmlFor="profile-change">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M7.574 4.336A3 3 0 0 1 10.07 3h3.86a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 18.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h.93a1 1 0 0 0 .832-.445l.812-1.22zM10 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
                clipRule="evenodd"
              />
            </svg>
          </label>
        )}
      </figure>

      <div className="user-settings__img-block--actions">
        {file && (
          <button
            className="user-settings__img-block--actions__btn save"
            disabled={disabled}
          >
            Save
          </button>
        )}

        {file && (
          <button
            disabled={disabled}
            onClick={onCancel}
            className="user-settings__img-block--actions__btn cancel"
          >
            Cancel
          </button>
        )}

        {!file && (
          <label
            htmlFor={disabled ? "" : "profile-change"}
            className={`user-settings__img-block--actions__btn update ${
              disabled ? "disabled" : ""
            }`}
          >
            Update
          </label>
        )}

        {!file && existingImage !== USER_DEFAULT_AVATAR && (
          <button
            className="user-settings__img-block--actions__btn remove"
            disabled={disabled}
          >
            Remove
          </button>
        )}
      </div>
    </Styled.UpdateImageField>
  );
};

export default UpdateImageField;
