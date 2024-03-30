"use client";

import { FiMoon, FiSettings, FiSun } from "react-icons/fi";
import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";

type ThemeOption = "light" | "dark" | "system";

export const ThemePicker: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // You can use localStorage for storing the theme preference
    const savedTheme = localStorage.getItem("theme") as ThemeOption | null;
    const initialTheme = savedTheme ? savedTheme : "system";
    setTheme(initialTheme);
  }, []);

  const onThemeChange = (newTheme: ThemeOption) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setShowDropdown(false);
  };

  const getIcon = (theme: ThemeOption) => {
    switch (theme) {
      case "light":
        return <FiSun />;
      case "dark":
        return <FiMoon />;
      case "system":
      default:
        return <FiSettings />;
    }
  };

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div>{getIcon(theme as ThemeOption)}</div>
        <label htmlFor="theme-select">Theme</label>
      </div>
      {showDropdown && (
        <div className="absolute mt-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-md z-10">
          {["light", "dark", "system"].map((option) => (
            <div
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-500 cursor-pointer"
              onClick={() => onThemeChange(option as ThemeOption)}
            >
              {getIcon(option as ThemeOption)}
              <span className="ml-2">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

