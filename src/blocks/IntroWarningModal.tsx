"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/Modal";
import {
  saveItemOnLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from "@/utils/localStorage";
import { ANALYTICS_LOCAL_STORAGE_NAME } from "@/static/analyticsLocalStorageName";

interface IntroWarningModalProps {
  linkedinUsername: string;
  portfolioUrl: string;
}

export default function IntroWarningModal({ linkedinUsername, portfolioUrl }: IntroWarningModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const now = new Date();
  const oneHourAgo = new Date(now.setHours(now.getHours() - 1));

  const clearLocalStorageAfterOneHour = () => {
    const lastVisit = getItemFromLocalStorage("last-visit");

    if (lastVisit) {
      const lastVisitDate = new Date(lastVisit);

      if (lastVisitDate < oneHourAgo) {
        removeItemFromLocalStorage("last-visit");
        removeItemFromLocalStorage("intro-warning-modal");
        removeItemFromLocalStorage(ANALYTICS_LOCAL_STORAGE_NAME);
      }
    }
  };

  useEffect(() => {
    clearLocalStorageAfterOneHour();
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const userHasChosenToNotSeeAgain =
      getItemFromLocalStorage("intro-warning-modal") === "true";
    saveItemOnLocalStorage("last-visit", new Date().toISOString());

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
      title="Study Project - 🪴 Breath Natural - NextJS Chronicles Part 1"
      isOpen={isOpen}
      onClose={handleCloseModal}
      className="max-w-2xl absolute inset-0 mx-auto"
    >
      <div className="space-y-6 p-2">
        <div className="bg-gradient-to-r from-green-600 to-blue-500 p-4 rounded-lg shadow-md">
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
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-700 font-medium">
              Check out my portfolio
            </span>
          </a>

          <a
            href={`https://www.linkedin.com/in/${linkedinUsername}`}
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
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-700">
            Allow Analytics Tools
          </span>
          <button
            onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${analyticsEnabled ? "bg-green-600" : "bg-gray-200"
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
              className="text-green-600 hover:text-green-700 ml-1"
            >
              @dsingr
            </a>
          </p>
          <p className="text-sm text-gray-500 text-center mt-1">
            <a
              href="https://www.figma.com/community/file/1341057411255052611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              View original design
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}
