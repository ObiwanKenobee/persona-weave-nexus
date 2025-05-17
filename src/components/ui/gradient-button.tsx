
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface GradientButtonProps extends ButtonProps {
  gradientDegrees?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradientDegrees = "bg-gradient-to-r", gradientFrom = "from-violet-500", gradientTo = "to-purple-600", ...props }, ref) => {
    return (
      <Button
        className={cn(
          gradientDegrees,
          gradientFrom,
          gradientTo,
          "shadow-md hover:shadow-lg transition-shadow duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
