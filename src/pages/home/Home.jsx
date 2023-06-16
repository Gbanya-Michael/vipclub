import React from "react";
import "./Home.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/intro";
import Vip from "../../components/vip-slideshow/Vip";
import Live from "../../components/live-games/Live";
import Contact from "../../components/contact/Contact";
export default function Home() {
  return (
    <>
      <div>
        <Container>
          <Header />
          <Intro />
          <Vip />
          <Live />
          <Contact />
        </Container>
      </div>
    </>
  );
}
