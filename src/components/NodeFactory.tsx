import React from "react";
import { DataNode, Marks, MentionNode, TextNode } from "../types/types";
import { StyledDiv } from "./StyledDiv";

export const NodeFactory = ({
  node,
  marks,
}: {
  node: DataNode;
  marks: Marks;
}) => {
  if (node.bold) {
    marks.bold = true;
  }
  if (node.italicize) {
    marks.italicize = true;
  }
  if (node.underline) {
    marks.underline = true;
  }
  switch (node.type) {
    case "block":
      return (
        <>
          {node.children.map((child) => (
            <NodeFactory node={child as DataNode} marks={marks} />
          ))}
        </>
      );
    case "h1":
      return (
        <h1>
          {node.children.map((child) => (
            <StyledDiv node={child as TextNode} />
          ))}
        </h1>
      );
    case "h4":
      return (
        <h4>
          {node.children.map((child) => (
            <StyledDiv node={child as TextNode} />
          ))}
        </h4>
      );
    case "p":
    case "lic":
      return (
        <p>
          {node.children.map((child) => {
            if ("text" in child) {
              return <StyledDiv node={child as TextNode} />;
            }
            return <NodeFactory node={child as DataNode} marks={marks} />;
          })}
        </p>
      );
    case "mention":
      const mentionNode = node as MentionNode;
      return (
        <input
          name={mentionNode.title}
          style={{
            border: "none",
            background: mentionNode.color,
          }}
          value={mentionNode.value}
          id={mentionNode.id}
        />
      );
    case "clause":
      return (
        <ol className="continuous">
          <li>
            <NodeFactory node={node.children[0] as DataNode} marks={marks} />
          </li>
          {node.children.slice(1).map((child) => (
            <NodeFactory node={child as DataNode} marks={marks} />
          ))}
        </ol>
      );
    case "ul":
      return (
        <div className="Wrapper2">
          <ul>
            {node.children.map((child) => (
              <NodeFactory node={child as DataNode} marks={marks} />
            ))}
          </ul>
        </div>
      );
    case "li":
      return (
        <li>
          {node.children.map((child) => (
            <NodeFactory node={child as DataNode} marks={marks} />
          ))}
        </li>
      );
    default:
      return <>Error</>;
  }
};
