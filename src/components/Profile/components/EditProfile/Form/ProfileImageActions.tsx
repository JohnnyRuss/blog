type ProfileImageActionsT = {
  disabled: boolean;
  fileExists: boolean;
  differentFromDefault: boolean;
  onSave: () => void;
  onCancel: () => void;
  onRemove: () => void;
};

const ProfileImageActions: React.FC<ProfileImageActionsT> = ({
  disabled,
  fileExists,
  onCancel,
  onRemove,
  onSave,
  differentFromDefault,
}) => {
  return (
    <div className="user-settings__img-block--actions">
      {fileExists && (
        <button
          onClick={onSave}
          disabled={disabled}
          className="user-settings__img-block--actions__btn save"
        >
          Save
        </button>
      )}

      {fileExists && (
        <button
          disabled={disabled}
          onClick={onCancel}
          className="user-settings__img-block--actions__btn cancel"
        >
          Cancel
        </button>
      )}

      {!fileExists && (
        <label
          htmlFor={disabled ? "" : "profile-change"}
          className={`user-settings__img-block--actions__btn update ${
            disabled ? "disabled" : ""
          }`}
        >
          Update
        </label>
      )}

      {!fileExists && differentFromDefault && (
        <button
          onClick={onRemove}
          disabled={disabled}
          className="user-settings__img-block--actions__btn remove"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProfileImageActions;
