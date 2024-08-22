type CommentBodyT = {};

const CommentBody: React.FC<CommentBodyT> = () => {
  return (
    <li className="comments-list--item">
      <figure>
        <img src="https://res.cloudinary.com/dizw3yxcn/image/upload/v1721471557/users/igh6kkmig2xeujqiukuf.webp" />
      </figure>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quisquam
        voluptate, cum cumque quas nesciunt nemo velit distinctio laboriosam
        saepe nihil ab fugiat. Nam ratione assumenda perspiciatis totam ipsa
        quaerat harum nulla, cumque ut rerum laboriosam, incidunt, tempore
        beatae. Maiores unde beatae at est earum dolor optio sit tenetur veniam!
      </p>
    </li>
  );
};

export default CommentBody;
