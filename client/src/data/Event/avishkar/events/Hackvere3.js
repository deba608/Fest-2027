import Hackvere3Pic from "../images/Main/hackvere3.0.webp";

const Hackvere3 = {
  eventName: "Hackverse 3.0",
  tagline: "",
  BGImageLink: Hackvere3Pic,
  instagramLink: "",
  events: [
    {
      eventName: "Hackverse 3.0",
      eventId: "hackverse-3",
      description:
        "An intense hackathon where innovators collaborate to build creative, impactful, and technology-driven solutions to real-world problems.",
      rules: [
        "Each team must have 2 to 4 members.",
        "All projects must be developed within the specified hackathon duration.",
        "Participants must develop original solutions.",
        "Pre-built projects cannot be submitted as original work.",
        "Teams must present their working prototype and explain their implementation.",
        "Plagiarism or unfair practices will lead to disqualification.",
        "The judges' decision will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: Hackvere3Pic,
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

export default Hackvere3;