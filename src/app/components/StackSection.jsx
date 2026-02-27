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
      className={`stack-section md:min-h-screen w-full relative ${overflowHidden ? "md:overflow-hidden" : ""
        } ${scrollable ? "md:h-screen md:overflow-y-auto md:overscroll-contain" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
