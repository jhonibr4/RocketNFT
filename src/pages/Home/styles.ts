import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 120vh;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: ${({ theme }) => theme["black-800"]};
`;
export const Menu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  width: 90%;
  height: 100px;
`;
export const Logo = styled.img`
  width: 15rem;
`;
export const WrapperButtonsMenu = styled.div`
  display: flex;
  width: 30%;
`;
export const ButtonMenu = styled.button`
  margin-left: 20px;
  width: 190px;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const ButtonConnectWallet = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sb};
  font-weight: 600;
  width: 15%;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  color: black;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const ImageMetaMask = styled.img`
  width: 1.5rem;
`;
export const WrapperIntroduction = styled.div`
  display: flex;

  align-items: center;
  margin-top: 5rem;
  width: 90%;
  height: 20rem;
`;
export const WrapperDescription = styled.div`
  position: relative;
  width: 27%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperArtists = styled.div`
  position: relative;
  height: 5.5rem;

  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-end;
`;
export const TextDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
interface IImageProfile {
  left: number;
}
export const ImageAvatar = styled.img<IImageProfile>`
  position: absolute;
  left: ${({ left }) => `${left}px`};
`;
export const NumbersArtists = styled.p`
  margin-left: 10rem;
  color: ${({ theme }) => theme.white};
  width: 100%;
  span {
    font-weight: bold;
  }
`;
export const WrapperTitle = styled.h1`
  margin-left: 2rem;
  width: 50%;
  height: 100%;
  font-size: 3.5rem;
  span {
    color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const ImageBadge = styled.img`
  height: 70%;
  margin-left: 1.5rem;
`;
export const WrapperImageRocketman = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 4rem 1rem;
`;
export const ImageRocketman = styled.img`
  width: 24%;
`;
export const ContentInfoNFT = styled.div`
  height: 80vh;
  display: grid;
  grid-template-areas:
    "quant coment coment"
    "quant img img";
  grid-template-columns: 18% 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const WrapperQuantNFT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-right: 2px solid ${({ theme }) => theme["gray-700"]};
  border-bottom: 2px solid ${({ theme }) => theme["gray-700"]};
  grid-area: quant;
`;
export const TextInfoQuantNFT = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme["gray-700"]};
  }
`;
export const WrapperComments = styled.div`
  display: flex;
  gap: 0 5rem;
  grid-area: coment;
  padding: 3.5rem 5rem;
`;
export const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const CommentProfile = styled.p``;
export const AuthorComment = styled.p``;
export const BannerComments = styled.img`
  margin-top: 1rem;
  grid-area: img;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme["gray-700"]};
`;
export const ContainerPopularWeek = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100vh;
  align-items: center;

  hr {
    border: 1px solid ${({ theme }) => theme["gray-700"]};
    margin-top: 8rem;
    height: 85%;
  }
`;
export const TitlePopularWeek = styled.h1`
  margin-top: 7rem;
  margin-left: 7rem;
  font-size: 2.5rem;
  align-self: flex-start;
  span {
    color: ${({ theme }) => theme["coral-500"]};
  }
`;

export const WrapperAstronaut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15rem;
`;
export const ContentAstronaut = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
`;
export const WrapperInfoProfile = styled.div`
  width: 95%;
  margin-block: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
export const NameProfile = styled.p`
  color: ${({ theme }) => theme["gray-700"]};
  font-weight: 600;
`;
export const QuantNFT = styled.p`
  color: ${({ theme }) => theme["coral-500"]};
`;
export const TitleAstronaut = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  display: flex;
  justify-content: space-between;
  svg {
    transform: rotateZ(30deg);
  }
`;
export const ImageAstronautProfile = styled.img``;
export const TitleBetterArtist = styled.h1`
  margin-top: 7rem;
  font-size: 2.5rem;

  span {
    color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const ContainerBetterArtists = styled.div`
  margin-top: 5rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6rem 3rem;
`;
export const WrapperBetterArtists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  width: 23rem;
  height: 8rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme["gray-500"]};
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }) => theme["coral-500"]};
  }
  :hover p {
    color: ${({ theme }) => theme.white};
  }
`;
export const ImageBetterArtist = styled.img``;
export const WrapperInfoBetterArtist = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const NameBetterArtist = styled.p``;
export const QuantPhotosProfile = styled.p`
  color: ${({ theme }) => theme["coral-500"]};
  transition: 0.5s;
`;
export const ButtonShowMoreArtists = styled.button`
  display: flex;
  align-items: center;
  margin-block: 3.5rem;
  padding: 1rem 3rem;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  font-size: ${({ theme }) => theme.fontSize.lg};
  :hover {
    background-color: ${({ theme }) => theme["coral-500"]};
  }
  :hover svg {
    color: ${({ theme }) => theme.white};
  }

  svg {
    margin-left: 1rem;
    transform: rotateZ(30deg);
    color: ${({ theme }) => theme["coral-500"]};
    transition: 0.5s;
  }
`;
export const FooterPage = styled.footer`
  display: grid;
  width: 100%;
  height: 70vh;
  background-color: ${({ theme }) => theme["gray-500"]};
  grid-template-areas:
    "logo . buttonBack"
    "contact links links"
    "site . social";
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1.5fr 2fr 1fr;
`;
export const ImageLogoFooter = styled.img`
  grid-area: logo;
  margin-top: 5rem;
  margin-left: 4rem;
`;
export const ButtonBackTop = styled.button`
  grid-area: buttonBack;
  width: 70px;
  height: 70px;
  margin-top: 4rem;
  margin-left: 8rem;
  background-color: ${({ theme }) => theme["coral-500"]};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  svg {
    font-size: 1.5rem;
  }
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
  :hover svg {
    color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  border: 1px solid ${({ theme }) => theme["gray-700"]};
  border-left: 0px;

  grid-area: contact;
`;
export const TitleContact = styled.p`
  margin-left: 4rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  span {
    color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const WrapperInput = styled.div`
  margin-left: 4rem;
  width: 80%;
  height: 50px;
  display: flex;
`;
export const InputContact = styled.input`
  padding-inline: 0.5rem;
  height: 100%;
  width: 58%;
  background-color: ${({ theme }) => theme["black-800"]};

  ::placeholder {
    color: ${({ theme }) => theme["gray-700"]};
  }
`;
export const ButtonSend = styled.button`
  height: 100%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme["black-800"]};
  width: 25%;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme["coral-500"]};
  }
`;
export const WrapperLinksFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  border-block: 1px solid ${({ theme }) => theme["gray-700"]};
  grid-area: links;
`;
export const WrapperColumnLink = styled.div`
  display: flex;
  flex-direction: column;
  :first-child {
    margin-left: 10rem;
  }
`;
export const TitleColumnLink = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
export const ButtonLink = styled.button`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.lg};
  background-color: transparent;
  margin-top: 0.8rem;
  color: ${({ theme }) => theme["gray-700"]};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
  }
`;
export const TextSite = styled.p`
  margin-top: 4rem;
  margin-left: 4rem;
  color: ${({ theme }) => theme["gray-700"]};
  grid-area: site;
`;
export const WrapperSocialMedia = styled.div`
  display: flex;
  grid-area: social;
  margin-top: 3rem;
  margin-right: 4rem;

  gap: 1.5rem;
`;
export const ButtonSocialMedia = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  transition: 0.5s;
  border-radius: 15px;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme["gray-700"]};
  }
  :hover {
    background-color: ${({ theme }) => theme["coral-500"]};
  }
  :hover svg {
    color: ${({ theme }) => theme.white};
  }
`;
