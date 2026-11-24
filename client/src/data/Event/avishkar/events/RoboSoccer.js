import RoboSoccerPic from "../images/Main/robosoccer.webp";

const RoboSoccer = {
  eventName: "Robo Soccer",
  tagline: "",
  BGImageLink: RoboSoccerPic,
  instagramLink: "",
  events: [
    {
      eventName: "Robo Soccer",
      eventId: "robo-soccer",
      description:
        "Build and control a robot capable of competing in an exciting robotic football match. Test your engineering, strategy, and precision on the field.",
      rules: [
        "Each team must have 2 to 4 members.",
        "Teams must use their own robots.",
        "Robots must comply with the dimensions and specifications provided by the organizers.",
        "Only registered team members can operate or handle the robot.",
        "Teams must follow the match format and instructions provided by the organizers.",
        "Intentional damage to opponent robots or the playing arena is prohibited.",
        "The organizers' decision will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: RoboSoccerPic,
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

export default RoboSoccer;
