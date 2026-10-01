import React from "react";
import TeamHero from "../components/team/TeamHero";
import TeamMembers from "../components/team/TeamMembers";
import SharedVision from "../components/team/SharedVision";
import TeamValues from "../components/team/TeamValues";
import TeamCulture from "../components/team/TeamCulture";
import TeamFuture from "../components/team/TeamFuture";
import TeamCTA from "../components/team/TeamCTA";

function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
      <SharedVision />
      <TeamValues />
      <TeamCulture />
      <TeamFuture />
      <TeamCTA />
    </>
  );
}

export default TeamPage;
