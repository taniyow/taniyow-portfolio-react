import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import mealSharing from "../../assets/recentprojects/mealsharing.png";
import travelPlanner from "../../assets/recentprojects/travelplanner.png";
import movieApp from "../../assets/recentprojects/movieapp.png";
import socialLinkApp from "../../assets/recentprojects/sociallinkapp.png";
import quizApp from "../../assets/recentprojects/quizapp.png";
import giphyApp from "../../assets/recentprojects/giphyapp.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const projects = [
    {
      id: 1,
      title: "Meal Sharing",
      description: `The Meal Sharing App, developed for Hack Your Future Denmark, is a full-stack web application. It allows users to explore, reserve, and share meals seamlessly. You can access the app <a href="https://meal-sharing-fa4o.onrender.com" target="_blank" rel="noopener noreferrer">here</a>.`,
      alter: "Meal-sharing App",
      image: mealSharing,
    },
    {
      id: 2,
      title: "Travel Planner",
      description: `This is a cutting-edge application, built with React, aims to revolutionize the way people plan their trips. Whether you're organizing a quick weekend getaway or a detailed multi-city vacation, this app is here to help. You can access the app <a href="https://github.com/AngelHenriettaAboah/travel-planner" target="_blank" rel="noopener noreferrer">here</a>.`,
      alter: "Travel Planner",
      image: travelPlanner,
    },
    {
      id: 3,
      title: "Movie App",
      description: `This project was bootstrapped with Create React App. Browse through a vast collection, get personalized recommendations, and stay updated with the latest releases, all in one convenient platform. You can access the app <a href="https://github.com/AngelHenriettaAboah/movieApp" target="_blank" rel="noopener noreferrer">here</a>.`,
      alter: "Movie App",
      image: movieApp,
    },
    {
      id: 4,
      title: "Social Link App",
      description: `The Social Link App allows users to input their basic information and social media links, and then generates a shareable profile showcasing these links. You can access the app <a href="https://github.com/AngelHenriettaAboah/socialLink-app" target="_blank" rel="noopener noreferrer">here</a>.`,
      alter: "Social Link App",
      image: socialLinkApp,
    },
    {
      id: 5,
      title: "Quiz App",
      description: `This interactive Quiz App allows one to compete with friends. You can access the app <a href="https://quiz-patch-app.netlify.app" target="_blank" rel="noopener noreferrer">here</a>.`,
      alter: "Quiz App",
      image: quizApp,
    },

    {
      id: 6,
      title: "Giphy App",
      description: `This giphy app provides a simple and intuitive interface for exploring diverse topics making it an entertaining tool for users to search for gifs. You can access the app <a href="https://github.com/AngelHenriettaAboah/gify-search-app" target="_blank" rel="noopener noreferrer">here</a>.`,
      alter: "giphy App",
      image: giphyApp,
    },
  ];

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
