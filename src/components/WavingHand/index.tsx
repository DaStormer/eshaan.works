import { MotionText } from "@/utils/motion";

export const WavingHand = () => {
  return (
    <MotionText
      as="span"
      display="inline-block"
      animate={{ rotate: [0, 20, 0] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      👋
    </MotionText>
  );
};
