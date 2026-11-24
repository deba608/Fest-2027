import IdeanestPic from "../images/Main/ideanest.webp";

const Ideanest = {
  eventName: "Ideanest",
  tagline: "",
  BGImageLink: IdeanestPic,
  instagramLink: "",
  events: [
    {
      eventName: "Ideanest",
      eventId: "ideanest",
      description:
        "A platform for aspiring innovators to present unique ideas, identify real-world challenges, and pitch creative solutions with practical potential.",
      rules: [
        "Each team must have 2 to 4 members.",
        "Ideas must be original and innovative.",
        "Teams must clearly explain the problem and their proposed solution.",
        "Presentations must be completed within the allotted time.",
        "Teams should explain the feasibility and potential impact of their ideas.",
        "The judges' decision will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: IdeanestPic,
      PsLink: "",
      coordinators: [
        {
          name: "Bibhuprasad Samal",
          contact: "+91 9337344133"
        },
        {
          name: "Pratik Samal",
          contact: "+91 9124413007"
        }
      ]
    }
  ]
};

export default Ideanest;