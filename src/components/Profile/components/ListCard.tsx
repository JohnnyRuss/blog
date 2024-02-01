import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

import ListCardFig from "./ListCardFig";
import { animateTop } from "@/styles/animations";
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
      <Link to="/123">
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

              <span className="list-card__content-user--username">
                {list.author.fullname}
              </span>
            </div>

            <h3>{list.title}</h3>

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
            {Array.from(new Array(3)).map((_, index) => {
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
      </Link>
    </motion.div>
  );
};

export default ListCard;
