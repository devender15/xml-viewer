"use client";

import { createContext, useContext, useState, useEffect } from "react";
import XMLParser from "react-xml-parser";
import { useToast } from "@/components/ui/use-toast";

export const StateContext = createContext<any>(null);

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [xmlContent, setXmlContent] = useState<string>("");
  const [outputContent, setOutputContent] = useState<string>("");

  const { toast } = useToast();

  const isValidXml = (xmlString: string) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const parseErrors = xmlDoc.getElementsByTagName("parsererror");
    return parseErrors.length === 0;
  };

  useEffect(() => {

    if (!xmlContent) return;

    if (!isValidXml(xmlContent)) {
      toast({
        title: "Invalid XML content",
        description: "Please provide a valid XML content to parse.",
        variant: "destructive",
      });
      return;
    }

    const xml = new XMLParser().parseFromString(xmlContent);

    setOutputContent(xml);
  }, [xmlContent]);

  return (
    <StateContext.Provider
      value={{ xmlContent, setXmlContent, outputContent, setOutputContent }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}
