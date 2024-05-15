import React, { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

interface XmlDropdownTreeProps {
  xml: string;
}

const XmlDropdownTree: React.FC<XmlDropdownTreeProps> = ({ xml }) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (nodeName: any) => {
    setExpandedNodes((prevExpandedNodes) => {
      const newExpandedNodes = new Set(prevExpandedNodes);
      if (newExpandedNodes.has(nodeName)) {
        newExpandedNodes.delete(nodeName);
      } else {
        newExpandedNodes.add(nodeName);
      }
      return newExpandedNodes;
    });
  };

  const renderNode = (node: any, path: string) => {
    const nodeName = path + node.name;
    const isExpanded = expandedNodes.has(nodeName);

    const handleToggle = () => {
      toggleNode(nodeName);
    };

    return (
      <div key={nodeName} className="ml-4 space-y-2">
        <span
          onClick={handleToggle}
          className="cursor-pointer flex items-center gap-x-2"
        >
          {isExpanded ? <FaCaretDown /> : <FaCaretRight />}
          {node.name.replace("xacml3:", "")}
        </span>
        <div className="ml-4 text-gray-500">
          {" "}
          _prefix: {node.name.split(":")[0]}
        </div>
        {node.value && (
          <div className="ml-4 text-gray-500">_value: {node.value}</div>
        )}
        {node.children && isExpanded && (
          <div className="ml-[20px]">
            {node.children.map((child: any, index: any) => (
              <XmlDropdownTree key={index} xml={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return <div>{renderNode(xml, "")}</div>;
};

export default XmlDropdownTree;
