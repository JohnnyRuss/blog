import { motion } from "framer-motion";

import { animateTop } from "@/styles/animations";
import { Edit, Delete } from "@/components/Layouts/Icons";
import { RelativeSpinner, ErrorMessage } from "@/components/Layouts";

type ArticleCardLayoverT = {
  onEdit: () => void;
  onDelete: () => void;
  showActions: boolean;
  loading: boolean;
  errorMessage?: string;
  children: React.ReactNode;
};

const ArticleCardLayover: React.FC<ArticleCardLayoverT> = ({
  onEdit,
  onDelete,
  children,
  loading,
  errorMessage,
  showActions,
}) => {
  return (
    <motion.div {...animateTop({ inView: true, once: true })}>
      <div className="article-card--sm__layover">
        {showActions && (
          <div className="article-card--sm__layover-actions--box">
            <button
              onClick={onEdit}
              className="article-card--sm__layover-edit--btn"
            >
              <Edit />
            </button>
            <button
              onClick={onDelete}
              className="article-card--sm__layover-delete--btn"
            >
              <Delete />
            </button>
          </div>
        )}

        {loading && <RelativeSpinner />}

        {children}

        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    </motion.div>
  );
};

export default ArticleCardLayover;
