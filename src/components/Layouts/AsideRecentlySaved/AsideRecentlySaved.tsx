/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";

import { generateArray } from "@/utils";
import { useGetSavedArticlesQuery } from "@/hooks/api/lists";

import * as Styled from "./recentlySaved.styled";
import RecentlySavedCard from "./RecentlySavedCard";
import RecentlySavedCardSkeleton from "./RecentlySavedCardSkeleton";
import { AsideBlockItemContainer } from "@/components/Layouts";

type AsideRecentlySavedT = {};

const AsideRecentlySaved: React.FC<AsideRecentlySavedT> = memo(() => {
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

        <button className="more-bookmarks__btn">See More</button>
      </Styled.RecentlySaved>
    </AsideBlockItemContainer>
  );
});

export default AsideRecentlySaved;
