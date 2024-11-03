import { Controller } from "react-hook-form";

import { useSearchParams } from "@/hooks/utils";
import { useDeleteAccountQuery } from "@/hooks/api/auth";
import { useAppUIContext } from "@/Providers/useProviders";

import * as Styled from "./index.styled";
import { StandSpinner } from "@/components/Layouts";
import { TextFieldPassword } from "@/components/Layouts/Form";

type DeleteAccountFieldT = {};

const DeleteAccountField: React.FC<DeleteAccountFieldT> = () => {
  const { activateDialog } = useAppUIContext();
  const { getParam, removeParam, setParam } = useSearchParams();
  const { form, status, onDelete } = useDeleteAccountQuery();

  const isDeletingAccount = getParam("delete-account") === "1";

  const onStartDeleteAccount = () => setParam("delete-account", "1");
  const onCancelDeleteAccount = () => removeParam("delete-account");

  const onStartConfirmDeleteAccount = () =>
    activateDialog({
      message: "Are you sure you want to delete this account ?",
      onConfirm: onDelete,
      target: "",
      title: "Remove Account",
      subTitle:
        "After removing your account, your data will be deleted permanently.",
      type: "danger",
    });

  return (
    <Styled.DeleteAccount>
      {isDeletingAccount && (
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextFieldPassword
              fieldProps={field}
              hasError={error || status.error ? true : false}
              message={error?.message || status.message}
              label="Password"
              placeholder="********"
            />
          )}
        />
      )}

      <div className="delete-btns--box">
        <button
          onClick={
            isDeletingAccount ? onCancelDeleteAccount : onStartDeleteAccount
          }
          className={`delete-btn ${isDeletingAccount ? "cancel" : ""}`}
        >
          {isDeletingAccount ? "Cancel  Deletion" : "Remove Account"}
        </button>

        {isDeletingAccount && (
          <button onClick={onStartConfirmDeleteAccount} className="delete-btn">
            Confirm Delete Account
          </button>
        )}
      </div>

      {status.loading && <StandSpinner />}
    </Styled.DeleteAccount>
  );
};

export default DeleteAccountField;
