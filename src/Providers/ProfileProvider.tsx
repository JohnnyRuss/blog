/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { userStore } from "@/store";

type ProfileContextT = {};

type ProfileProviderT = {
  children: React.ReactNode;
};

export const ProfileContext = createContext<ProfileContextT>({});

const ProfileProvider: React.FC<ProfileProviderT> = ({ children }) => {
  const { username } = useParams();

  const getUserDetails = userStore.use.getUserDetails();

  useEffect(() => {
    if (!username) return;
    getUserDetails({ username });
  }, [username]);

  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
