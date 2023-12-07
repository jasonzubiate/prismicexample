import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

function Button({ className, ...restProps }: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-fit bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wide",
        className
      )}
      {...restProps}
    />
  );
}

export default Button;
