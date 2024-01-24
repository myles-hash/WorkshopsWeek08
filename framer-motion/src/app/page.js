import AnimateIn from "./components/AnimateIn";
import MyComponent from "./components/myComponent";

export default function Home(){
  return(
    <div>
      <MyComponent />
      <AnimateIn>
        <p>This is animated in</p>
      </AnimateIn>
        <p>This isnt</p>
      <AnimateIn>
        <h3>This certainly is animated in</h3>
      </AnimateIn>
    </div>
  )
}