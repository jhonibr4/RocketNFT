import {
  ContainerHome,
  ContentPrincipal,
  Menu,
  Logo,
  WrapperButtonsMenu,
  ButtonMenu,
  ButtonConnectWallet,
  ImageMetaMask,
  WrapperIntroduction,
  WrapperDescription,
  TextDescription,
  WrapperTitle,
  ImageBadge,
  ImageAvatar,
  NumbersArtists,
  WrapperArtists,
  ImageRocketman,
  WrapperImageRocketman,
  ContentInfoNFT,
  WrapperQuantNFT,
  WrapperComments,
  BannerComments,
  Comment,
  TextInfoQuantNFT,
  CommentProfile,
  AuthorComment,
  ContainerPopularWeek,
  TitlePopularWeek,
  WrapperAstronaut,
  ContentAstronaut,
  TitleAstronaut,
  ImageAstronautProfile,
  WrapperInfoProfile,
  NameProfile,
  QuantNFT,
  TitleBetterArtist,
  ContainerBetterArtists,
  WrapperBetterArtists,
  ImageBetterArtist,
  WrapperInfoBetterArtist,
  NameBetterArtist,
  QuantPhotosProfile,
  ButtonShowMoreArtists,
  FooterPage,
  ImageLogoFooter,
  ButtonBackTop,
  WrapperContact,
  WrapperLinksFooter,
  TextSite,
  WrapperSocialMedia,
  TitleContact,
  WrapperInput,
  InputContact,
  ButtonSend,
  WrapperColumnLink,
  TitleColumnLink,
  ButtonLink,
  ButtonSocialMedia,
} from "./styles";

import { FaArrowUp } from "react-icons/fa";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

import Background from "../../assets/background.svg";
import RocketNFTs from "../../assets/RocketNFTs.svg";
import MetaMask from "../../assets/MetaMasklogo.svg";
import Badge from "../../assets/Badge.svg";
import Avatar1 from "../../assets/Avatar/avatar1.svg";
import Avatar2 from "../../assets/Avatar/avatar2.svg";
import Avatar3 from "../../assets/Avatar/avatar3.svg";
import Avatar4 from "../../assets/Avatar/avatar4.svg";
import Rocketman1 from "../../assets/rocketman/galeria-1.svg";
import Rocketman2 from "../../assets/rocketman/galeria-2.svg";
import Rocketman3 from "../../assets/rocketman/galeria-3.svg";
import Rocketman4 from "../../assets/rocketman/galeria-4.svg";
import Rocketman5 from "../../assets/rocketman/galeria-5.svg";
import Rocketman6 from "../../assets/rocketman/galeria-6.svg";
import Rocketman7 from "../../assets/rocketman/galeria-7.svg";
import Rocketman8 from "../../assets/rocketman/galeria-8.svg";
import Banner from "../../assets/banner.svg";

export function Home() {
  const imgProfiles = [
    { name: Avatar1, position: 60 },
    { name: Avatar2, position: 40 },
    { name: Avatar3, position: 20 },
    { name: Avatar4, position: 0 },
  ];
  const imgsRocketman = [
    Rocketman1,
    Rocketman2,
    Rocketman3,
    Rocketman4,
    Rocketman5,
    Rocketman6,
    Rocketman7,
    Rocketman8,
  ];

  function showProfiles() {
    const imgRender = imgProfiles.map((profile, i) => {
      return <ImageAvatar key={i} src={profile.name} left={profile.position} />;
    });

    return imgRender;
  }

  function showImgsRocketman() {
    const imgRender = imgsRocketman.map((img, i) => (
      <ImageRocketman key={i} src={img} />
    ));

    return imgRender;
  }
  return (
    <ContainerHome>
      <ContentPrincipal style={{ backgroundImage: `url(${Background})` }}>
        <Menu>
          <Logo src={RocketNFTs} />
          <WrapperButtonsMenu>
            <ButtonMenu>Comprar NFT</ButtonMenu>
            <ButtonMenu>Sobre</ButtonMenu>
            <ButtonMenu>FAQ</ButtonMenu>
          </WrapperButtonsMenu>
          <ButtonConnectWallet>
            <ImageMetaMask src={MetaMask} />
            Conectar carteira
          </ButtonConnectWallet>
        </Menu>
        <WrapperIntroduction>
          <WrapperDescription>
            <TextDescription>
              Mercado digital para colecionáveis em criptos e tokens não
              fungível (NFT). Compre, venda e descubra ativos digitais
              exclusivos para você.
            </TextDescription>
            <WrapperArtists>
              {showProfiles()}
              <NumbersArtists>
                <span>+10</span>
                <br /> artistas selecionados
              </NumbersArtists>
            </WrapperArtists>
          </WrapperDescription>
          <WrapperTitle>
            Descubra a verdadeira arte digital e<br /> colecione diversas{" "}
            <span>NFTs</span>
          </WrapperTitle>
          <ImageBadge src={Badge} />
        </WrapperIntroduction>
        <WrapperImageRocketman>{showImgsRocketman()}</WrapperImageRocketman>
      </ContentPrincipal>
      <ContentInfoNFT>
        <WrapperQuantNFT>
          <TextInfoQuantNFT>
            10K+
            <br />
            <span>Artes</span>
          </TextInfoQuantNFT>
          <TextInfoQuantNFT>
            200+
            <br />
            <span>Vendas</span>
          </TextInfoQuantNFT>
          <TextInfoQuantNFT>
            20
            <br />
            <span>Artista</span>
          </TextInfoQuantNFT>
        </WrapperQuantNFT>
        <WrapperComments>
          <Comment>
            <CommentProfile>
              Lorem ipsum dolor sit amet. Aut illum consequuntur ut rerum
              laboriosam hic eligendi dolore et obcaecati quis sit autem quia et
              tempore consequatur aut magni possimus! Eum voluptas quam qui
              maxime voluptatem et odit ipsum non voluptatem nesciunt sed
              similique autem ut repellat eius.
            </CommentProfile>
            <AuthorComment>
              <u>Jhonathan Felix Braz</u>
            </AuthorComment>
          </Comment>
          <Comment>
            <CommentProfile>
              Lorem ipsum dolor sit amet. Aut illum consequuntur ut rerum
              laboriosam hic eligendi dolore et obcaecati quis sit autem quia et
              tempore consequatur aut magni possimus! Eum voluptas quam qui
              maxime voluptatem et odit ipsum non voluptatem nesciunt sed
              similique autem ut repellat eius.
            </CommentProfile>
            <AuthorComment>
              <u>Aline Ferreira Peixinho</u>
            </AuthorComment>
          </Comment>
        </WrapperComments>
        <BannerComments src={Banner} />
      </ContentInfoNFT>
      <TitlePopularWeek>
        <span>Populares</span> da Semana
      </TitlePopularWeek>
      <ContainerPopularWeek>
        <WrapperAstronaut>
          <ContentAstronaut>
            <TitleAstronaut>
              Astronauta 1<FaArrowUp />
            </TitleAstronaut>
            <WrapperInfoProfile>
              <NameProfile>Jhonathan Felix Braz</NameProfile>
              <QuantNFT>1.5 RKT</QuantNFT>
            </WrapperInfoProfile>
            <ImageAstronautProfile src={Rocketman1} />
          </ContentAstronaut>
          <ContentAstronaut>
            <TitleAstronaut>
              Astronauta 2<FaArrowUp />
            </TitleAstronaut>
            <WrapperInfoProfile>
              <NameProfile>Aline Ferreira Peixinho</NameProfile>
              <QuantNFT>3.54 RKT</QuantNFT>
            </WrapperInfoProfile>
            <ImageAstronautProfile src={Rocketman2} />
          </ContentAstronaut>
        </WrapperAstronaut>
        <hr />
        <WrapperAstronaut>
          <ContentAstronaut>
            <TitleAstronaut>
              Astronauta 3<FaArrowUp />
            </TitleAstronaut>
            <WrapperInfoProfile>
              <NameProfile>Cicera Felix Braz</NameProfile>
              <QuantNFT>8.50 RKT</QuantNFT>
            </WrapperInfoProfile>

            <ImageAstronautProfile src={Rocketman3} />
          </ContentAstronaut>
          <ContentAstronaut>
            <TitleAstronaut>
              Astronauta 4<FaArrowUp />
            </TitleAstronaut>
            <WrapperInfoProfile>
              <NameProfile>Willian Rubens Braz</NameProfile>
              <QuantNFT>1.5 RKT</QuantNFT>
            </WrapperInfoProfile>
            <ImageAstronautProfile src={Rocketman4} />
          </ContentAstronaut>
        </WrapperAstronaut>
      </ContainerPopularWeek>
      <TitleBetterArtist>
        Melhores <span>Artistas</span>
      </TitleBetterArtist>
      <ContainerBetterArtists>
        <WrapperBetterArtists>
          <ImageBetterArtist src={Avatar1} />
          <WrapperInfoBetterArtist>
            <NameBetterArtist>Jhonathan Felix Braz</NameBetterArtist>
            <QuantPhotosProfile>80 Fotografias</QuantPhotosProfile>
          </WrapperInfoBetterArtist>
        </WrapperBetterArtists>
        <WrapperBetterArtists>
          <ImageBetterArtist src={Avatar2} />
          <WrapperInfoBetterArtist>
            <NameBetterArtist>Jhonathan Felix Braz</NameBetterArtist>
            <QuantPhotosProfile>80 Fotografias</QuantPhotosProfile>
          </WrapperInfoBetterArtist>
        </WrapperBetterArtists>
        <WrapperBetterArtists>
          <ImageBetterArtist src={Avatar3} />
          <WrapperInfoBetterArtist>
            <NameBetterArtist>Jhonathan Felix Braz</NameBetterArtist>
            <QuantPhotosProfile>80 Fotografias</QuantPhotosProfile>
          </WrapperInfoBetterArtist>
        </WrapperBetterArtists>
        <WrapperBetterArtists>
          <ImageBetterArtist src={Avatar4} />
          <WrapperInfoBetterArtist>
            <NameBetterArtist>Jhonathan Felix Braz</NameBetterArtist>
            <QuantPhotosProfile>80 Fotografias</QuantPhotosProfile>
          </WrapperInfoBetterArtist>
        </WrapperBetterArtists>
        <WrapperBetterArtists>
          <ImageBetterArtist src={Avatar4} />
          <WrapperInfoBetterArtist>
            <NameBetterArtist>Jhonathan Felix Braz</NameBetterArtist>
            <QuantPhotosProfile>80 Fotografias</QuantPhotosProfile>
          </WrapperInfoBetterArtist>
        </WrapperBetterArtists>
        <WrapperBetterArtists>
          <ImageBetterArtist src={Avatar4} />
          <WrapperInfoBetterArtist>
            <NameBetterArtist>Jhonathan Felix Braz</NameBetterArtist>
            <QuantPhotosProfile>80 Fotografias</QuantPhotosProfile>
          </WrapperInfoBetterArtist>
        </WrapperBetterArtists>
      </ContainerBetterArtists>
      <ButtonShowMoreArtists>
        Ver Todos os artistas <FaArrowUp />
      </ButtonShowMoreArtists>

      <FooterPage>
        <ImageLogoFooter src={RocketNFTs} />
        <ButtonBackTop>
          <FaArrowUp />
        </ButtonBackTop>
        <WrapperContact>
          <TitleContact>
            Fique por dentro de <br />
            <span>todas novidades</span>
          </TitleContact>
          <WrapperInput>
            <InputContact placeholder="jhony.braz@hotmail.com" />
            <ButtonSend>Enviar</ButtonSend>
          </WrapperInput>
        </WrapperContact>
        <WrapperLinksFooter>
          <WrapperColumnLink>
            <TitleColumnLink>Empresa</TitleColumnLink>
            <ButtonLink>Sobre</ButtonLink>
            <ButtonLink>Serviçoes</ButtonLink>
            <ButtonLink>Time</ButtonLink>
            <ButtonLink>Carreira</ButtonLink>
          </WrapperColumnLink>
          <WrapperColumnLink>
            <TitleColumnLink>Mapa</TitleColumnLink>
            <ButtonLink>Galeria</ButtonLink>
            <ButtonLink>Populares</ButtonLink>
            <ButtonLink>Vendas</ButtonLink>
            <ButtonLink>Contato</ButtonLink>
          </WrapperColumnLink>
          <WrapperColumnLink>
            <TitleColumnLink>Links</TitleColumnLink>
            <ButtonLink>FAQs</ButtonLink>
            <ButtonLink>Termos</ButtonLink>
            <ButtonLink>Política</ButtonLink>
            <ButtonLink>Ajuda</ButtonLink>
          </WrapperColumnLink>
        </WrapperLinksFooter>
        <TextSite>www.rocketseat.com.br</TextSite>
        <WrapperSocialMedia>
          <ButtonSocialMedia>
            <AiOutlineInstagram className="logoSocialMedia" />
          </ButtonSocialMedia>
          <ButtonSocialMedia>
            <AiOutlineYoutube className="logoSocialMedia" />
          </ButtonSocialMedia>
          <ButtonSocialMedia>
            <RxTwitterLogo className="logoSocialMedia" />
          </ButtonSocialMedia>
          <ButtonSocialMedia>
            <HiOutlineMail className="logoSocialMedia" />
          </ButtonSocialMedia>
        </WrapperSocialMedia>
      </FooterPage>
    </ContainerHome>
  );
}
