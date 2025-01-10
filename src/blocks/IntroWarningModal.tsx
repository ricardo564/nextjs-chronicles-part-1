"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/Modal";
import {
  saveItemOnLocalStorage,
  getItemFromLocalStorage,
} from "@/utils/localStorage";
import { ANALYTICS_LOCAL_STORAGE_NAME } from "@/static/analyticsLocalStorageName";

export default function IntroWarningModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const userHasChosenToNotSeeAgain =
      getItemFromLocalStorage("intro-warning-modal") === "true";

    if (!getItemFromLocalStorage(ANALYTICS_LOCAL_STORAGE_NAME)) {
      saveItemOnLocalStorage(ANALYTICS_LOCAL_STORAGE_NAME, "true");
    }

    setAnalyticsEnabled(
      getItemFromLocalStorage(ANALYTICS_LOCAL_STORAGE_NAME) === "true"
    );

    const timer = setTimeout(() => {
      if (userHasChosenToNotSeeAgain) {
        setIsOpen(false);
        saveItemOnLocalStorage("intro-warning-modal", "true");
        saveItemOnLocalStorage(
          ANALYTICS_LOCAL_STORAGE_NAME,
          analyticsEnabled.toString()
        );
      } else {
        setIsOpen(true);
        saveItemOnLocalStorage("intro-warning-modal", "false");
        saveItemOnLocalStorage(
          ANALYTICS_LOCAL_STORAGE_NAME,
          analyticsEnabled.toString()
        );
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [analyticsEnabled]);

  const handleCloseModal = () => {
    setIsOpen(false);
    saveItemOnLocalStorage("intro-warning-modal", "true");
    saveItemOnLocalStorage(
      ANALYTICS_LOCAL_STORAGE_NAME,
      analyticsEnabled.toString()
    );
  };

  if (!isMounted) return null;

  return (
    <Modal
      id="intro-warning-modal"
      title="Study Project - # 🪴 Breath Natural - NextJS Chronicles Part 1"
      isOpen={isOpen}
      onClose={handleCloseModal}
      className="max-w-2xl absolute inset-0 mx-auto"
    >
      <div className="space-y-6 p-2">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-lg shadow-md">
          <p className="text-white text-lg font-medium text-center">
            Welcome to my study project! 🚀
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 text-center leading-relaxed">
            This is a demonstration of my frontend development skills, focusing
            on modern web technologies and best practices.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/ricardo-camilo-frontend-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-blue-600 font-medium">
              Connect on LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/ricardo564"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-gray-700 font-medium">
              Check out my GitHub
            </span>
          </a>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-700">
            Permitir Ferramentas de Análise
          </span>
          <button
            onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${analyticsEnabled ? "bg-purple-600" : "bg-gray-200"
              }`}
            role="switch"
            aria-checked={analyticsEnabled}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${analyticsEnabled ? "translate-x-6" : "translate-x-1"
                }`}
            />
          </button>
        </div>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-gray-500 text-center">
            Design credits:
            <a
              href="https://www.figma.com/@dsingr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 ml-1"
            >
              @dsingr
            </a>
          </p>
          <p className="text-sm text-gray-500 text-center mt-1">
            <a
              href="https://www.figma.com/community/file/1341057411255052611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700"
            >
              View original design
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}
