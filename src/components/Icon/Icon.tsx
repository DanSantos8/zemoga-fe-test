import React from "react"
import { ThumbsDownIcon, ThumbsUpIcon } from "./Icons"

export const icons = {
  thumbsUp: ThumbsUpIcon,
  thumbsDown: ThumbsDownIcon,
}

interface IconProps {
  name: keyof typeof icons
  size?: number
}

const Icon: React.FC<IconProps> = ({ name, size = 16 }) => {
  const Component = icons[name]
  return Component ? <Component size={size} /> : null
}

export default Icon
