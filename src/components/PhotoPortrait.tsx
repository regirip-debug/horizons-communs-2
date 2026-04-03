"use client";

import Image from "next/image";
import { useState } from "react";

export function PhotoPortrait() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-petrol/10 to-beige/30 border border-beige/50 flex items-center justify-center overflow-hidden">
        <div className="text-center p-8">
          <div className="w-24 h-24 rounded-full bg-petrol/15 mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-petrol/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="font-semibold text-petrol-dark">Régis Pio</p>
          <p className="text-sm text-charcoal/40 italic mt-1">
            Co-fondateur, Ressourcerie La Mine
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-beige/50 overflow-hidden bg-gradient-to-br from-petrol/10 to-beige/30">
      <Image
        src="/images/photo.png"
        alt="Régis Pio - Consultant en transformation des organisations engagées"
        width={600}
        height={600}
        className="w-full h-auto"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        onError={() => setImgError(true)}
      />
    </div>
  );
}
