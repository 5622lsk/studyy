import Button from "./html/Button";
import CheckBox from "./html/CheckBox";

const Login = () => {
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] bg-white py-10 px-[25px] inter">
          <h1 className="text-xl font-bold text-[#4f4f4f] mb-[10px]">
            Sign Into App
          </h1>
          <p>please</p>
          <form action="" className="flex flex-col gap-4">
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Someone@example.com" />
            <input type="password" placeholder="Enter Password" />
            <CheckBox>i agree with terms and policies.</CheckBox>
            <div className="flex flex-col gap-4 mt-4">
              <Button className="bg-[#4F4F4F]">Sign In</Button>
              <Button className="border border-[#4F4F4F] text-[#4F4F4F]">
                Go to Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
