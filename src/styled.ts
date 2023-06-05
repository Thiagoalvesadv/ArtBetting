import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #424242;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const titleGradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SiteTitle = styled.h1`
  font-size: 48px;
  background: linear-gradient(270deg, #0066FF, #FF9900);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${titleGradientAnimation} 3s ease-in-out infinite;
`;

export const LoginButton = styled.button`
  background-color: #0066FF;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
`;

export const AdsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #757575;
  padding: 20px;
`;

export const AdBox = styled.div`
  background-color: #9E9E9E;
  width: calc(25% - 20px);
  height: 100px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdText = styled.p`
  font-size: 18px;
  color: #333;
`;

export const SportsSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

interface SportsButtonProps {
  imageUrl: string;
}

export const SportsButton = styled.button<SportsButtonProps>`
  background-color: #212121;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`}; // Adicione esta linha
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  padding: 50px;
  width: 200px;
  height: 200px;
  position: relative;
  margin: 20px;
`;

export const SportsText = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 18px;
  color: #FFFFFF;
`;

const pulseColor = keyframes`
  0% {
    background-color: #FF9900;
  }
  100% {
    background-color: #CC6600;
  }
`;

export const BannerPulsante = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFA726; // Altere esta cor
  padding: 20px;
  animation: ${pulseColor} 2s infinite;
`;

export const BannerText = styled.p`
  font-size: 18px;
  color: #FFFFFF;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #424242; // Altere esta cor
  padding: 20px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #FFFFFF;
  margin-bottom: 5px;
`;

export const FooterCertification = styled.img`
  width: 50px;
`;

const pulse = keyframes`
  0% {
    background-color: #FF9900;
  }
  100% {
    background-color: #CC6600;
  }
`;