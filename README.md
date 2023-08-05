# Jobsify | The perfect Job Finder at your fingertips

## 👀 Description

JobHunter is a mobile application that helps you find the perfect job for you. It is built using React Native and Expo. It uses the Rapid API JSearch to fetch jobs and display them in a list. You can also search for jobs based on the location and the job title. You can also view the job description and apply for the job.

## 📝  Manifest: 

[Dependencies and more info](https://exp.host/@shreyap_19/react-native-jobs/index.exp?sdkVersion=48.0.0) 
Learn more: https://expo.fyi/manifest-url


## ⚙️   Project page: 

This works totally fine on Android but has certain problems while running on IOS platforms 
[Live Demo](https://expo.dev/@shreyap_19/react-native-jobs?serviceType=classic&distribution=expo-go) 
Learn more: https://expo.fyi/project-page


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
