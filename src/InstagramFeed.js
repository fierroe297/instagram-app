import React, { useState, useEffect } from "react";
import Instagram from "instagram-web-api";

const InstagramFeed = ({ username }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const instagram = new Instagram();
    instagram
      .getPhotosByUsername({ username })
      .then((data) => setImages(data.edge_owner_to_timeline_media.edges))
      .catch(console.error);
  }, [username]);

  return (
    <div>
      {images.map(({ node }) => (
        <img key={node.id} src={node.thumbnail_src} alt={node.accessibility_caption} />
      ))}
    </div>
  );
};

export default InstagramFeed;
