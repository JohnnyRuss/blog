import { useNavigate } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./styles/cardHead.styled";

import { ArticleAuthorT } from "@/interface/db/article.types";

type CardHeadT = {
  author: ArticleAuthorT;
};

const CardHead: React.FC<CardHeadT> = ({ author }) => {
  const navigate = useNavigate();

  const onRedirectToAuthor = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(DYNAMIC_ROUTES.profile_page(author.username));
  };

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
        <span onClick={onRedirectToAuthor} className="card-head__user-name">
          {author.fullname}
        </span>
      </p>
    </Styled.CardHead>
  );
};

export default CardHead;
