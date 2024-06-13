import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";

import { generateArray } from "@/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { animateTop } from "@/styles/animations";

import ListCardFig from "./ListCardFig";
import { LineClamp } from "@/components/Layouts";
import * as Styled from "./styles/listCard.styled";

import { ListT } from "@/interface/db/list.types";

type ListCardT = {
  list: ListT;
};

const ListCard: React.FC<ListCardT> = ({ list }) => {
  const theme = useTheme();

  return (
    <motion.div {...animateTop({ once: true, inView: true })}>
      <Styled.ListCard>
        <div className="list-card__content">
          <div className="list-card__content-user">
            <figure className="list-card__content-user--fig">
              <img
                width={25}
                height={25}
                src={list.author.avatar}
                alt={list.author.fullname}
                title={list.author.fullname}
                loading="lazy"
              />
            </figure>

            <Link
              to={DYNAMIC_ROUTES.profile_page(list.author.username)}
              className="list-card__content-user--username"
            >
              {list.author.fullname}
            </Link>
          </div>

          <Link
            className="list-card__content-title"
            to={DYNAMIC_ROUTES.profile_list(list.author.username, list._id)}
          >
            <h3>{list.title}</h3>
          </Link>

          {list.description && (
            <LineClamp
              clamp={2}
              component="h3"
              sx={{ fontSize: theme.fontSize.base }}
              text={list.description}
            />
          )}

          <span className="list-card__content-count">
            {list.articles.length} Articles
          </span>
        </div>

        <div className="list-card__assets">
          {generateArray(3).map((_, index) => {
            const article = list.articles[index]?.article;

            return (
              <ListCardFig
                body={article?.body || ""}
                title={article?.title || ""}
                key={article?._id || `list-${list.title}-thumbnail--${index}`}
              />
            );
          })}
        </div>
      </Styled.ListCard>
    </motion.div>
  );
};

export default ListCard;
