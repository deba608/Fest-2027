import GamedevPic from "../images/Main/gamedev.webp";

const Gamedev = {
  eventName: "Game Dev",
  tagline: "",
  BGImageLink: GamedevPic,
  instagramLink: "",
  events: [
    {
      eventName: "Game Dev",
      eventId: "game-dev",
      description:
        "Bring your imagination to life by designing and developing an engaging game. Showcase your creativity, programming, and game development skills.",
      rules: [
        "Each team must have 2 to 4 members.",
        "Participants must develop or present a game according to the event guidelines.",
        "The game must be original or properly acknowledge third-party assets.",
        "Teams must demonstrate their game during evaluation.",
        "Judging will consider creativity, gameplay, design, and technical implementation.",
        "The judges' decision will be final."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      BGImageLink: GamedevPic,
      PsLink: "",
      coordinators: [
        {
          name: "Subham Mohapatra",
          contact: "+91 7849005997"
        },
        {
          name: "Subha ranjan Mohapatra",
          contact: "+91 8260769398"
        }
      ]
    }
  ]
};

export default Gamedev;