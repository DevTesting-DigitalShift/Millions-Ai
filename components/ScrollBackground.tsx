"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * ScrollBackground Component
 *
 * Shows images that change as you scroll - evolution from stone to car
 * - Images: stone → stone-wheel → wood-wheel → car
 * - Small image sizes for subtle effect
 * - Smooth transitions between images
 * - Left-to-right sliding animation
 * - No animation in Hero or Footer sections
 */

// Image evolution sequence
const BACKGROUND_IMAGES = [
  {
    id: 1,
    src: "/stone.jpg",
    alt: "Stone",
    size: 250,
    x: 20,
    y: 40,
    opacity: 0.6,
  },
  {
    id: 2,
    src: "/stone-wheel.webp",
    alt: "Stone Wheel",
    size: 280,
    x: 75,
    y: 55,
    opacity: 0.6,
  },
  {
    id: 3,
    src: "/wood-wheel.avif",
    alt: "Wood Wheel",
    size: 270,
    x: 50,
    y: 50,
    opacity: 0.6,
  },
  {
    id: 4,
    src: "/car.webp",
    alt: "Car",
    size: 300,
    x: 25,
    y: 45,
    opacity: 0.6,
  },
  {
    id: 5,
    src: "/stone.jpg",
    alt: "Stone",
    size: 260,
    x: 70,
    y: 60,
    opacity: 0.6,
  },
  {
    id: 6,
    src: "/stone-wheel.webp",
    alt: "Stone Wheel",
    size: 275,
    x: 40,
    y: 35,
    opacity: 0.6,
  },
  {
    id: 7,
    src: "/wood-wheel.avif",
    alt: "Wood Wheel",
    size: 285,
    x: 60,
    y: 50,
    opacity: 0.6,
  },
  {
    id: 8,
    src: "/car.webp",
    alt: "Car",
    size: 290,
    x: 30,
    y: 55,
    opacity: 0.6,
  },
];

export function ScrollBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProgress, setFadeProgress] = useState(0);
  const [isInHeroOrFooter, setIsInHeroOrFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      // Skip if at very top (Hero) or very bottom (Footer)
      const heroHeight = 800; // Approximate hero height
      const footerHeight = 600; // Approximate footer height

      if (scrolled < heroHeight) {
        setIsInHeroOrFooter(true);
        return; // No animation in hero
      }

      if (scrolled > scrollHeight - footerHeight) {
        setIsInHeroOrFooter(true);
        return; // No animation in footer
      }

      setIsInHeroOrFooter(false);

      // Calculate which image should be shown based on scroll
      // Divide the scrollable area (minus hero and footer) into 8 segments
      const effectiveScroll = scrolled - heroHeight;
      const effectiveScrollHeight = scrollHeight - heroHeight - footerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, effectiveScroll / effectiveScrollHeight)
      );

      // Calculate current image index (0-7)
      const totalImages = BACKGROUND_IMAGES.length;
      const imageProgress = scrollProgress * totalImages;
      const currentIdx = Math.floor(imageProgress);
      const fade = imageProgress - currentIdx; // 0 to 1 within current image

      setCurrentIndex(currentIdx);
      setFadeProgress(fade);
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // V1: Keep existing scroll calculation (unchanged)
  const currentImage = BACKGROUND_IMAGES[currentIndex];

  // Don't render anything in Hero or Footer sections
  if (isInHeroOrFooter || !currentImage) return null;

  // ========== V2: PERSISTENCE LAYER ==========
  // Calculate continuous scroll position (0 to 8 for 8 images)
  const continuousProgress = currentIndex + fadeProgress;

  // Helper function to calculate stage properties based on distance from current
  const getStageProperties = (stageIndex: number) => {
    const distance = stageIndex - continuousProgress;

    // Position calculation (left = past, center = present, right = future)
    // Increased spacing to prevent overlap
    let translateX;
    if (distance < -0.5) {
      // Past stages: far left with parallax lag (no overlap)
      translateX = distance * 80 + fadeProgress * 8; // Much more spacing
    } else if (distance > 0.5) {
      // Future stages: far right (no overlap)
      translateX = distance * 80;
    } else {
      // Current stage: centered, direct tracking
      translateX = distance * 60;
    }

    // Opacity calculation
    let opacity;
    const absDistance = Math.abs(distance);

    if (absDistance < 0.5) {
      // Current stage: full opacity
      opacity = 0.6;
    } else if (distance < 0) {
      // Past stages: 15-25% opacity, fade based on distance
      opacity = Math.max(0.15, 0.25 - absDistance * 0.05);
    } else {
      // Future stages: very low opacity hint
      opacity = Math.max(0, 0.2 - absDistance * 0.1);
    }

    return { translateX, opacity };
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* V2: Render ALL stages with persistence */}
      {BACKGROUND_IMAGES.map((image, index) => {
        const { translateX, opacity } = getStageProperties(index);

        // Only render stages that are somewhat visible
        if (opacity < 0.1) return null;

        return (
          <div
            key={`stage-${image.id}-${index}`}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              opacity,
              transform: `translateX(${translateX}%)`,
            }}
          >
            <BackgroundImage image={image} />
          </div>
        );
      })}
    </div>
  );
}

// Helper component to render a background image
function BackgroundImage({ image }: { image: (typeof BACKGROUND_IMAGES)[0] }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${image.x}%`,
        top: `${image.y}%`,
        width: `${image.size}px`,
        height: `${image.size}px`,
        opacity: image.opacity,
        transform: `translate(-50%, -50%)`,
        transition: "all 0.7s ease-out",
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.size}
        height={image.size}
        className="object-contain rounded-lg"
        priority={false}
        quality={75}
      />
    </div>
  );
}
