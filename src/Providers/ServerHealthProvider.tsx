import styled from "styled-components";
import { AxiosResponse } from "axios";
import { createContext, useState, useEffect } from "react";

import { logger } from "@/utils";
import { axiosPublicQuery } from "@/services/axios";

type ServerHealthProviderT = {
  children: React.ReactNode;
};

const ServerHealthContext = createContext({});

const StyledHealthBox = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  color: #222;

  .app-status {
    font-weight: 800;
    font-size: 26px;
    letter-spacing: 1.4;
  }

  .app-msg {
    text-align: center;
    text-decoration: underline;
  }

  .app-regards {
    font-weight: 600;
  }
`;

const ServerHealthProvider: React.FC<ServerHealthProviderT> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [serverIsAlive, setServerIsAlive] = useState<boolean>(false);

  async function checkServerHealth() {
    try {
      const {
        data: { isAlive },
      }: AxiosResponse<{ isAlive: boolean }> = await axiosPublicQuery.post(
        "/health"
      );

      setServerIsAlive(isAlive);
    } catch (error) {
      logger(error);
    }
  }

  useEffect(() => {
    setIsMounted(true);
    checkServerHealth();
  }, []);

  useEffect(() => {
    if (!isMounted || serverIsAlive) return;

    const intervalId = setInterval(() => {
      checkServerHealth();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isMounted, serverIsAlive]);

  return (
    <ServerHealthContext.Provider value={{}}>
      {serverIsAlive ? (
        children
      ) : (
        <StyledHealthBox>
          <p className="app-status">Server is Awakening...</p>

          <p className="app-msg">
            <span>This showcase application is hosted as a free service.</span>
            <br />
            <span>
              Because of this, the initial visit may take up 1m to load data.
            </span>
            <br />
            <span>
              In order to avoid confusion whether the application is ready to
              use,
            </span>
            <br />
            <span>we are checking server health automatically.</span>
          </p>

          <p className="app-regards">Thanks for your patience 🙏✨</p>
        </StyledHealthBox>
      )}
    </ServerHealthContext.Provider>
  );
};

export default ServerHealthProvider;
