import React from "react"
import { ThumbsDownIcon, ThumbsUpIcon } from "./Icons"

export const icons = {
  thumbsUp: ThumbsUpIcon,
  thumbsDown: ThumbsDownIcon,
}

interface IconProps {
  name: keyof typeof icons
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, className = "" }) => {
  const Component = icons[name]
  return Component ? <Component className={className} /> : null
}

export default Icon
