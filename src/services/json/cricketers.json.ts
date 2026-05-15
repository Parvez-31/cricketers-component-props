import type { Cricketers } from "../../typescript/interface/cricketers.interface";
export const cricketers: Cricketers[] = [
  {
    id: "C101",
    name: "Virat Kohli",
    country: "India",
    role: "Batsman",
    jerseyNumber: 18,
    age: 37,
    battingStyle: "Right-hand Bat",
    bowlingStyle: "Right-arm Medium",
    isCaptain: false,

    category: {
      id: "CC1",
      name: "Top Order Batter",
      slug: "top-order-batter",
      icon: "bat",
    },

    images: [
      "https://example.com/kohli-1.jpg",
      "https://example.com/kohli-2.jpg",
    ],

    subStats: [
      {
        id: "SS101",
        format: "ODI",
        matches: 300,
        runs: 14000,
        average: 58.2,
        centuries: 51,
      },
      {
        id: "SS102",
        format: "T20",
        matches: 130,
        runs: 4200,
        average: 49.5,
        centuries: 1,
      },
    ],

    reviews: [
      {
        id: "CR101",
        fanName: "Rahul Sharma",
        rating: 5,
        comment: "One of the greatest batters of all time.",
        createdAt: "2026-05-10",
      },
      {
        id: "CR102",
        fanName: "Amit Roy",
        rating: 5,
        comment: "Excellent consistency in all formats.",
        createdAt: "2026-05-12",
      },
    ],
  },

  {
    id: "C102",
    name: "Ben Stokes",
    country: "England",
    role: "All-Rounder",
    jerseyNumber: 55,
    age: 35,
    battingStyle: "Left-hand Bat",
    bowlingStyle: "Right-arm Fast-Medium",
    isCaptain: true,

    category: {
      id: "CC2",
      name: "All Rounder",
      slug: "all-rounder",
      icon: "cricket-ball",
    },

    images: [
      "https://example.com/stokes-1.jpg",
      "https://example.com/stokes-2.jpg",
    ],

    subStats: [
      {
        id: "SS201",
        format: "Test",
        matches: 110,
        runs: 7000,
        wickets: 220,
        average: 36.5,
      },
      {
        id: "SS202",
        format: "ODI",
        matches: 125,
        runs: 3500,
        wickets: 95,
        average: 40.2,
      },
    ],

    reviews: [
      {
        id: "CR201",
        fanName: "John Smith",
        rating: 5,
        comment: "Best all-rounder in modern cricket.",
        createdAt: "2026-05-09",
      },
      {
        id: "CR202",
        fanName: "David Lee",
        rating: 4,
        comment: "Always performs in pressure matches.",
        createdAt: "2026-05-13",
      },
    ],
  },
];