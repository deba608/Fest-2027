import LineFollowerPic from "../images/Main/linefollower.webp";

const LineFollower = {
  eventName: "Line Follower",
  tagline: "",
  BGImageLink: LineFollowerPic,
  instagramLink: "",
  events: [
    {
      eventName: "Line Follower",
      eventId: "line-follower",
      description:
        "Build an autonomous robot that follows a predefined track with accuracy and speed. Demonstrate your expertise in sensors, electronics, and automation.",
      rules: [
        "Each team must have 2 to 4 members.",
        "Teams must bring their own line-following robots.",
        "Robots must operate autonomously without manual control.",
        "Robots must follow the designated track.",
        "Participants must follow the technical specifications provided by the organizers.",
        "The robot must complete the track within the allotted time.",
        "Judging will consider speed, accuracy, and successful track completion.",
        "The organizers' decision will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: LineFollowerPic,
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

export default LineFollower;
