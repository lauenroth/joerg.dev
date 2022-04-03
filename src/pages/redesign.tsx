import React, { FC } from "react";
import styled from "styled-components";

import "../styles/global.css";

const RedesignPage: FC = () => {
  return (
    <>
      <Layout>Redesign</Layout>
    </>
  );
};

const Layout = styled.main`
  background-color: #1f1f48;
  color: #fffeff;
`;

export default RedesignPage;
