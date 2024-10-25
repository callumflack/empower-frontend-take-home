import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function SpendTrackerDialog({
  buttonNode,
  children,
  open,
  onOpenChange,
}: {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{buttonNode}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
