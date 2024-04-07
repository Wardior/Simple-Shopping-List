import React from "react";
import InputArea from "./components/InputArea";
import ItemsArea from "./components/ItemsArea";
import TotalArea from "./components/TotalArea";
import AppTitle from "./components/AppTitle";
import DateArea from "./components/DateArea";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className=" flex flex-col gap-4 p-3 bg-blue-200 w-[95%] md:w-[40%] h-[90%] md:h-[80%] lg:w-2/5 xl:w-1/2 xl:h-1/2 min-h-80 mx-auto rounded-md relative ">
        <DateArea />
        <AppTitle />
        <InputArea />
        <ItemsArea />
        <TotalArea />
      </div>
    </div>
  );
}

export default App;
