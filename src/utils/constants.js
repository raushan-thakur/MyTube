import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];


export const commentsData = [
    {
      name: "Rahul Singh",
      text: "This movie faced challenges due to its release date, but now it has a clear path after the delay of another major film.",
      replies: [],
    },
    {
      name: "Rohit Verma",
      text: "Let people say what they want about the accident, we know it wasn't an accident. With the postponement of Kalki 2899 AD, this film will get a long run.",
      replies: [
        {
          name: "Shubham Patel",
          text: "The movie was in danger due to its release date, but now after the postponement of Kalki 2899 AD, it will get a long run.",
          replies: [],
        },
        {
          name: "Ankit Sharma",
          text: "People can talk about the accident all they want, we know it wasn't an accident. It was a calculated move... Jai Shree Ram️!",
          replies: [
            {
              name: "Vikram Rao",
              text: "Movies should be like this: top-level acting, no special effects, no overacting, no vulgarity—pure talent. We want to see more films like this.",
              replies: [
                {
                  name: "Nitin Mehta",
                  text: "Excited to see this full movie!",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Akash Kumar",
          text: "This movie was in danger because of its release date, but now after Kalki 2899 AD is postponed, this film will get a clear and long run.",
          replies: [],
        },
      ],
    },
    {
      name: "Karan Thakur",
      text: "After the postponement of Kalki 2899 AD, this film will get a clear and long run.",
      replies: [],
    },
    {
      name: "Arjun Das",
      text: "When I was young, films like these would always get postponed, but now they will get a clear and long run.",
      replies: [],
    },
    {
      name: "Manish Yadav",
      text: "People can talk about accidents all they want; we know it wasn't an accident. Now, after the delay of Kalki 2899 AD, this film will get a clear and long run.",
      replies: [
        {
          name: "Deepak Joshi",
          text: "This movie was in danger because of its release date, but now after Kalki 2899 AD is postponed, this film will get a clear and long run.",
          replies: [],
        },
        {
          name: "Ravi Shankar",
          text: "People can say what they want about the accident; we know it wasn't an accident. It was a calculated move... Jai Shree Ram️!",
          replies: [
            {
              name: "Sanjay Mishra",
              text: "Movies should be like this: top-level acting, no special effects, no overacting, no vulgarity—pure talent. We want to see more films like this.",
              replies: [
                {
                  name: "Amit Kapoor",
                  text: "Excited to see this full movie!",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Rakesh Chauhan",
          text: "This movie was in danger because of its release date, but now after Kalki 2899 AD is postponed, this film will get a clear and long run.",
          replies: [],
        },
      ],
    },
    {
      name: "Suraj Sinha",
      text: "This movie was in danger because of its release date, but now after Kalki 2899 AD is postponed, this film will get a clear and long run.",
      replies: [],
    },
    {
      name: "Prakash Nair",
      text: "This Swiper library was not intended for films, but now this movie will get a clear and long run.",
      replies: [],
    },
  ];
  