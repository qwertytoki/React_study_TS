import React from "react";
import { useForm } from "react-hook-form";

const Search = ({ search, t }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (searchQuery) => {
    console.log(searchQuery);
    console.log(errors);
    search(searchQuery);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-group ">
          <label>{t("name")}</label>
          <div className="form-check">
            <input
              id="nameid"
              className="form-control"
              type="text"
              placeholder="Name"
              name="name"
              ref={register}
            />
          </div>
        </div>
        <div className="form-group ">
          <label>{t("nationality")}</label>
          <div className="form-check ">
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="nationality"
                  type="radio"
                  value="Singapore"
                  ref={register}
                />
                Singapore
              </label>
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="nationality"
                  type="radio"
                  value="China"
                  ref={register}
                />
                China
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="nationality"
                  type="radio"
                  value="Japan"
                  ref={register}
                />
                Japan
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="form-group ">
            <label>{t("office")}</label>
            <div className="form-check">
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="checkbox"
                    name="office"
                    value="Singapore"
                    ref={register}
                  />
                  Singapore
                </label>
              </div>

              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="checkbox"
                    name="office"
                    value="Tokyo"
                    ref={register}
                  />
                  Tokyo
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-outline-primary">{t("Search")}</button>
        </div>
      </div>
    </form>
  );
};
export default Search;
