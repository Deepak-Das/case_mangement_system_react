import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../components/Layout';

const DefaultPage = () => {
  const history = useHistory();

  const gotToPrevPage = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Layout className="container py-5 h-100">
      <h1 className="h3 my-4">
        The page you're looking for does not exist. Please check the entered
        link.
      </h1>

      <Link
        to="#"
        className="btn btn-primary text-center"
        onClick={gotToPrevPage}
      >
        Go Back
      </Link>
    </Layout>
  );
};

export default DefaultPage;
