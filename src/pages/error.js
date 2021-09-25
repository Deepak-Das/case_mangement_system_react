import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const DefaultPage = () => {
  const history = useHistory();

  const gotToPrevPage = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="container">
      <h1 className="lead fw-normal py-4">
        The page you're looking for does not exist. Please check the link.
      </h1>

      <Link
        to="#"
        className="btn btn-primary text-center"
        onClick={gotToPrevPage}
      >
        Go Back
      </Link>
    </div>
  );
};

export default DefaultPage;
