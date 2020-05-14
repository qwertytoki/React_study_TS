import getMembers from "./getMembers";
import lscache from "lscache";

export default function updateMember(member) {
  var members = getMembers();
  for (let i in members) {
    if (members[i].id === member.id) {
      members[i] = member;
    }
    lscache.set("members", members);
  }
}
