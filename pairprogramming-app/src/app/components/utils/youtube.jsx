export const getYouTubeId = (urlOrId) => {
  if (!urlOrId) return "";
  if (urlOrId.length === 11) return urlOrId;

  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = urlOrId.match(regExp);
  return match && match[7].length === 11 ? match[7] : urlOrId;
};

export const getYouTubeEmbedUrl = (youtubeId, autoplay = true) => {
  const videoId = getYouTubeId(youtubeId);
  return `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&rel=0`;
};
