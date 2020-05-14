import React from "react";
import Link from "next/link";

const List = ({ members, t }) => {
  return (
    <table className="table table-hover ">
      <thead>
        <tr>
          <th>{t("id")}</th>
          <th>{t("name")}</th>
          <th>{t("nationality")}</th>
          <th>{t("office")}</th>
          <th>{t("hobby")}</th>
          <th>{t("link")}</th>
        </tr>
      </thead>
      {members.map((member, i) => (
        <tbody key={i}>
          <tr>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.nationality}</td>
            <td>{member.office}</td>
            <td>
              {member.hobby.map((h, i) => (
                <a>{h} </a>
              ))}
            </td>
            <td>
              <Link
                // as={`/detail/${member.id}`}
                href={`/detail?id=${member.id}`}
                key={i}
              >
                <a>Detail</a>
              </Link>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default List;
