import { useRef, useEffect } from "react";

const OutsideClickEffect = (ref: any, action: any, style: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
};

function OutsideClickListener(props: any) {
  const wrapperRef = useRef(null);
  OutsideClickEffect(wrapperRef, props.action, props.style);

  return (
    <div style={props.style} ref={wrapperRef}>
      {props.children}
    </div>
  );
}

export default OutsideClickListener;
