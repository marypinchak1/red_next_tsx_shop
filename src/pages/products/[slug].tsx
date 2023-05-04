import React from "react";
import { useParams } from "react-router-dom";

// get server side props
export const getServerSideProps = async (context: any) => {
  const params = context.params;
  return {
    props: {
      slug: params.slug,
    },
  };
};

const singleAbout = (props: any) => {
  const { slug } = props;
  return <div>singleAbout: {slug} </div>;
};

export default singleAbout;
