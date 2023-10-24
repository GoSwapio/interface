import TokenSelectDialog from "@/components/TokenSelectDialog";
import { Button } from "@/components/ui/button";
import { ArrowBigDownDashIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="py-32 h-screen w-screen">
      <div className="container">
        <div className="flex items-center justify-center max-w-xl mx-auto">
          <div className="relative bg-gray-300 dark:bg-gray-800 border-[1px] border-gray-400 w-full rounded-2xl shadow-xl p-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
              <Button size="icon" className="border-4 border-gray-800"><ArrowBigDownDashIcon /></Button>
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl w-full p-4 group group-focus:border-1 group-focus:border-gray-800">
              <div className="text-xs dark:text-gray-300">You pay</div>
              <div className="flex items-center">
                <div className="flex-grow">
                  <input
                    className="w-full py-4 text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    spellCheck="false"
                    autoCorrect="false"
                    placeholder="0"
                  />
                </div>
                <div>
                  <TokenSelectDialog />
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-2xl w-full p-4 group group-focus:border-1 group-focus:border-gray-800">
              <div className="text-xs dark:text-gray-300">You receive</div>
              <div className="flex items-center">
                <div className="flex-grow">
                  <input
                    className="w-full py-4 text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    spellCheck="false"
                    autoCorrect="false"
                    placeholder="0"
                  />
                </div>
                <div>
                  <TokenSelectDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
