import lscache from "lscache";

export default function getMembers() {
  var data = lscache.get("members");
  if (data === null) {
    data = [
      {
        id: "1",
        name: "Shuyeah",
        nationality: "Japan",
        office: "Singapore",
        hobby: [],
      },
      {
        id: "2",
        name: "Nickoh",
        nationality: "Singapore",
        office: "Singapore",
        hobby: [],
      },
      {
        id: "3",
        name: "Showei",
        nationality: "China",
        office: "Singapore",
        hobby: [],
      },
      {
        id: "4",
        name: "Shiraaah",
        nationality: "Japan",
        office: "Tokyo",
        hobby: [],
      },
      {
        id: "5",
        name: "Alexis",
        nationality: "Belgium",
        office: "Tokyo",
        hobby: [],
      },
    ];
    lscache.set("members", data);
  }

  return data;
}
