import { motion } from "framer-motion";
import { animateRight } from "@/styles/animations";

import { useClearHistoryQuery } from "@/hooks/api/history";
import { useAppUIContext } from "@/Providers/useProviders";

import { Spinner } from "@/components/Layouts";
import { HistoryList } from "./components/History";
import * as Styled from "./styles/history.styled";

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

  return (
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
  );
};

export default ReadingHistory;
