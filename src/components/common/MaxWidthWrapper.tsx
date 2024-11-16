import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full md:px-20 mx-auto max-w-[1440px] px-6 lg:px-12;",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;