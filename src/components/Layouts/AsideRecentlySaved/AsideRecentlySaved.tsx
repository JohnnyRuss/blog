/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { generateArray } from "@/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useGetSavedArticlesQuery } from "@/hooks/api/lists";

import * as Styled from "./recentlySaved.styled";
import RecentlySavedCard from "./RecentlySavedCard";
import RecentlySavedCardSkeleton from "./RecentlySavedCardSkeleton";
import { AsideBlockItemContainer } from "@/components/Layouts";

type AsideRecentlySavedT = {};

const AsideRecentlySaved: React.FC<AsideRecentlySavedT> = memo(() => {
  const { user } = useCheckIsAuthenticatedUser();

  const { data, status, cleanUpSavedArticles, getRecentlySaved } =
    useGetSavedArticlesQuery();

  useEffect(() => {
    getRecentlySaved();

    return () => {
      cleanUpSavedArticles();
    };
  }, []);

  return (
    <AsideBlockItemContainer title="Recently Saved" subTitle="Your bookmarks">
      <Styled.RecentlySaved data-recently-saved>
        <ul className="saved-list">
          {status.loading
            ? generateArray(4).map((id) => (
                <RecentlySavedCardSkeleton key={id} />
              ))
            : data.map((article) => (
                <RecentlySavedCard article={article} key={article._id} />
              ))}
        </ul>

        <Link
          to={DYNAMIC_ROUTES.profile_saved_lists(user.username)}
          className="more-bookmarks__btn"
        >
          See More
        </Link>
      </Styled.RecentlySaved>
    </AsideBlockItemContainer>
  );
});

export default AsideRecentlySaved;
