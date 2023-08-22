import ExpenseItem from "./components/ExpenseItem";

function App(){
  return(
    <div>
    <h2>Let's get started</h2>
    {/* <p>This is also visible</p> */}
    {/* now we import it we can use it like html element so we can replace this paragraph with tag, the key difference bw html element is just this it is not started  with a lower case char, and indeed ur own componet must start  with a upper case character, becaluse the simple rule which react applies is that lowercase elements or builtin html elements is lowercase or uppecase */}
    <ExpenseItem></ExpenseItem>

    </div>
  );
}
export default App;
