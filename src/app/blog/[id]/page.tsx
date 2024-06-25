import React from "react";

type Props = {};

const page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>page : {params.id}</div>;
};

export default page;
