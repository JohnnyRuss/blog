import * as Styled from "./identifier.styled";

type AuthorIdentifierT = {};

const AuthorIdentifier: React.FC<AuthorIdentifierT> = () => {
  return (
    <Styled.AuthorIdentifier>
      <figure className="user-avatar--fig">
        <img
          width={40}
          height={40}
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MHwwfHx8MA%3D%3D"
          alt="person"
        />
      </figure>

      <div className="user-avatar--details">
        <p className="user-avatar--details__username">Tom Odel</p>
        <span className="user-avatar--details__date">13.10.2023</span>
      </div>
    </Styled.AuthorIdentifier>
  );
};

export default AuthorIdentifier;
