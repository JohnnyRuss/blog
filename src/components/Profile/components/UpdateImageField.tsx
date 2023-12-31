import { useState } from "react";

import * as Styled from "./styles/updateImage.styled";

type UpdateImageFieldT = {};

const UpdateImageField: React.FC<UpdateImageFieldT> = () => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (!file) return;

    setFile(file);
  };

  return (
    <Styled.UpdateImageField className="user-settings__img-block">
      <input
        type="file"
        hidden
        id="profile-change"
        onChange={onFileChange}
        accept="image/*"
      />

      <figure className="user-settings__img-block--fig">
        <img
          width={120}
          height={120}
          src="https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
          loading="eager"
        />

        <label htmlFor="profile-change">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M7.574 4.336A3 3 0 0 1 10.07 3h3.86a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 18.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h.93a1 1 0 0 0 .832-.445l.812-1.22zM10 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </figure>

      <div className="user-settings__img-block--actions">
        {file && (
          <button className="user-settings__img-block--actions__btn save">
            Save
          </button>
        )}

        {!file && (
          <label
            htmlFor="profile-change"
            className="user-settings__img-block--actions__btn update"
          >
            Update
          </label>
        )}

        <button className="user-settings__img-block--actions__btn remove">
          Remove
        </button>
      </div>
    </Styled.UpdateImageField>
  );
};

export default UpdateImageField;
