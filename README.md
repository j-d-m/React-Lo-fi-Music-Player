THINGS I HAVE LEARNED AND GAINED A BETTER UNDERSTANDING OF ALONG THE WAY🧮

NPX - is the tool that will download, configure and execute the package
CREATE-REACT-APP - tool chain that will provide the boilerplate for the react application
MUSIC-PLAYER-REACT-APP - name of the project.
//npx create-react-app name of your project
<------------------------------------------------------------------------------------------------------------>

- you can import font awesome via the html file.
- to use javascript withing JSX you need to put it in curly brackets
- a functional component returns a react element that is JSX.
  <------------------------------------------------------------------------------------------------------------>

using the useState() hook enables you to integrate state into functional component,
Hooks must always be declared at the top of the function, this helps to preserve the state in all renderings of the component.

<------------------------------------------------------------------------------------------------------------>
useEffect() hook tells react that something needs to occur after the first render. React will remember the function you passed and call it after the DOM updates. to this effect we set the document title but we can also fetch data or other API's.
placing the useEffect() hook inside the component lets us access the count state or props right from the effect(read function). the hook is similar to life-cycle methods in class components, meaning it will run after every render including the initial render. you can think of it as a combination of componentDidMount, componentDidUpdate and componentWillUnmount. remember to control the behavior we should run it only on the initial render or when a specific state changes. We can pass dependencies to the effect to do so ( think the empty array,[] before the end of the hook call). this hook also provides a clean-up option to allow you to clean up functions running in the background before the components life cycle comes to an end.
<-------------------------------------------------------------------------------------------------------------->
useRef() hook returns a mutable ref object with the passed argument as its current property (initial value). the returned object will be retained for the duration of the components lifetime.
<-------------------------------------------------------------------------------------------------------------->
Props are Arguments passed into react components. the value of props is received from props being sent from one component to another.
