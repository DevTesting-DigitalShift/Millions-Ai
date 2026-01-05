"use client";

import { useEffect, useState } from "react";
import "./floating-cube.css";

const carouselData = [
  {
    id: 1,
    title: "Increase in on-time delivery",
    metric: "70%",
    image:
      "https://delivery-p141552-e1488202.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9ce1de3d-ca32-44a9-8998-73c55943223a/as/Image_Photo_commercial_squareValue_automotive.jpg?width=750&format=jpg&optimize=medium&preferwebp=true",
  },
  {
    id: 2,
    title: "Total value realized by Celonis customers",
    metric: "$6.5bn",
    image:
      "https://delivery-p141552-e1488202.adobeaemcloud.com/adobe/assets/urn:aaid:aem:73b8ca18-fb92-4f2b-a1f8-925b55f0595c/as/Image_Photo_commercial_squareValue_road.jpg?width=750&format=jpg&optimize=small&preferwebp=true",
  },
  {
    id: 3,
    title: "Increase in invoices processed through AI-powered automation",
    metric: "66%",
    image:
      "https://delivery-p141552-e1488202.adobeaemcloud.com/adobe/assets/urn:aaid:aem:4a0f2690-0bec-4b77-8d2b-8ffde6fe3e76/as/Image_Photo_commercial_squareValue_ai.jpg?width=750&format=jpg&optimize=medium&preferwebp=true",
  },
  {
    id: 4,
    title: "Process automation opportunities discovered and implemented",
    metric: "1,100+",
    image:
      "https://delivery-p141552-e1488202.adobeaemcloud.com/adobe/assets/urn:aaid:aem:5b9ab914-88a6-4fed-807d-aa7910df26a0/as/Image_Photo_commercial_squareValue_it.jpg?width=750&format=jpg&optimize=medium&preferwebp=true",
  },
];

export function FloatingCube() {
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 10);

    const timer = setInterval(() => {
      setRotation((r) => r - 90);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`fragment-wrapper ${isVisible ? "show" : ""}`}>
      <div className="cube-container">
        {/* Image Cube */}
        <div className="cube-scene">
          <div
            className="cube"
            style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
          >
            {carouselData.map((item, index) => (
              <div
                key={`img-${item.id}`}
                className="cube-face cube-face-image"
                style={{ "--face-index": index } as React.CSSProperties}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading={index === 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Cube */}
        <div className="cube-scene">
          <div
            className="cube"
            style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
          >
            {carouselData.map((item, index) => (
              <div
                key={`text-${item.id}`}
                className="cube-face cube-face-text"
                style={{ "--face-index": index } as React.CSSProperties}
              >
                <p className="dark-square title">{item.title}</p>
                <p aria-label={item.metric}>
                  <span aria-hidden="true" className="word-wrap-square">
                    <span className="char-wrapper">
                      {item.metric.split("").map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className="char-square"
                          style={{
                            transitionDelay: `${charIndex * 0.02}s`,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
