import React, { useState, useEffect } from "react";
import { useRouter, Router } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import getMember from "../components/getMember";
import updateMember from "../components/updateMember";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";

const Edit = ({ member, t }) => {
  console.log(member);
  const router = useRouter();

  const handleBack = () => {
    console.log("back without updating");
    router.back();
  };

  const selectHobby = (e) => {
    selectedHobbies.push(e.target.value);
    setSelectedHobbies(selectedHobbies);
    setHobbies(hobbies.filter((n) => n !== e.target.value));
  };
  const unselectHobby = (e) => {
    hobbies.push(e.target.value);
    setHobbies(hobbies);
    setSelectedHobbies(selectedHobbies.filter((n) => n !== e.target.value));
  };
  const [hobbies, setHobbies] = useState(getHobbies(member));
  const [selectedHobbies, setSelectedHobbies] = useState(
    getSelectedHobbies(member)
  );
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("back with updating");
    member.name = data.name;
    member.nationality = data.nationality;
    member.office = data.office;
    member.hobby = selectedHobbies;
    updateMember(member);
    router.back();
  };
  return (
    <Layout title="User Edit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <table className="table">
            <tbody>
              <tr className="d-flex">
                <th className="col-sm-2">ID</th>
                <td className="col-sm-10 text-center">{member.id}</td>
              </tr>
              <tr className="d-flex">
                <th className="col-sm-2">{t("Name")}</th>
                <td className="col-sm-10 text-center">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={t("Name")}
                    name="name"
                    ref={register}
                    defaultValue={member.name}
                  />
                </td>
              </tr>
              <tr className="d-flex">
                <th className="col-sm-2">{t("nationality")}</th>
                <td className="col-sm-10 text-center">
                  <select
                    className="form-control"
                    name="nationality"
                    ref={register}
                    defaultValue={member.nationality}
                  >
                    <option value="Singapore">{t("Singapore")}</option>
                    <option value="China">{t("China")}</option>
                    <option value="Japan">{t("Japan")}</option>
                  </select>
                </td>
              </tr>
              <tr className="d-flex">
                <th className="col-sm-2">{t("office")}</th>
                <td className="col-sm-10 text-center">
                  <select
                    className="form-control"
                    name="office"
                    ref={register}
                    defaultValue={member.office}
                  >
                    <option value="Tokyo">{t("Tokyo")}</option>
                    <option value="Singapore">{t("Singapore")}</option>
                  </select>
                </td>
              </tr>
              <tr className="d-flex">
                <th className="col-sm-2">{t("hobby")}</th>
                <td className="col-sm-5 text-center">
                  {hobbies.map((hobby, i) => (
                    <div>
                      <button
                        className="btn"
                        type="button"
                        onClick={selectHobby}
                        value={hobby}
                      >
                        {hobby}
                      </button>
                    </div>
                  ))}
                </td>
                <td className="col-sm-5 text-center">
                  {selectedHobbies.map((selectedHobby, i) => (
                    <div>
                      <button
                        className="btn"
                        type="button"
                        onClick={unselectHobby}
                        value={selectedHobby}
                      >
                        {selectedHobby}
                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleBack}
            >
              {t("Cancel")}
            </button>
            <button className="btn btn-outline-primary">{t("Save")}</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

Edit.getInitialProps = ({ query }) => {
  return { member: getMember(query.id) };
};

function getHobbies(member) {
  let initialHobbies = ["Workout", "Buffet", "Korean Drama"];
  let selectedHobbies = member.hobby;
  let hobbies = [];
  if (selectedHobbies === "") {
    return hobbies;
  }
  for (let i in initialHobbies) {
    let isContain = false;
    for (let j in selectedHobbies) {
      if (initialHobbies[i] === selectedHobbies[j]) {
        isContain = true;
        break;
      }
    }
    if (!isContain) {
      hobbies.push(initialHobbies[i]);
    }
  }
  return hobbies;
}
function getSelectedHobbies(member) {
  if (member.hobby === "") {
    return [];
  }
  return member.hobby;
}

Edit.getInitialProps = ({ query }) => {
  return { member: getMember(query.id) };
};

Edit.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Edit);
