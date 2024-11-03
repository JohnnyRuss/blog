/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { userStore } from "@/store";
import { RouterHistory } from "@/config/config";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useCheckUserInterestsConfig } from "@/hooks/api/userTrace";

import FitInterestsGlobalPopup from "@/components/FitInterestsGlobalPopup/FitInterestsGlobalPopup";

type AppProviderT = {
  children: React.ReactNode;
};

type AppProviderContextT = {
  setOpenConfig: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppProviderContextT>({
  setOpenConfig: () => {},
});

const AppProvider: React.FC<AppProviderT> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  RouterHistory.navigate = navigate;
  RouterHistory.location = location;

  // CONFIG USER INTERESTS //
  const [openConfig, setOpenConfig] = useState<boolean>(false);

  const { check } = useCheckUserInterestsConfig();
  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  const getUserInterests = userStore.use.getUserInterests();

  useEffect(() => {
    if (!isAuthenticated) return;

    (async () => {
      const { hasAddedInterests, isConfigured } = await check();

      if (!isConfigured) setOpenConfig(true);

      if (hasAddedInterests) await getUserInterests();
    })();
  }, [isAuthenticated]);

  return (
    <AppContext.Provider value={{ setOpenConfig: setOpenConfig }}>
      {children}
      {openConfig && <FitInterestsGlobalPopup />}
    </AppContext.Provider>
  );
};

export default AppProvider;
