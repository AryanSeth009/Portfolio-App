"use client";

export default function StackSection({
  children,
  id,
  className = "",
  pin = true,
  overflowHidden = true,
  scrollable = false,
}) {
  return (
    <section
      id={id}
      data-stack-pin={pin ? "true" : "false"}
      className={`stack-section min-h-screen w-full relative px-4 md:px-10 ${
        overflowHidden ? "overflow-hidden" : ""
      } ${scrollable ? "h-screen overflow-y-auto overscroll-contain" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
