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
  const [nextIndex, setNextIndex] = useState(1);
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
      const nextIdx = Math.min(currentIdx + 1, totalImages - 1);
      const fade = imageProgress - currentIdx; // 0 to 1 within current image

      setCurrentIndex(currentIdx);
      setNextIndex(nextIdx);
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

  const currentImage = BACKGROUND_IMAGES[currentIndex];
  const nextImage = BACKGROUND_IMAGES[nextIndex];

  // Don't render anything in Hero or Footer sections
  if (isInHeroOrFooter || !currentImage) return null;

  // Show only ONE image at a time - no overlapping
  // If fade progress > 0.5, show next image, otherwise show current
  const shouldShowNext =
    fadeProgress > 0.5 && nextImage && currentIndex !== nextIndex;
  const imageToShow = shouldShowNext ? nextImage : currentImage;
  const imageOpacity = shouldShowNext
    ? (fadeProgress - 0.5) * 2 // Fade in from 0.5 to 1
    : 1 - fadeProgress * 2; // Fade out from 0 to 0.5

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* Single Image - only one visible at a time */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          opacity: Math.max(0.3, imageOpacity), // Minimum opacity to keep it visible
        }}
      >
        <BackgroundImage image={imageToShow} />
      </div>
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
