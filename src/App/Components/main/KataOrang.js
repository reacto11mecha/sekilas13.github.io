import { useState, useEffect, useContext, useMemo, memo } from "react";
import { Context } from "../../utils/stateProvider";
import data from "../../assets/data/Pandangan";
import { Carousel } from "react-bootstrap";
import { observer } from "mobx-react";

function KataOrang() {
  const store = useContext(Context);
  const [index, setIndex] = useState(3);

  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSelect = useMemo(
    (selectedIndex) => void setIndex(selectedIndex),
    []
  );

  useEffect(() => {
    const curr = document.querySelector("#KataOrang");
    const Ubah = { width: curr.offsetWidth, height: curr.offsetHeight };
    setUkuran(Object.assign({}, Ubah));

    function resize() {
      const forUbah = { width: curr.offsetWidth, height: curr.offsetHeight };
      setUkuran(Object.assign({}, forUbah));
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="KataOrang">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((key, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={`https://via.placeholder.com/${ukuran.width}x${
                ukuran.height
              }/${store.theme === "light" ? "f1faee" : "373940"}/fff&text=+`}
              alt={key.alt}
            />
            <Carousel.Caption>
              <h3 style={{ color: store.theme === "light" ? "000" : "fff" }}>
                {key.capt[0]}
              </h3>
              <p style={{ color: store.theme === "light" ? "000" : "fff" }}>
                {key.capt[1]}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default memo(observer(KataOrang));
