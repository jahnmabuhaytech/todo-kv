"use client";
import React, { useState } from "react";

//shadcn ui
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="flex flex-row gap-5 items-center justify-center px-9">
      <Skeleton className="w-[1rem] p-4" />
      <CardHeader>
        <Skeleton className="w-[5rem] p-4" />
        <Skeleton className="w-[9rem] p-4" />
      </CardHeader>
      <Skeleton className="w-[4rem] p-4" />
      <Skeleton className="w-[4rem] p-4" />
    </Card>
  );
}
