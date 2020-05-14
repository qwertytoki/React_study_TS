import React, { useState } from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import List from "../components/List";
import getMembers from "../components/getMembers";
import searchMembers from "../components/searchMembers";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";

const Index = ({ t }) => {
  const [members, setMembers] = useState(getMembers());
  const search = (searchValue) => {
    console.log(searchValue);
    setMembers(searchMembers(searchValue));
  };

  return (
    <Layout title={t("member_list")}>
      <div>
        <Search search={search} t={t} />
        <List members={members} t={t} />
      </div>
    </Layout>
  );
};

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Index);
// export default Index;
