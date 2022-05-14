  <body >
  <h2 align="center"> 🐋 🐳Cachalote 🐳🐋 </h2>
  <h3 align="center">Share what you are reading and find people who also likes it - or not!</h3>

</br>
</br>

# What does it do?

<div align="left"> This app focuses on three main questions
<li> What are you reading?
<li> Wha do you like to read?
<li> Do you want to know what your friend are reading?
</br>
The main idea is to simulate a social media focused on reading - books, comics, novels or mangas - with a gamified lense, where you can get achievements and little prizes and a competitive optional side, allowing the user to share it's status and achevements, or not. </br>
This difference is mainly done with database conditions, such as "show notifications" and "show achievements", in order to allow users to have a gamified and fun experience whist not getting overwhelmed by competition and by comparing themselves to others. 
</br>
The routes here presented allow one to create a new user, a new seessions, add books, reading status and more, always trying to respect the users own preferences</div>

</br>
</br>
<div align="right">
Check the related API repository here: https://github.com/ThaisFrancaG/Server_Cachalote_Back
</div>

# Routes and Usage

# Routes and Usage

## 🐳 UNDER CONSTRUCTION 🐳

<!--
```http
  POST /recommendations/
```

| Parameters to send | Type     | Description                                                             |
| :----------------- | :------- | :---------------------------------------------------------------------- |
| `name`             | `string` | **Obrigatório**. Title of the video you want to add as a recommendation |
| `youtubeLink`      | `string` | Valid link for video on YouTube. Default: 0                             |

</br>
</br>

## Get Current Recommendations

```http
  GET /recommendations/
```

| Response Data     | Type               | Description                                 |
| :---------------- | :----------------- | :------------------------------------------ |
| `recommendations` | `array of objects` | Return the 10 latests added recommendations |

</br>
</br>

## Get A Random Recommendation

```http
  GET /recommendations/random
```

| Response Data    | Type     | Description                          |
| :--------------- | :------- | :----------------------------------- |
| `recommendation` | `object` | Return the one random recommendation |

</br>
</br>

## Get A Random Recommendation

```http
  GET /recommendations/top/:amount
```

| Response Data                           | Params Data                            | Type               | Description                                                                                                                |
| :-------------------------------------- | :------------------------------------- | :----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `defined amount of top recommendations` | `amount of top recommendations wanted` | `array of objects` | Receives a amount -number- of recommendations desired and returns it in order os recommendations scores from most to least |

---

<h4 align="right" color="blue"> The randomness of the recommendation takes into account the recommendations score</h4>
</br>
</br>

## Get A Specific Recommendation

```http
  GET /recommendations/:id
```

| Response Data              | Params Data                   | Type               | Description                                                           |
| :------------------------- | :---------------------------- | :----------------- | --------------------------------------------------------------------- |
| `specific recommendation ` | `id of wanted recommendation` | `array of objects` | Receives an id and returns the recommendation related to the given id |

---

<h4 align="right" color="blue"> If the given id on the request url is not valid, an error is returned</h4>
</br>
</br>

```http
  POST /recommendations/:id/upvote or /recommendations/:id/downvote
```

| Response Data              | Params Data                   | Type  | Description                                                                                                                        |
| :------------------------- | :---------------------------- | :---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `specific recommendation ` | `id of wanted recommendation` | `n/a` | Receives an id on either the "upvote" or "downvote" route, and then either add or subtracts from the selected recommendation score |

---

<h4 align="right" color="blue"> Each downvote reduces the recommendation score by one. Once the score gets lower than -5, the recommendation is removed from the database</h4>
</br>
</br>

</br>

## TOOLBOX

---

| Language and tools |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                          |
| :----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Tools              |                                                                                                                                                                                                                                                                            <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> | <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> |
| Language           | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> |
| Testing            |                                                                                                                                                                                                                                                                                                                            <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> |                                                                                                                                                                                                                          |
| Database           |                                                                                                                                                                                                                                                               <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> |

</br>
</br>

## Testing Features

---

<div align="rigth"> This application contains both integration and unit testing done with jest and supertest. Those tests, however, don't guarantee front-end  sucess of usage, as they simply check up the routes responses for aproppriate requests and the services logic.
</br>
If during usage you faces up a situation not covered on the current tests, please open an issue so that it can be addressed.</div>

</br>
</br>

## Run Locally

---

Clone the project

```bash
  git clone git@github.com:ThaisFrancaG/TEST_SingMeASong_Back.git
```

Enter the project repository and install the needed dependencies

```bash
  npm install
```

Start up the server

```bash
  npm run dev
``` -->
