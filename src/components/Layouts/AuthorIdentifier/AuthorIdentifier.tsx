import { Link } from "react-router-dom";

import { getTimeString } from "@/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./identifier.styled";

import { UserT } from "@/interface/db/user.types";

type AuthorIdentifierT = {
  author: UserT;
  date?: string;
};

const AuthorIdentifier: React.FC<AuthorIdentifierT> = ({ author, date }) => {
  return (
    <Styled.AuthorIdentifier>
      <figure className="user-avatar--fig">
        <img width={40} height={40} src={author.avatar} alt={author.fullname} />
      </figure>

      <div className="user-avatar--details">
        <Link
          to={DYNAMIC_ROUTES.profile_page(author.username)}
          className="user-avatar--details__username"
        >
          {author.fullname}
        </Link>

        {date && (
          <span className="user-avatar--details__date">
            {getTimeString(date)}
          </span>
        )}
      </div>
    </Styled.AuthorIdentifier>
  );
};

export default AuthorIdentifier;
