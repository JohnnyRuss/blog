import { Link } from "react-router-dom";

import { getTimeString } from "@/utils";

import * as Styled from "./identifier.styled";

type AuthorIdentifierT = {
  avatar: string;
  username: string;
  userId: string;
  date?: string;
};

const AuthorIdentifier: React.FC<AuthorIdentifierT> = ({
  date,
  avatar,
  userId,
  username,
}) => {
  return (
    <Styled.AuthorIdentifier>
      <figure className="user-avatar--fig">
        <img width={40} height={40} src={avatar} alt={username} />
      </figure>

      <div className="user-avatar--details">
        <Link to={userId} className="user-avatar--details__username">
          {username}
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
