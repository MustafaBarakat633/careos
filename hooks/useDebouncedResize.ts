import { useEffect, useCallback } from "react";

export function useDebouncedResize(callback: () => void, delay = 200) {
  const debouncedCallback = useCallback(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        debouncedCallback();
      }, delay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [debouncedCallback, delay]);
}
