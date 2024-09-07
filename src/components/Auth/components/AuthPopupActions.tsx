import { authStore } from "@/store";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

type AuthPopupActionsT = {
  isRegistering: boolean;
  onSwitchAuthMethod: () => void;
};

const AuthPopupActions: React.FC<AuthPopupActionsT> = ({
  isRegistering,
  onSwitchAuthMethod,
}) => {
  const status = authStore.use.status();

  return (
    <>
      {status.error && <ErrorMessage message={status.message} />}

      <button className="submit-btn" type="submit">
        {isRegistering ? "Register" : "Sign In"}
      </button>

      <p className="have-an--account">
        <span>
          {isRegistering ? "Have an account ?" : "Don't have an account ?"}
        </span>
        &nbsp;
        <button onClick={onSwitchAuthMethod}>
          <strong>{isRegistering ? "Login" : "Register"}</strong>
        </button>
      </p>

      {status.loading && <StandSpinner />}
    </>
  );
};

export default AuthPopupActions;
