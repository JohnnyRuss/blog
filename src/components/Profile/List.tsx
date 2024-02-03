import {
  useGetListDetailsQuery,
  // useGetListArticlesQuery,
} from "@/hooks/api/lists";
import { getTimeString } from "@/utils";

import * as Styled from "./styles/list.styled";
import { AuthorIdentifier, FollowButton } from "@/components/Layouts";

const List: React.FC = () => {
  const { data: listDetails, status: listDetailsStatus } =
    useGetListDetailsQuery();

  // const { data, status, hasMore, total, getPaginatedData } =
  //   useGetListArticlesQuery();

  return (
    <Styled.List>
      <header className="list-header">
        <div className="list-header__author">
          <AuthorIdentifier
            avatar={listDetails.author.avatar}
            fullname={listDetails.author.fullname}
            userId={listDetails.author._id}
          />

          <FollowButton />
        </div>

        <div className="list-header__sub-wrapper">
          <div className="list-header__details">
            <p className="list-header__details-title">{listDetails.title}</p>

            {listDetails.description && (
              <p className="list-header__details-description">
                {listDetails.description}
              </p>
            )}

            <p className="list-header__details-date">
              {getTimeString(listDetails.createdAt)}
            </p>
          </div>

          <div className="list-header__actions-box">
            <p>{listDetails.privacy}</p>

            <div className="list-header__actions">
              <button className="list-header__actions-btn">save list</button>
              <button className="list-header__actions-btn">remove list</button>
              <button className="list-header__actions-btn">delete list</button>
              <button className="list-header__actions-btn">edit list</button>
            </div>
          </div>
        </div>
      </header>
    </Styled.List>
  );
};

export default List;
