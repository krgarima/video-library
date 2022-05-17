/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "STAY (Official Video)",
    creator: "The Kid LAROI & Justin Bieber",
    genre: "pop",
    date: "Jul 9, 2021",
    views: "530,843,539 views",
    photo: "/assets/images/display1.JPG",
    url: "https://www.youtube.com/embed/kTJczUoc26U",
  },

  {
    _id: uuid(),
    title: "Cold Heart",
    creator: "Elton John & Dua Lipa",
    genre: "pop",
    date: "Aug 13, 2021",
    views: "241,674,065 views",
    photo: "/assets/images/coldHeart.JPG",
    url: "https://www.youtube.com/embed/qod03PVTLqk",
  },

  {
    _id: uuid(),
    title: "Boy With Luv",
    creator: "BTS ft. Halsey",
    genre: "pop",
    date: "Apr 12, 2019",
    views: "1,500,950,539 views",
    photo: "/assets/images/bts.JPG",
    url: "https://www.youtube.com/embed/XsX3ATc3FbA",
  },

  {
    _id: uuid(),
    title: "Titanium",
    creator: "David Guetta ft. Sia",
    genre: "EDM",
    date: "Dec 21, 2011",
    views: "1,571,992,336",
    photo: "/assets/images/titanium.JPG",
    url: "https://www.youtube.com/embed/JRfuAukYTKg",
  },

  {
    _id: uuid(),
    title: "The Nights",
    creator: "Avicii",
    genre: "EDM",
    date: "Dec 15, 2014",
    views: "849,164,481 views",
    photo: "/assets/images/theNights.JPG",
    url: "https://www.youtube.com/embed/UtF6Jej8yb4",
  },

  {
    _id: uuid(),
    title: "Cold water",
    creator: "Major Lazer - (ft. Justin Bieber & MØ)",
    genre: "EDM",
    date: "Sep 14, 2016",
    views: "259,998,167 views",
    photo: "/assets/images/coldWater.JPG",
    url: "https://www.youtube.com/embed/nBtDsQ4fhXY",
  },

  {
    _id: uuid(),
    title: "Without me",
    creator: "Eminem",
    genre: "Hip Hop",
    date: "Jun 17, 2009",
    views: "1,392,301,042 views",
    photo: "/assets/images/withoutMe.JPG",
    url: "https://www.youtube.com/embed/YVkUvmDQ3HY",
  },

  {
    _id: uuid(),
    title: "Wolves",
    creator: "Big Sean ft. Post Malone",
    genre: "Hip Hop",
    date: "Nov 20, 2020",
    views: "16,268,858 views",
    photo: "/assets/images/wolves.JPG",
    url: "https://www.youtube.com/embed/u7A1ESIR2K4",
  },
];
