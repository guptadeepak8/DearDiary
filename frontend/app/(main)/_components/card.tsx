"use client";

export const Card = () => {
  return (
    <div className="mx-6 h-52 my-5 py-2 bg-white rounded-lg  hover:border-blue-400 border-2">
      <div className="flex flex-col px-2">
          <span className="font-medium text-lg ">A beatuiful day met my old...</span>
        <div className=" h-0.5 bg-slate-300 mx-2 my-3"></div>
        <div className="">
          <span className="text-sm ">
            Lorem ipsum dolor sit amet consec adipisicing elit. Molestiae
            officiis cupiditate veniam voluptatem veritatis tempora architecto
            deserun......
          </span>
        </div>
        <div className="flex items-center">
          <span className=" my-3 inline-flex items-center rounded-md bg-red-300 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Work
          </span>
          <span className="ml-auto text-xs text-muted-foreground">
            Today,4:30pm
          </span>
        </div>
      </div>
    </div>
  );
};
