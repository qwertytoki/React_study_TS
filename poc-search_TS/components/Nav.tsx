import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";

const Nav = ({ t }) => (
  <div className="my-nav">
    <Link href="/">
      <a>
        <img src="/static/workoutholic.png" alt="workoutholic" height="50" />
      </a>
    </Link>
    <Link href="/blogs">
      <a>Blogs</a>
    </Link>
    <a
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ja" : "en")}
    >
      {t("switch_language")}
    </a>
    <style jsx>
      {`
        a,
        img {
          padding: 10px;
        }
      `}
    </style>
  </div>
);

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Nav);
