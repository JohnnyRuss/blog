import { createContext, useEffect, useState } from "react";

import { Dialog, Modal } from "@/components/Layouts";
import AuthPopup from "@/components/Auth/AuthPopup";

import { DialogT } from "@/interface/ui/commons.types";
import { useSearchParams } from "@/hooks/utils";

type DialogConfigT = Omit<DialogT, "onClose">;
type ActivateDialogArgsT = Omit<DialogT, "open" | "onClose">;

type AppUIProviderT = {
  children: React.ReactNode;
};

type AppUIContextT = {
  activateAuthPopup: () => void;
  onCloseAuthPopup: () => void;
  activateDialog: (args: ActivateDialogArgsT) => void;
};

export const AppUIContext = createContext<AppUIContextT>({
  activateDialog: () => {},
  onCloseAuthPopup: () => {},
  activateAuthPopup: () => {},
});

const AppUIProvider: React.FC<AppUIProviderT> = ({ children }) => {
  const { setParam, removeParam, getParam } = useSearchParams();

  /////////////
  // DIALOG //
  ///////////
  const dialogConfig: DialogConfigT = {
    open: false,
    title: "",
    subTitle: "",
    message: "",
    target: "",
    type: "detailed",
    onConfirm: () => {},
  };

  const [dialog, setDialog] = useState<DialogConfigT>(dialogConfig);

  const onCloseDialog = () => setDialog(() => ({ ...dialogConfig }));

  const activateDialog = (args: ActivateDialogArgsT) => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      title: args.title || "",
      subTitle: args.subTitle || "",
      message: args.message || "",
      target: args.target || "",
      type: args.type || "detailed",
      onConfirm: () => {
        args.onConfirm();
        onCloseDialog();
      },
    }));
  };

  /////////////////
  // AUTH POPUP //
  ///////////////

  const authPopupParam = getParam("auth");

  const authPopupMethod =
    authPopupParam === "1" ? "LOGIN" : authPopupParam === "2" ? "REGISTER" : "";

  const isOpenAuthPopup = authPopupMethod !== "";

  const [isRegistering, setIsRegistering] = useState(false);

  const activateAuthPopup = () => setParam("auth", "1");

  const onCloseAuthPopup = () => {
    removeParam("auth");
    setIsRegistering(false);
  };

  const onSwitchAuthMethod = () => {
    setIsRegistering((prev) => !prev);
    setParam("auth", isRegistering ? "1" : "2");
  };

  useEffect(() => {
    if (authPopupMethod === "REGISTER") setIsRegistering(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppUIContext.Provider
      value={{
        activateDialog,
        activateAuthPopup,
        onCloseAuthPopup,
      }}
    >
      <Modal
        open={isOpenAuthPopup}
        showCloseBtn={true}
        onClose={onCloseAuthPopup}
      >
        <AuthPopup
          isRegistering={isRegistering}
          onSwitchAuthMethod={onSwitchAuthMethod}
        />
      </Modal>

      <Dialog {...dialog} onClose={onCloseDialog} />

      {children}
    </AppUIContext.Provider>
  );
};

export default AppUIProvider;
