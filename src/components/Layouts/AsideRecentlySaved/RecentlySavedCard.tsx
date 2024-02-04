import moment from "moment";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { DYNAMIC_ROUTES } from "@/config/paths";

import { animateLeft } from "@/styles/animations";
import { LineClamp } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type RecentlySavedCardT = {
  article: ArticleShortT;
};

const RecentlySavedCard: React.FC<RecentlySavedCardT> = ({ article }) => {
  return (
    <Link to={DYNAMIC_ROUTES.article_page(article.slug)}>
      <motion.li
        className="saved-list__card"
        {...animateLeft({ inView: true, once: true })}
      >
        <div className="saved-list__card-user">
          <figure className="saved-list__card-user--fig">
            <img
              width={30}
              height={30}
              src={article.author.avatar}
              alt={article.author.fullname}
              title={article.author.fullname}
              loading="lazy"
            />
          </figure>

          <Link
            className="saved-list__card-user--username"
            to={DYNAMIC_ROUTES.profile_page(article.author.username)}
          >
            {article.author.fullname}
          </Link>
        </div>

        <LineClamp component="h3" clamp={2} text={article.title} />

        <div className="saved-list__card-footer">
          <span className="saved-list__card-footer--date">
            {moment(article.createdAt).format("MMM-DD-YYYY")}
          </span>
        </div>
      </motion.li>
    </Link>
  );
};

export default RecentlySavedCard;
