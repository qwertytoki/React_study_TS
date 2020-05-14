import React from "react";
import { useRouter, Router } from "next/router";
import Layout from "../components/Layout";
import getMember from "../components/getMember";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";

const Detail = ({ member, t }) => {
  const router = useRouter();
  const handleBack = () => {
    console.log("hoge");
    router.back();
  };
  return (
    <Layout title={t("member_detail")}>
      <table className="table">
        <tbody>
          <tr className="d-flex">
            <th className="col-sm-2">{t("id")}</th>
            <td className="col-sm-10 text-center">{member.id}</td>
          </tr>
          <tr className="d-flex">
            <th className="col-sm-2">{t("name")}</th>
            <td className="col-sm-10 text-center">{member.name}</td>
          </tr>
          <tr className="d-flex">
            <th className="col-sm-2">{t("nationality")}</th>
            <td className="col-sm-10 text-center">{member.nationality}</td>
          </tr>
          <tr className="d-flex">
            <th className="col-sm-2">{t("office")}</th>
            <td className="col-sm-10 text-center">{member.office}</td>
          </tr>
          <tr className="d-flex">
            <th className="col-sm-2">{t("hobby")}</th>
            <td className="col-sm-10 text-center">
              {member.hobby.map((h, i) => (
                <div>{h}</div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-outline-secondary" onClick={handleBack}>
          Back
        </button>
        <Link href={`/detail_edit?id=${member.id}`}>
          <button className="btn btn-outline-primary">Edit</button>
        </Link>
      </div>
    </Layout>
  );
};

Detail.getInitialProps = ({ query }) => {
  return { member: getMember(query.id) };
};

Detail.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Detail);
