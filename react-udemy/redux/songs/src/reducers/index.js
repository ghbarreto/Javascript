const songsReducer = () => {
  return [
    { title: "Living on a prayer", duration: "4:05" },
    { title: "Bohemian Rhapsody", duration: "5:06" },
    { title: "Psychosocial", duration: "4:30" },
    { title: "Numb", duration: "2:54" },
    { title: "Promise to the moon", duration: "3:05" },
    { title: "Summer", duration: "6:04" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
