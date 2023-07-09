
import { FollowCard } from "../../components/followCard"
import { Init } from "./init.home"

export function Home() {
  return (
    <>
      <Init></Init>
      <FollowCard username="LordCrainer" name="Carlos"></FollowCard>
      <FollowCard username="cranier" name="Andres"></FollowCard>
    </>
  )
}