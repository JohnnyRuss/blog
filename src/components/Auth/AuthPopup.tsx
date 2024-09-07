import LoginPopup from "./components/LoginPopup";
import RegisterPopup from "./components/RegisterPopup";
import AuthPopupActions from "./components/AuthPopupActions";

type AuthPopupT = {
  isRegistering: boolean;
  onSwitchAuthMethod: () => void;
};

const AuthPopup: React.FC<AuthPopupT> = ({
  isRegistering,
  onSwitchAuthMethod,
}) => {
  return isRegistering ? (
    <RegisterPopup>
      <AuthPopupActions
        isRegistering={isRegistering}
        onSwitchAuthMethod={onSwitchAuthMethod}
      />
    </RegisterPopup>
  ) : (
    <LoginPopup>
      <AuthPopupActions
        isRegistering={isRegistering}
        onSwitchAuthMethod={onSwitchAuthMethod}
      />
    </LoginPopup>
  );
};

export default AuthPopup;
