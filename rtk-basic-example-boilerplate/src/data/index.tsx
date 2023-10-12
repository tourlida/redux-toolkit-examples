import { faker } from "@faker-js/faker/locale/en";
import { Movie, Song } from "../models";

export const createRandomMovie = (): Movie => {
  return {
    id: faker.number.int(),
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.url(),
  };
};

export const createRandomSong = (): Song => {
  return {
    id: faker.number.int(),
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.url(),
  };
};
