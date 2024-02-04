import { Link } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./styles/cardHead.styled";

import { ArticleAuthorT } from "@/interface/db/article.types";

type CardHeadT = {
  author: ArticleAuthorT;
};

const CardHead: React.FC<CardHeadT> = ({ author }) => {
  return (
    <Styled.CardHead>
      <figure className="card-head__fig">
        <img
          width="25px"
          height="25px"
          title="card"
          loading="lazy"
          src={author.avatar}
          alt={author.username}
        />
      </figure>

      <p className="card-head__user">
        <Link
          to={DYNAMIC_ROUTES.profile_page(author.username)}
          className="card-head__user-name"
        >
          {author.fullname}
        </Link>
        {/* <span className="card-head__user-work">
          {" "}
          <sup>
            <small>in</small>
          </sup>{" "}
          <span>Towards Data Science</span>
        </span> */}
      </p>
    </Styled.CardHead>
  );
};

export default CardHead;
