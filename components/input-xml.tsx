"use client";

import { Textarea } from "@/components/ui/textarea";
import { useStateContext } from "@/contexts/state-context";

export default function InputXML() {
  
  const { xmlContent, setXmlContent, setOutputContent } = useStateContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOutputContent("");
    setXmlContent(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-between h-full">
      <Textarea
        placeholder="Enter XML content"
        className="h-full max-h-full min-h-full"
        value={xmlContent}
        onChange={handleInputChange}
      />
    </div>
  );
}
