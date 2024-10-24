import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cx } from "class-variance-authority";
import empowerLogo from "@/assets/empower.svg";
import { Link } from "@tanstack/react-router";

export const TopNav = () => {
  return (
    <nav
      className={cx(
        "flex justify-between items-center px-8 h-nav bg-background",
        "sticky top-0 z-50 border-b"
      )}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={empowerLogo} alt="Empower Logo" className="h-8 w-auto" />
        </Link>
      </div>

      {/* Avatar */}
      <div>
        <Button variant="ghost">
          <Avatar>
            <AvatarImage
              src="https://github.com/callumflack.png"
              alt="@callumflack"
            />
            <AvatarFallback>CF</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </nav>
  );
};
