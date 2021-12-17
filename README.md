
# Low-Fi

A brief description of what this project does and who it's for

A low-fi music player application made with a react, that will play the music from a local library. 
Styled using CSS3.
A project made to gain a better understanding of React hooks. 
The project is for users who enjoy lowfi music.    
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

using the useState() hook enables you to integrate state into functional component,
Hooks must always be declared at the top of the function, this helps to preserve the state in all renderings of the component.
to remember things components use state.


useEffect() hook tells react that something needs to occur after the first render.
React will remember the function you passed and call it after the DOM updates. 
To this effect we set the document title but we can also fetch data or other API's.

placing the useEffect() hook inside the component lets us access the count state or props right from the effect(read function). 
the hook is similar to life-cycle methods in class components, meaning it will run after every render including the initial render.
you can think of it as a combination of componentDidMount, componentDidUpdate and componentWillUnmount. remember to control the behavior we should run it only on the initial render or when a specific state changes. We can pass dependencies to the effect to do so ( think the empty array,[] before the end of the hook call). this hook also provides a clean-up option to allow you to clean up functions running in the background before the components life cycle comes to an end.


useRef() hook returns a mutable ref object with the passed argument as its current property (initial value). the returned object will be retained for the duration of the components lifetime.

Some challenges I faced along the way was to make sure the folder containing the music library was in the public directory otherwise when compliling there were issues with the being able to access the path of the mp3 file. 
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

