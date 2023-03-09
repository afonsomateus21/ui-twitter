import { Container } from "./styles";
import twitterLogo from "../../assets/logo-twitter.svg";
import { Bell, BookmarkSimple, DotsThree, DotsThreeCircle, Envelope, FileText, Hash, House } from "phosphor-react";
import { TweetButton } from "../TweetButton";
import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <Container>
      <img src={twitterLogo} alt="Logo" />

      <nav>
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a>
          <Hash weight="fill" />
          <span>Explore</span>
        </a>
        <a>
          <Bell />
          <span>Notifications</span> 
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <DotsThree />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <TweetButton
        width={'100%'}
        padding={'1rem'}
      >
        Tweet
      </TweetButton>
    </Container>
  );
}