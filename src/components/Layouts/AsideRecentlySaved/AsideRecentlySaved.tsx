import { v4 as uuid } from "uuid";
import moment from "moment";
import { Link } from "react-router-dom";

import { animateLeft } from "@/styles/animations";

import * as Styled from "./recentlySaved.styled";
import { AsideBlockItemContainer, LineClamp } from "@/components/Layouts";

type AsideRecentlySavedT = {};

const AsideRecentlySaved: React.FC<AsideRecentlySavedT> = () => {
  return (
    <AsideBlockItemContainer title="Recently Saved" subTitle="Your bookmarks">
      <Styled.RecentlySaved
        data-recently-saved
        {...animateLeft({ inView: true, once: true })}
      >
        <ul className="saved-list">
          {Array.from(new Array(4)).map(() => (
            <Link to="/saved/123" key={uuid()}>
              <li className="saved-list__card">
                <div className="saved-list__card-user">
                  <figure className="saved-list__card-user--fig">
                    <img
                      width={30}
                      height={30}
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="user"
                      title="user"
                      loading="lazy"
                    />
                  </figure>

                  <span className="saved-list__card-user--username">
                    Jane Cahil
                  </span>
                </div>

                <LineClamp
                  component="h3"
                  clamp={2}
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, beatae."
                />

                <div className="saved-list__card-footer">
                  <span className="saved-list__card-footer--date">
                    {moment().format("MMM-DD-YYYY")}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>

        <button className="more-bookmarks__btn">See More</button>
      </Styled.RecentlySaved>
    </AsideBlockItemContainer>
  );
};

export default AsideRecentlySaved;
