import React from "react";
import { useEffect, useRef } from "react"; // Import useEffect and useRef
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

export default function AlertConfirmation({
  title,
  description,
  cancelButtonText = "Cancel",
  confirmButtonText = "Confirm",
  onConfirm,
  children,
}) {

  const cancelRef = useRef(null);

  useEffect(() => {
    if (cancelRef.current) {
      cancelRef.current.focus();
    }
  }, []);

  return (
    <AlertDialog leastDestructiveRef={cancelRef}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-zinc-800 border border-zinc-800">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white/90">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-500 text-sm">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-900 border border-gray-900 text-white/90" ref={cancelRef}>
            {cancelButtonText}
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive  hover:bg-destructive/90"
            onClick={() => {
              onConfirm();
              // window.location.reload()
            }}
          >
            {confirmButtonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
