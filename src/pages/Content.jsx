import React from "react";
import ContentIconSideNav from "../components/layout/ContentIconSideNav";
import { Container, Grid } from "@mantine/core";

const Content = () => {
  return (
    <div className="content-page custom-grid max-width-100vw">
      <ContentIconSideNav />
      <Container className="content-container py-4 px-5 d-flex flex-column w-100" fluid>
        <Grid className="justify-content-between">
            <Grid.Col span={6} className="d-flex flex-column">
                <h2>Content</h2>
                <span>Schedule, publish and manage posts and stories, and more.</span>
            </Grid.Col>
            <Grid.Col span={4} className="d-flex justify-content-end align-items-center gap-2">
                <button className="grey-btn">Export Data <i className="fa fa-caret-down"></i></button>
                <button className="grey-btn"><i className="fa fa-clapperboard"></i> Create Reel</button>
                <button className="blue-btn"><i className="fa fa-search"></i></button>
            </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Content;
