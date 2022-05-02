import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useWasViewed = () => {
  const [wasViewed, setWasViewed] = useState(false);
  const { ref: setRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setWasViewed(true);
    }
  }, [inView]);

  return { setRef, wasViewed };
};
