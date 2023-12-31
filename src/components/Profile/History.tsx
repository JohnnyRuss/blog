import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { animateTop } from "@/styles/animations";

import { ArticleCardSmall } from "@/components/Layouts";
import * as Styled from "./styles/history.styled";

const History: React.FC = () => {
  return (
    <Styled.History>
      <div className="reading-history__header">
        <p>You can clear your reading history for a fresh start.</p>

        <button>Clear history</button>
      </div>

      <ul className="reading-history__list">
        {Array.from(new Array(10)).map(() => (
          <motion.div
            key={uuid()}
            {...animateTop({ once: true, inView: true })}
          >
            <ArticleCardSmall />
          </motion.div>
        ))}
      </ul>
    </Styled.History>
  );
};

export default History;
