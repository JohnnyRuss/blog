/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { userStore } from "@/store";
import { LocaleStorage as S } from "@/utils";
import { useAppContext } from "@/Providers/useProviders";
import { useGetCategoriesQuery } from "@/hooks/api/categories";
import { useSaveUserInterestsConfig } from "@/hooks/api/userTrace";

import {
  Modal,
  SectionTitle,
  RelativeSpinner,
  ErrorMessage,
} from "@/components/Layouts";
import * as UI from "./";
import { Close } from "@/components/Layouts/Icons";
import * as Styled from "./fitInterestsGlobalPopup.styled";

const FitInterestsGlobalPopup: React.FC = () => {
  const { setOpenConfig } = useAppContext();

  const existingInterests = userStore.use.interests();
  const cleanUpInterests = userStore.use.cleanUpInterests();

  const [search, setSearch] = useState<string>("");
  const [checkNeverShow, setCheckNeverShow] = useState<boolean>(false);
  const [chosenTopics, setChosenTopics] = useState<Array<string>>([]);

  const { data } = useGetCategoriesQuery({ userbased: "-1", setLimit: false });

  const onDoneSaveChanges = () => {
    S.removeValue("chosen_topics");
    setOpenConfig(false);
    cleanUpInterests();
  };

  const { saveChangesQuery, saveStatus } =
    useSaveUserInterestsConfig(onDoneSaveChanges);

  const onAddTopic = (topicId: string) => {
    const updatedChosenTopics = chosenTopics.includes(topicId)
      ? chosenTopics.filter((topic) => topic !== topicId)
      : [...chosenTopics, topicId];

    setChosenTopics(() => [...updatedChosenTopics]);
    S.setValue("chosen_topics", updatedChosenTopics);
  };

  const onClose = () => {
    if (saveStatus.loading) return;

    if (checkNeverShow) S.removeValue("chosen_topics");
    setOpenConfig(false);
    cleanUpInterests();
  };

  useEffect(() => {
    const receivedChosenTopics: Array<string> | string =
      S.getValue("chosen_topics");

    let chosenTopicsTemp: Array<string> = [];

    if (existingInterests.length > 0)
      chosenTopicsTemp = existingInterests.map((interest) => interest._id);

    if (receivedChosenTopics && Array.isArray(chosenTopics))
      chosenTopicsTemp = [...chosenTopicsTemp, ...receivedChosenTopics];

    setChosenTopics(() => Array.from(new Set(chosenTopicsTemp)));
  }, [existingInterests.length]);

  return (
    <Modal onClose={onClose} open={true}>
      <Styled.FitInterestsGlobalPopup>
        <div className="fit-interests__header">
          <SectionTitle title="Add Your Interest For  Better Experience" />

          <button onClick={onClose}>
            <Close />
          </button>
        </div>

        <UI.SearchBox
          setSearch={setSearch}
          chosenTopicsCount={chosenTopics.length}
        />

        <UI.TopicsList
          data={data}
          search={search}
          onAddTopic={onAddTopic}
          chosenTopics={chosenTopics}
        />

        <UI.Footer
          onSaveChanges={() => saveChangesQuery(chosenTopics)}
          setCheckNeverShow={setCheckNeverShow}
        />

        {saveStatus.loading && <RelativeSpinner />}

        {saveStatus.error && (
          <ErrorMessage message={saveStatus.message} align="center" size="sm" />
        )}
      </Styled.FitInterestsGlobalPopup>
    </Modal>
  );
};

export default FitInterestsGlobalPopup;
