import { motion } from "framer-motion";
import { animateRight } from "@/styles/animations";

import { useClearHistoryQuery } from "@/hooks/api/history";

import { Spinner } from "@/components/Layouts";
import { HistoryList } from "./components/History";
import * as Styled from "./styles/history.styled";

const ReadingHistory: React.FC = () => {
  const { clearQuery, status } = useClearHistoryQuery();

  return (
    <Styled.History>
      <motion.div
        className="reading-history__header"
        {...animateRight({ once: true })}
      >
        <p>You can clear your reading history for a fresh start.</p>

        <button onClick={clearQuery}>Clear History</button>
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
