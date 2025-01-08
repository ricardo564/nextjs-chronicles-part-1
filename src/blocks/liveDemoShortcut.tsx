"use client";

import { Modal } from "@/components/Modal";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from 'react';

interface LiveDemoShortcutProps {
  className?: string;
  videoUrl: string;
}

export function LiveDemoShortcut({ className, videoUrl }: LiveDemoShortcutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        className={`min-w-[20rem] md:min-w-[13rem] group flex items-center gap-3 px-6 py-3 rounded-full w-full ${className}`}
        aria-label="View Live Demo"
        title="View Live Demo"
        onClick={handleOpenModal}
      >
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="flex-shrink-0 relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
          </div>

          <span className="text-white font-medium text-lg truncate">
            Live Demo...
          </span>
        </div>
      </button>

      <Modal
        id="live-demo-modal"
        title="Live Demo"
        isOpen={isOpen}
        onClose={handleCloseModal}
        className="min-w-[17rem] max-w-2xl"
      >
        <VideoPlayer
          src={videoUrl}
          isModalOpen={isOpen}
        />
      </Modal>
    </>
  );
}
