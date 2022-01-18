# Chordial-FE

# Team Personnel: Casey, David, Kalan

#### Chordial is a visually stunning web application that helps aspiring and professional musicians discover compelling harmonic ideas. When a user chooses a chord, Chordial suggests compatible harmonic destinations. Users may save their created harmonic sequences as well as edit previous creations.

Chordial leverages [Framer Motion](https://www.framer.com/motion/), [Material UI](https://mui.com/), and [Styled Components](https://styled-components.com/) for styling. It's deployed using [Netlify](netlify.com) and [Heroku](https://www.heroku.com/).

User auth is created from scratch using Nodejs/Express, [bcrypt](https://www.npmjs.com/package/bcryptjs), [JWT](https://jwt.io/), and React Context. 

Our audio playback uses Javascript's built-in Audio() constructor. The tones for each chord are root based triads, recorded by the authors using Logic's Rhodes Stage Piano software instrument.

The chord theory behind Choridal was created by the authors who have decades of composition experience between them. Not all possibile chord relations were included to avoid complications, keeping realistic boundaries within the framework. You can see the chord relations [here](https://github.com/Chordial-Music/Chordial-FE/blob/main/src/data/data.js).

Here is an example of a chord sequence created by one of our users. 
![image](https://user-images.githubusercontent.com/29679939/149868917-cf031d4b-f48f-43ce-a97c-470cec9a369b.png)

Here is an example of chord "nodes", or suggested harmonic destiations. These appear on screen using Framer Motion. 
![image](https://user-images.githubusercontent.com/29679939/149869108-8edd4f3a-3dcf-4169-b624-4a0b24a9fc21.png)

Users can Save, Edit, and Delete their chord sequences. 
![image](https://user-images.githubusercontent.com/29679939/149869304-33cf6c78-4b96-4961-a74a-8cff020b97e3.png)

Finally, while Chordial's default chords are limited to triads, users may enter in chord qualities or different chords altogether in the Edit menu.

<img src="https://user-images.githubusercontent.com/29679939/149869441-4cdab7fb-0dad-4b6b-b55d-c51cd46b1fed.png" width="250px" />

Our backend repo lives [here](https://github.com/Chordial-Music/Chordial-BE).
