import { getTimeString } from "@/utils";

import * as Styled from "./identifier.styled";

type AuthorIdentifierT = {
  avatar: string;
  fullname: string;
  userId: string;
  date?: string;
};

const AuthorIdentifier: React.FC<AuthorIdentifierT> = ({
  date,
  avatar,
  fullname,
  // userId,
}) => {
  return (
    <Styled.AuthorIdentifier>
      <figure className="user-avatar--fig">
        <img width={40} height={40} src={avatar} alt={fullname} />
      </figure>

      <div className="user-avatar--details">
        <button className="user-avatar--details__username">{fullname}</button>

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
