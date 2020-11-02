import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import data from "../assets/data/Pandangan";

function KataOrang({ theme }) {
  const [index, setIndex] = useState(3);

  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const curr = document.querySelector("#KataOrang");
    const Ubah = { width: curr.offsetWidth, height: curr.offsetHeight };
    setUkuran(Object.assign({}, Ubah));

    window.addEventListener("resize", function () {
      const forUbah = { width: curr.offsetWidth, height: curr.offsetHeight };
      setUkuran(Object.assign({}, forUbah));
    });
  }, []);

  return (
    <section id="KataOrang">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((key, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={`https://dummyimage.com/${ukuran.width}x${ukuran.height}/${
                theme === "light" ? "f1faee" : "373940"
              }/fff&text=+`}
              alt={key.alt}
            />
            <Carousel.Caption>
              <h3 style={{ color: theme === "light" ? "000" : "fff" }}>
                {key.capt[0]}
              </h3>
              <p style={{ color: theme === "light" ? "000" : "fff" }}>
                {key.capt[1]}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default KataOrang;
