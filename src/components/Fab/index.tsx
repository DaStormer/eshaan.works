import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { forwardRef, Ref } from "react";

export const Fab = forwardRef(
  (props: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    return <IconButton {...props} ref={ref} bg="bg.100" borderRadius="full" />;
  }
);
