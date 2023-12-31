import { useTheme } from "styled-components";

import * as Styled from "./followCard.styled";
import { LineClamp } from "@/components/Layouts";

type FollowCardT = {};

const FollowCard: React.FC<FollowCardT> = () => {
  const theme = useTheme();

  return (
    <Styled.FollowCard>
      <figure className="follow-card__fig">
        <img
          width={50}
          height={50}
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
          title="user"
          loading="lazy"
        />
      </figure>

      <div className="follow-card__content">
        <p className="follow-card__content-username">Jane Cahil</p>

        <LineClamp
          clamp={2}
          sx={{
            fontSize: theme.fontSize.sm,
            color:
              theme.mode === "dark"
                ? theme.colors.gray
                : theme.colors.gray_dark,
          }}
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, beatae."
        />
      </div>

      <button className="follow-card__btn">Follow</button>
    </Styled.FollowCard>
  );
};

export default FollowCard;
