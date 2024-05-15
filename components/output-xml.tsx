"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStateContext } from "@/contexts/state-context";
import TreeDiagram from "./tree-diagram";
import XmlDropdownTree from "./xml-dropdown-tree";

export default function OutputXML() {
  const { xmlContent, outputContent } = useStateContext();

  return (
    <Tabs defaultValue="output1" className="w-full">
      <TabsList>
        <TabsTrigger value="output1">Output 1</TabsTrigger>
        <TabsTrigger value="output2">Output 2</TabsTrigger>
      </TabsList>
      <TabsContent value="output1">
        {!xmlContent ? (
          <p>No XML content</p>
        ) : (
          <TreeDiagram data={outputContent} />
        )}
      </TabsContent>
      <TabsContent value="output2">
        {!xmlContent ? (
          <p>No XML content</p>
        ) : (
          <XmlDropdownTree xml={outputContent} />
        )}
      </TabsContent>
    </Tabs>
  );
}
