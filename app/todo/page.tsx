// export default async function Page() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = (await res.json()).slice(0, 10);
//   console.log(data);
//   return (
//     <ul>
//       {data.map(({ title, id }: { title: string; id: string }) => {
//         return <li key={id}>{title}</li>;
//       })}
//     </ul>
//   );
// }

"use client";

import { useEffect, useState } from "react";

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

type Todo = { id: number; title: string };

export default function Page() {
  const [list, setList] = useState<Todo[]>([]);

  useEffect(() => {
    let cancelled = false;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: Todo[]) => {
        if (!cancelled) {
          setList(data.slice(0, getRandomInt(1, 10)));
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <ul>
        {list.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        换一批
      </button>
    </>
  );
}
