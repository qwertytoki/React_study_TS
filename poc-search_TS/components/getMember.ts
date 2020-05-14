import getMembers from "./getMembers";

export default function getMember(id: string) {
  var members = getMembers();
  for (let i in members) {
    if (members[i].id === id) {
      return members[i];
    }
  }
  return "";
}
