import React from "react";
import xiv from "../../api/axios";

// Get current character class
export const getActiveClassData = details => {
  const detail = details.ActiveClassJob;
  for (let i in detail) {
    return detail.UnlockedState.Name;
  }
  return console.log("unknown");
};

// Get current character armor equipped
export const getArmorEquipped = async details => {
  const response = await xiv.get(`/`);

  console.log(details);
};

// Get server List
export const serverList = (props = []) => {
  console.log(props);
  return props;
};
