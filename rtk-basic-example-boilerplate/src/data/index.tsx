import { faker } from "@faker-js/faker/locale/en";
import { Movie, Song } from "../models";

export const createRandomMovie = (): Movie => {
  return {
    id: faker.number.int(5000000000),
    title: faker.lorem.words(3).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.url(),
  };
};

export const createRandomSong = (): Song => {
  return {
    id: faker.number.int(5000000000),
    title: faker.lorem.words(3).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.url(),
  };
};
