import getMembers from "./getMembers";
export default function searchMembers(searchValue) {
  var allMembers = getMembers();
  var members = getMembers();
  let name = searchValue.name;
  if (name) {
    var filteredMembers = [];
    for (let i in members) {
      if (members[i].name.toLowerCase().includes(name)) {
        filteredMembers.push(members[i]);
      }
    }
    members = filteredMembers;
  }

  let nationality = searchValue.nationality;
  if (nationality) {
    var filteredMembers = [];
    for (let i in members) {
      if (members[i].nationality.includes(nationality)) {
        filteredMembers.push(members[i]);
      }
    }
    members = filteredMembers;
  }

  let office = searchValue.office;
  if (office.length !== 0) {
    var filteredMembers = [];
    for (let i in members) {
      if (office.includes(members[i].office)) {
        filteredMembers.push(members[i]);
      }
    }
    members = filteredMembers;
  }
  return members;
}
