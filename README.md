# Jobsify | The perfect Job Finder at your fingertips

## 👀 Description

Jobsify is a mobile application that helps you find the perfect job for you. It is built using React Native and Expo. It uses the Github Jobs API to fetch jobs and display them in a list. You can also search for jobs based on the location and the job title. You can also view the job description and apply for the job.

## 📝 Notes

- for importing api keys, etc in .env we can't import directly like
```js
import { API_KEY } from "@env";
```
because it's not a built-in module

- Add the "react-native-dotenv" preset to your .babelrc file at the project root like the one added in this project, then you can use the above js code snippet to import your key

# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
