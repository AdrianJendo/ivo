export type DataNode = {
  type: string;
  title?: string;

  // styling
  bold?: boolean;
  italicize?: boolean;
  underline?: boolean;

  children: Object[];
};

export type TextNode = {
  text: string;

  bold?: boolean;
  italicize?: boolean;
  underline?: boolean;
};
//
// type TextLeafNode = {
//   bold?: boolean;
//   underline?: boolean;
//   italicize?: boolean; // Note: does not show up in sample json
//   text: string;
// };
//
export type MentionNode = {
  color: string;
  type: "mention";
  title: string;
  variableType: string;
  id: string;
  value: string;
  children: TextNode[];
};

export type Marks = {
  bold: boolean;
  italicize: boolean;
  underline: boolean;
};
