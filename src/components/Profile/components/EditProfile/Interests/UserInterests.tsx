/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { userStore } from "@/store";

import { useSearchParams } from "@/hooks/utils";
import { useGetUserInterestsQuery } from "@/hooks/api/user";
import { useGetCategoriesQuery } from "@/hooks/api/categories";

import ExpandButton from "./ExpandButton";
import UserInterestsList from "./UserInterestsList";
import UserInterestsHeader from "./UserInterestsHeader";
import { Spinner, EmptyMessage, ErrorMessage } from "@/components/Layouts";
import FitInterestsModal from "./FitInterestsModal";

import * as Styled from "./styles/userInterests.styled";

const UserInterests: React.FC = () => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const [search, setSearch] = useState<string>("");
  const [expand, setExpand] = useState<boolean>(false);
  const [isAddingInterest, setIsAddingInterest] = useState<boolean>(false);

  const { status, data: interests } = useGetUserInterestsQuery();
  const recentInterests = userStore.use.recentInterests();

  const allRecentAndExistingInterests = interests.concat(recentInterests);

  const { data: categories, getCategories } = useGetCategoriesQuery({
    runOnMount: false,
    extract: true,
  });

  const searchParam = getParam("search");

  useEffect(() => {
    if (!searchParam) return;

    setSearch(searchParam);
    setIsAddingInterest(true);
    getCategories(searchParam);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!search) removeParam("search");
      else {
        getCategories(search);
        setParam("search", search);
      }
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <>
      {status.loading ? (
        <Spinner />
      ) : status.error ? (
        <ErrorMessage message={status.message} />
      ) : (
        <Styled.UserInterests>
          <UserInterestsHeader />

          {allRecentAndExistingInterests.length > 0 ? (
            <>
              <UserInterestsList
                expand={expand}
                editable={false}
                interests={allRecentAndExistingInterests}
              />

              {allRecentAndExistingInterests.length > 12 && (
                <ExpandButton expand={expand} setExpand={setExpand} />
              )}
            </>
          ) : (
            <EmptyMessage message="You have not selected Interests" />
          )}
        </Styled.UserInterests>
      )}

      <FitInterestsModal
        search={search}
        setSearch={setSearch}
        interests={interests}
        categories={categories}
        isAddingInterest={isAddingInterest}
        setIsAddingInterest={setIsAddingInterest}
      />
    </>
  );
};

export default UserInterests;
