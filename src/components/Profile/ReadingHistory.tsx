import { motion } from "framer-motion";
import { animateRight } from "@/styles/animations";

import { useCommentsPopup } from "@/hooks/utils";
import { useClearHistoryQuery } from "@/hooks/api/history";
import { useAppUIContext } from "@/Providers/useProviders";

import { HistoryList } from "./components/History";
import { Spinner, CommentsPopup } from "@/components/Layouts";
import * as Styled from "./styles/history.styled";
import CommentsProvider from "@/Providers/CommentsProvider";

const ReadingHistory: React.FC = () => {
  const { clearQuery, status } = useClearHistoryQuery();

  const { activateDialog } = useAppUIContext();

  const onClearHistory = () =>
    activateDialog({
      message: "Are you sure you want to delete your <TARGET> ?",
      onConfirm: () => clearQuery(),
      target: "Reading History",
      subTitle: "After you delete your history, you can't restore it anymore.",
      title: "Delete Reading History",
      type: "danger",
    });

  const { isOpenedComments, onCloseComments } = useCommentsPopup();

  return (
    <>
      <Styled.History>
        <motion.div
          className="reading-history__header"
          {...animateRight({ once: true })}
        >
          <p>You can clear your reading history for a fresh start.</p>

          <button onClick={onClearHistory}>Clear History</button>
        </motion.div>

        <HistoryList />

        {status.loading && (
          <div className="spinner-layout">
            <Spinner />
          </div>
        )}
      </Styled.History>

      {isOpenedComments && (
        <CommentsProvider>
          <CommentsPopup
            showCommentsForm={false}
            showCommentOptions={false}
            onClosePopup={onCloseComments}
          />
        </CommentsProvider>
      )}
    </>
  );
};

export default ReadingHistory;
