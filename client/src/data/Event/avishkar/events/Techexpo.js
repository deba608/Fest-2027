import TechexpoPic from "../images/Main/techexpo.webp";

const Techexpo = {
  eventName: "TechExpo",
  tagline: "",
  BGImageLink: TechexpoPic,
  instagramLink: "",
  events: [
    {
      eventName: "TechExpo",
      eventId: "techexpo",
      description:
        "A technology exhibition bringing together innovators, developers, designers, and tech enthusiasts to showcase their projects, prototypes, and innovative solutions across different domains.",
      rules: [
        "Each team must have 2 to 4 members.",
        "Projects must demonstrate technological innovation or practical application.",
        "Teams must bring and manage the necessary equipment for their demonstrations.",
        "Participants must explain the working, purpose, and implementation of their projects.",
        "Projects must be original or appropriately credit third-party contributions.",
        "Teams must complete their demonstration within the allotted time.",
        "The organizers' and judges' decisions will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: TechexpoPic,
      PsLink: "",
      coordinators: [
        {
          name: "Manas Ranjan Dikshit",
          contact: "+91 9337978805"
        }
      ]
    }
  ]
};

export default Techexpo;