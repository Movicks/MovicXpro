import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};

export default Root;