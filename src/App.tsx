import Login from "./components/Login";
import Button from "./components/html/Button";
import CheckBox from "./components/html/CheckBox";
import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Enter your name" />
          <CheckBox>i aree that and policies!</CheckBox>
          <Button className="bg-[#4b4b4b]">Add</Button>
        </div>
      </div>
      <Login />
    </>
  );
}
