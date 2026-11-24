import RoboRacePic from "../images/Main/roborace.webp";

const RoboRace = {
  eventName: "Robo Race",
  tagline: "",
  BGImageLink: RoboRacePic,
  instagramLink: "",
  events: [
    {
      eventName: "Robo Race",
      eventId: "robo-race",
      description:
        "Design and race your robot through a challenging track filled with obstacles and turns. Speed, control, and engineering skills determine the winner.",
      rules: [
        "Each team must have 2 to 4 members.",
        "Teams must bring their own robots.",
        "Robots must follow the technical specifications provided.",
        "Participants must complete the designated track within the allotted time.",
        "Skipping obstacles or taking shortcuts is prohibited.",
        "Only registered team members may operate the robot.",
        "The fastest valid completion time will determine the winner.",
        "The organizers' decision will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: RoboRacePic,
      PsLink: "",
      coordinators: [
        {
          name: "Debashis Sahoo",
          contact: ""
        },
        {
          name: "Ritika Kukreja",
          contact: ""
        }
      ]
    }
  ]
};

export default RoboRace;
