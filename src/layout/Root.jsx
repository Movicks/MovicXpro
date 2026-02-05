import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="h-full bg-transparent">
      <Outlet />
    </div>
  );
};

export default Root;