import { Container } from "./styles";
import twitterLogo from "../../assets/logo-twitter.svg";
import { Bell, BookmarkSimple, DotsThree, DotsThreeCircle, Envelope, FileText, Hash, House } from "phosphor-react";
import { TweetButton } from "../TweetButton";

export function SideBar() {
  return (
    <Container>
      <img src={twitterLogo} alt="Logo" />

      <nav>
        <a className="active">
          <House weight="fill" />
          Home
        </a>
        <a>
          <Hash weight="fill" />
          Explore
        </a>
        <a>
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <DotsThree />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <TweetButton>
        Tweet
      </TweetButton>
    </Container>
  );
}