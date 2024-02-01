/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { v4 as uuid } from "uuid";

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
            ? Array.from(new Array(4)).map(() => (
                <RecentlySavedCardSkeleton key={uuid()} />
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
