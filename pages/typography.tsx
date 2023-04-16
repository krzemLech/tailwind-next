import React from "react";

const Typography = () => {
  return (
    <div>
      <h1 className="text-xl text-green-500 border-l-2 border-green-500">
        Hello Nxt!
      </h1>
      <h2 className="text-3xl italic antialiased">Title 2</h2>
      <h3 className="text-5xl first-letter:uppercase">title 3</h3>
      <p className="text-supersmall pl-2">My test text</p>
      <p className="text-sm">My test text</p>
      <p className="text-base">My test text</p>
      <p className="truncate">
        This is a long example for how truncation in tailwind css works. This
        however has to be very long, cuz it cuts at the end of the div.
      </p>
    </div>
  );
};

export default Typography;
