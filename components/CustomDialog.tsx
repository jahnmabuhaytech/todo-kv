import React from "react";

//shadcn ui
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogProp = {
  ButtonClass: string;
  ButtonName: string;
  Title: string;
  children: React.ReactNode;
};

export default function CustomDialog({
  ButtonClass,
  ButtonName,
  Title,
  children,
}: DialogProp) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={ButtonClass}>{ButtonName}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{Title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
