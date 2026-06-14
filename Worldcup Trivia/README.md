# Web Development Project 2 - World Cup Trivia Flashcard

Submitted by: David Enebeli

This web app: This is a React-based flashcard web app that tests users' knowledge of FIFA World Cup history. Users can click on flashcards to reveal answers and use the Next Card button to view a randomly selected trivia card. The app includes country flag images, World Cup facts, and goalscoring records to create an engaging learning experience for soccer fans.

Time spent: 6 hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:
I added a card flip feature to reveal answers and a random card generator so users see a different trivia question each time. I also included country flag images to make the app more interactive and engaging.

* [x] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://drive.google.com/file/d/17bYuwZk6b0NYPvNaPmYiDHeiQzVv_6nU/view?usp=sharing' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Mac Screen recording 


## Notes

Describe any challenges encountered while building the app.

My biggest challenge was understanding how to use React state (useState) to manage card flipping and random card selection. After experimenting with state variables and event handlers, I was able to get the functionality working correctly.

## License

    Copyright [2026] [David Enebeli]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
