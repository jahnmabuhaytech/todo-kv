"use client";
import React, { useState } from "react";

//shadcn ui
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import CustomDialog from "@/components/CustomDialog";
import ChangeForm from "@/components/ChangeForm";
import { Label } from "@radix-ui/react-label";

type TodoCardProp = {
  Id: string;
  Description: string;
  Title: string;
};

export default function TodoCard({ Id, Title, Description }: TodoCardProp) {
  const [check, setCheck] = useState(false);
  const [checked, setChecked] = useState("no-underline");

  const handleChecked = (checked: boolean) => {
    if (check == false) {
      setCheck(true);
      setChecked("line-through");
      return;
    }
    setCheck(false);
    setChecked("no-underline");
  };

  return (
    <Card className="flex flex-row gap-5 items-center justify-center px-5">
      <Checkbox id={Id} checked={check} onCheckedChange={handleChecked} />
      <CardHeader>
        <CardTitle className={checked}>
          <Label htmlFor={Id}>{Title}</Label>
        </CardTitle>
        <CardDescription className={checked}>
          <Label htmlFor={Id}>{Description}</Label>
        </CardDescription>
      </CardHeader>
      <CustomDialog
        ButtonClass="bg-blue-500 hover:bg-blue-400"
        ButtonName="Change"
        Title={`Change Todo "${Title}"`}
      >
        <ChangeForm Id={Id} Title={Title} Description={Description} />
      </CustomDialog>
      <Button className="bg-red-600 hover:bg-red-500">Delete</Button>
    </Card>
  );
}
