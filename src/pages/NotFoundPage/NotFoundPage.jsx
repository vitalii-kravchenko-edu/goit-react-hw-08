import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1>Not Found</h1>
      <Link className={css.link} to={"/"} replace={true}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
