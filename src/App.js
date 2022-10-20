import React, { useState, useEffect } from "react";

const App = () => {
  const [yazi, setYazi] = useState("HELLO WORLD");
  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    document.title = `${yazi}`;
  });

  return (
    <div>
      <p>{yazi}</p>
      <button onClick={() => setYazi("MERHABA DÜNYA")}>Türkçe</button>
      <button onClick={() => setYazi("HELLO WORLD")}>English</button>
    </div>
  );
};

export default App;
