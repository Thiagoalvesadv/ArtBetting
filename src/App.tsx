import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import {
  Container,
  Header,
  SiteTitle,
  Nav,
  LoginButton,
  AdsSection,
  AdBox,
  AdText,
  SportsSection,
  SportsButton,
  SportsText,
  BannerPulsante,
  BannerText,
  Footer,
  FooterText,
  FooterCertification,
} from "./styled";
import { Flex, Drawer, Modal, Paper, Text, Col, Grid } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

const App: React.FC = () => {
  const sports = [
    { name: "Futebol", imageUrl: "https://media.istockphoto.com/id/1272269793/pt/foto/silhouette-action-sport.jpg?s=612x612&w=0&k=20&c=TtLvoNDZ1IJeq0agcElvlDpDtazTDDkL-GWBXKbSVUo=" },
    { name: "Basquete", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeF0dI9gVJbd-PdgwoWrnULUIy1ytcCrfhg&usqp=CAU" },
    { name: "Vôlei", imageUrl: "https://st2.depositphotos.com/1003697/6927/i/450/depositphotos_69272087-stock-photo-young-beautiful-girls-playing-volleyball.jpg" },
    { name: "Tênis", imageUrl: "data:image/jpeg;base64,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" },
    { name: "Lutas", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCOaovoOgCgZTkWL23JvRfo6JEGDqX3kmImA062Mz0lsDP1eU3i1YRdgyihWkKW9bM7vc&usqp=CAU" },
    { name: "Corridas", imageUrl: "https://i.pinimg.com/736x/bc/a9/3e/bca93e70a79bd2bf45617d0f318783ce.jpg" },
  ];

  const sportOptions = {
    Futebol: [
      "Estaduais",
      "Regionais",
      "Brasil",
      "América do Sul",
      "América Central",
      "América do Norte",
      "Europa",
      "Ásia",
      "África",
    ],
    Basquete: ["NBA", "NBB", "Europa", "Ásia"],
    Vôlei: [
      "Brasil",
      "América do Sul",
      "América Central",
      "América do Norte",
      "Europa",
      "Ásia",
      "África",
    ],
    Tênis: ["Grand Slam", "Master 1000", "ATP 1000", "ATP 500"],
    Lutas: ["Boxe", "Boxe Olímpico", "MMA", "Judô"],
    Corridas: ["Fómula 1", "Fómula 2", "Fórmula E", "StockCar", "Nascar", "Fórmula Indy"],
  };

  const [modalOpened, setModalOpened] = useState(false);
  const [selectedSport, setSelectedSport] = useState("");

  const closeModal = () => {
    setModalOpened(false);
  };

  const openModal = (sportName: string) => {
    setSelectedSport(sportName);
    setModalOpened(true);
  };

  const clickOutsideRef = useClickOutside(closeModal);

  return (
    <Container>
      <Header>
        <Flex
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SiteTitle style={{ textAlign: "center", flexGrow: 1 }}>
            ART Betting
          </SiteTitle>
          <LoginForm />
        </Flex>
      </Header>
      <AdsSection>
        <AdBox>
          <AdText>Anuncie aqui</AdText>
        </AdBox>
        <AdBox>
          <AdText>Anuncie aqui</AdText>
        </AdBox>
        <AdBox>
          <AdText>Anuncie aqui</AdText>
        </AdBox>
        <AdBox>
          <AdText>Anuncie aqui</AdText>
        </AdBox>
      </AdsSection>
      <SportsSection>
        {sports.map((sport) => (
          <SportsButton
            key={sport.name}
            imageUrl={sport.imageUrl}
            onClick={() => openModal(sport.name)}
          >
            <SportsText>{sport.name}</SportsText>
          </SportsButton>
        ))}
      </SportsSection>
      <BannerPulsante>
        <BannerText>
          Faça agora o seu cadastro e aposte na sua sorte!
        </BannerText>
      </BannerPulsante>
      <Modal opened={modalOpened} onClose={closeModal} padding="md" size="xl">
        <Paper ref={clickOutsideRef} style={{ padding: "1rem" }} shadow="xs">
          <Text align="center" size="xl" weight={500}>
            Opções para {selectedSport}
          </Text>
          <Grid gutter="md" style={{ marginTop: "1rem" }}>
            {sportOptions[selectedSport as keyof typeof sportOptions]?.map((option) => (
              <Col key={option} span={4}>
                <Text>{option}</Text>
              </Col>
            ))}
          </Grid>
        </Paper>
      </Modal>
      <Footer>
        <FooterText>Empresa ART Betting LTDA</FooterText>
        <FooterText>CNPJ: 12.345.678/0001-90</FooterText>
        <FooterText>
          Endereço: Rua das Apostas, 123 - Cidade das Sortes
        </FooterText>
        <FooterCertification
          src="certificado_de_seguranca.png"
          alt="Certificado de Segurança"
        />
      </Footer>
    </Container>
  );
};

export default App;