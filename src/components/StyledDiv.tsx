import React from "react";
import { TextNode } from "../types/types";

export const StyledDiv = ({ node }: { node: TextNode }) => {
  return (
    <div
      style={{
        fontWeight: node.bold ? "bold" : "normal",
        fontSize: node.italicize ? "italic" : "normal",
        textDecoration: node.underline ? "underline" : "normal",
      }}
    >
      {node.text}
    </div>
  );
};
