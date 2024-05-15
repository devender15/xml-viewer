import XmlContainer from "@/components/xml-container";
import InputXML from "@/components/input-xml";
import OutputXML from "@/components/output-xml";

export default function Home() {
  return (
    <main className="flex overflow-hidden items-start justify-between px-12 py-8 bg-gray-100 gap-x-8">
      <aside className="space-y-4 basis-1/2">
        <h1 className="text-2xl font-semibold">Input XML</h1>
        <XmlContainer>
          <InputXML />
        </XmlContainer>
      </aside>

      <aside className="space-y-4 basis-1/2">
        <h1 className="text-2xl font-semibold">Output XML</h1>
        <XmlContainer>
          <OutputXML />
        </XmlContainer>
      </aside>
    </main>
  );
}
