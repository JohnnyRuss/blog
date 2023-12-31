import { v4 as uuid } from "uuid";

import { animateLeft } from "@/styles/animations";

import { AsideBlockItemContainer, FollowCard } from "@/components/Layouts";
import * as Styled from "./whoToFollow.styled";

type AsideWhoToFollowT = {};

const AsideWhoToFollow: React.FC<AsideWhoToFollowT> = () => {
  return (
    <AsideBlockItemContainer title="Who To Follow" subTitle="Your Authors">
      <Styled.AsideWhoToFollow
        data-who-to-follow
        {...animateLeft({ inView: true, once: true })}
      >
        <ul className="follow-list">
          {Array.from(new Array(4)).map(() => (
            <FollowCard key={uuid()} />
          ))}
        </ul>

        <button className="more-suggestions__btn">See More Suggestions</button>
      </Styled.AsideWhoToFollow>
    </AsideBlockItemContainer>
  );
};

export default AsideWhoToFollow;
