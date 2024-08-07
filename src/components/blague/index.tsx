export const prerender = true;

import BlagueCard from "./card/index.tsx";

import { useEffect, useState } from "react";

export default function Blague() {
  const [loading, setLoading] = useState(true);
  const [lablague, setLablague] = useState({
    text_head: "",
    text: "",
    text_hidden: "",
    // media: "",
  });

  const getNewBlague = async () => {
    const response = await fetch("https://api.blablagues.net/?rub=blagues"); // rub=images
    const data = await response.json();
    setLoading(false);
    setLablague(data.data.content);
  };

  useEffect(() => {
    getNewBlague();
  }, []);

  async function handleClick() {
    setLoading(true);
    getNewBlague();
  }

  return (
    <div>
      {loading && <img src="/lablague/assets/images/loading.gif" width="200" />}
      {!loading && (
        <BlagueCard
          title={lablague?.text_head}
          text={lablague?.text + lablague?.text_hidden}
          // text={lablague?.media}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
