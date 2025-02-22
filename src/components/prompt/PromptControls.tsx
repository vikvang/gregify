import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PromptControlsProps {
  selectedModel: string;
  selectedAgent: string;
  onModelChange: (value: string) => void;
  onAgentChange: (value: string) => void;
}

export const PromptControls = ({
  selectedModel,
  selectedAgent,
  onModelChange,
  onAgentChange,
}: PromptControlsProps) => {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          Select Model
        </label>
        <Select onValueChange={onModelChange} value={selectedModel}>
          <SelectTrigger className="w-full bg-[#2C2C30] text-white border-zinc-700 rounded-xl hover:bg-[#3C3C40] transition-colors">
            <SelectValue placeholder="Choose a model" />
          </SelectTrigger>
          <SelectContent className="bg-[#2C2C30] border-zinc-700 text-white">
            <SelectItem
              value="gpt4"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              GPT-4
            </SelectItem>
            <SelectItem
              value="claude"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              Claude-3.5
            </SelectItem>
            <SelectItem
              value="gemini"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              Gemini Pro
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          Select Agent
        </label>
        <Select onValueChange={onAgentChange} value={selectedAgent}>
          <SelectTrigger className="w-full bg-[#2C2C30] text-white border-zinc-700 rounded-xl hover:bg-[#3C3C40] transition-colors">
            <SelectValue placeholder="Choose an agent" />
          </SelectTrigger>
          <SelectContent className="bg-[#2C2C30] border-zinc-700 text-white">
            <SelectItem
              value="webdev"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              Web Developer
            </SelectItem>
            <SelectItem
              value="syseng"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              System Engineer
            </SelectItem>
            <SelectItem
              value="analyst"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              Data Analyst
            </SelectItem>
            <SelectItem
              value="designer"
              className="text-white focus:text-white focus:bg-[#3C3C40]"
            >
              UX Designer
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
