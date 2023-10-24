import TokenSelectDialog from "@/components/TokenSelectDialog";
import { Button } from "@/components/ui/button";
import { ArrowBigDownDashIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="py-32 h-screen w-screen">
      <div className="container">
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          <div className="w-full border-[1px] border-gray-600 rounded-xl shadow-xl p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">Pools</h1>
                <div>
                    <Link href="/pools/add/eth"><Button><PlusIcon /> new position</Button></Link>
                </div>
            </div>
            <div className="text-center mt-20">
              <div className="mb-8">Your active liquidity positions will appear here.</div>
              <Button>connect a wallet</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
