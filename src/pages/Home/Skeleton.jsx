import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={491}
    viewBox="0 0 280 491"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="264" rx="0" ry="0" width="280" height="54" />
    <rect x="0" y="338" rx="0" ry="0" width="280" height="88" />
    <rect x="140" y="446" rx="27" ry="27" width="138" height="45" />
    <rect x="0" y="445" rx="0" ry="0" width="92" height="45" />
    <circle cx="140" cy="130" r="130" />
  </ContentLoader>
);

export default Skeleton;
