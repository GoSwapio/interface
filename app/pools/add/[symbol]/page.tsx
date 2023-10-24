import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page({ params }: { params: { symbol: string } }) {
  const symbol = params.symbol;

  console.log(symbol);

  return (
    <main className="py-32 h-screen w-screen">
      <div className="container">
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          <div className="w-full border-[1px] border-gray-600 rounded-xl shadow-xl p-8 space-y-8">
            <div className="flex items-center">
              <BackButton />
              <h1 className="text-4xl font-bold ml-4">Add liquidity</h1>
            </div>

            <div>
              <div>Select pair</div>
              <div className="flex gap-4 mt-4">
                <div className="w-1/2">
                  <Button className="w-full">ETH</Button>
                </div>
                <div className="w-1/2">
                  <Button className="w-full">SELECT A TOKEN</Button>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="w-1/4 border-[1px] border-gray-600 rounded-xl p-8">
                  <h4 className="text-sm">0.01%</h4>
                  <p className="text-xs">Best for very stable pairs</p>
                </div>
                <div className="w-1/4 border-[1px] border-gray-600 rounded-xl p-8">
                  <h4 className="text-sm">0.05%</h4>
                  <p className="text-xs">Best for stable pairs.</p>
                </div>
                <div className="w-1/4 border-[1px] border-gray-600 rounded-xl p-8">
                  <h4 className="text-sm">0.3%</h4>
                  <p className="text-xs">Best for most pairs</p>
                </div>
                <div className="w-1/4 border-[1px] border-gray-600 rounded-xl p-8">
                  <h4 className="text-sm">1%</h4>
                  <p className="text-xs">Best for exotic pairs.</p>
                </div>
              </div>
            </div>

            <div>
              <div>Select price range</div>
              <div className="mt-4 flex flex-col bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">
                <p className="text-xs">Low price</p>
                <div>
                  <input
                    className="w-full text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    spellCheck="false"
                    autoCorrect="false"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs">HELLO per ETH</p>
              </div>
              <div className="mt-4 flex flex-col bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">
                <p className="text-xs">High price</p>
                <div>
                  <input
                    className="w-full text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    spellCheck="false"
                    autoCorrect="false"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs">HELLO per ETH</p>
              </div>
            </div>

            <div>
              <div>Starting Price</div>
              <div className="mt-4 flex flex-col bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">
                <p className="text-xs">Price</p>
                <div>
                  <input
                    className="w-full text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    spellCheck="false"
                    autoCorrect="false"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs">HELLO per ETH</p>
              </div>
            </div>

            <div>
              <div>Deposit amounts</div>
              <div className="flex gap-4">
                <div className="mt-4 flex items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">
                  <div className="flex flex-col flex-grow">
                    <div>
                      <input
                        className="w-full text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                        type="text"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        spellCheck="false"
                        autoCorrect="false"
                        placeholder="0"
                      />
                    </div>
                    <p className="text-xs">$68,248.70</p>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <Button>ETH</Button>
                    </div>
                    <p className="text-xs">Balance: 0</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">
                  <div className="flex flex-col flex-grow">
                    <div>
                      <input
                        className="w-full text-4xl font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-300 outline-0 group placeholder:text-4xl"
                        type="text"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        spellCheck="false"
                        autoCorrect="false"
                        placeholder="0"
                      />
                    </div>
                    <p className="text-xs">$68,248.70</p>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <Button>HELLO</Button>
                    </div>
                    <p className="text-xs">Balance: 0</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button variant="destructive" size="lg" className="w-full">
                insufficient balance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
