import { Link } from "@tanstack/react-router";

export const PageNav = ({
  heading,
  children,
}: {
  heading: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="sticky top-nav z-50 bg-background pt-7">
      <div className="container max-w-[960px] space-y-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">{heading}</h1>
        </div>
        <div className="flex justify-between h-10">
          <div className="flex gap-4 h-full">
            <Link
              to="/"
              className="font-semibold [&.active]:text-foreground [&.active]:hover:text-foreground text-muted-foreground/80"
            >
              Overview
            </Link>{" "}
            <Link
              to="/spend-trackers"
              className="font-semibold [&.active]:text-foreground [&.active]:hover:text-foreground text-muted-foreground/80"
            >
              Trackers
            </Link>
          </div>
          {children}
        </div>
      </div>
      {/* border-muted-foreground/50 */}
      <hr className="" />
    </div>
  );
};
