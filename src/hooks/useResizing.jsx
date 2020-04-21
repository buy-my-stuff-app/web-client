import { useEffect, useCallback, useState, useRef } from "react";
import throttle from "lodash.throttle";

const noop = () => {};

const useResizing = (time, onUnmount = noop) => {
  const [resizing, setResizing] = useState(false);
  const timerId = useRef(null);

  const onResize = useCallback(() => {
    if (!resizing) {
      setResizing(true);
    }
    clearTimeout(timerId.current);
    timerId.current = setTimeout(function() {
      setResizing(false);
    }, time);
  }, [resizing, time]);

  useEffect(() => {
    window.addEventListener("resize", throttle(onResize, time));
    return window.removeEventListener("resize", onUnmount);
  }, [onResize, onUnmount, time]);

  return resizing;
};

export default useResizing;
