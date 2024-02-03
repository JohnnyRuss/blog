import { motion } from "framer-motion";
import { animateRight } from "@/styles/animations";

import { HistoryList } from "./components";
import * as Styled from "./styles/history.styled";

const ReadingHistory: React.FC = () => {
  return (
    <Styled.History>
      <motion.div
        className="reading-history__header"
        {...animateRight({ once: true })}
      >
        <p>You can clear your reading history for a fresh start.</p>

        <button>Clear history</button>
      </motion.div>

      <HistoryList />
    </Styled.History>
  );
};

export default ReadingHistory;
