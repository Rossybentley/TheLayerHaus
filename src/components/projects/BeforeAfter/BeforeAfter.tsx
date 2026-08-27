import "./BeforeAfter.css";
import { hotspots } from "../../../data/hotspots";
import { useEffect, useRef, useState } from "react";
import { FiMove } from "react-icons/fi";
import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import beforeImage from "../../../assets/images/projects/before.jpg";
import afterImage from "../../../assets/images/projects/after.jpg";

const BeforeAfter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const percentage = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setShowHint(false);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;

    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <Section className="before-after">
      <Container>
        <div className="section-header">
          <p>TRANSFORMATION</p>

          <h2>Before & After</h2>

          <p>Drag anywhere on the image to reveal the transformation.</p>
        </div>

        <div
          ref={containerRef}
          className="before-after__wrapper"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <img
            src={beforeImage}
            alt="Interior space before The Layer Haus decoration"
            className="before-image"
            draggable={false}
          />

          <div
            className="after-image-wrapper"
            style={{
              width: `${position}%`,
            }}
          >
            <img
              src={afterImage}
              alt="Transformed interior space after The Layer Haus decoration"
              className="after-image"
              draggable={false}
            />
          </div>

          <div className="before-label">Before</div>

          <div className="after-label">After</div>

          {showHint && <div className="drag-hint">← Drag to Compare →</div>}

          {hotspots.map((spot) => (
            <button
              key={spot.id}
              className="hotspot"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
              }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() =>
                setActiveHotspot(activeHotspot === spot.id ? null : spot.id)
              }
            >
              ●
              {activeHotspot === spot.id && (
                <div className="hotspot-card">
                  <h4>{spot.title}</h4>

                  <p>{spot.description}</p>
                </div>
              )}
            </button>
          ))}
          <div
            className="slider-line"
            style={{
              left: `${position}%`,
            }}
          >
            <div className="slider-handle">
              <FiMove size={24} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BeforeAfter;
