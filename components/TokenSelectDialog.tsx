import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const tokens = [
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      name: "Ethereum",
      symbol: "ETH",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
    {
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      name: "Binance Coin",
      symbol: "BNB",
    },
  ];

export default function TokenSelectDialog() {
  return (
    <Dialog>
      <DialogTrigger>ETH</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
          <DialogDescription>
            <div className="max-h-[450px] overflow-y-scroll">
              {tokens.map((token: any, id: number) => (
                <div
                  className="flex hover:bg-gray-200 hover:cursor-pointer p-2"
                  key={id}
                >
                  <div>
                    <Image
                      src={token.logo}
                      width="40"
                      height="40"
                      alt={token.name}
                    />
                  </div>
                  <div className="flex-grow pl-4">
                    <div className="text-md">{token.name}</div>
                    <div className="text-xs">{token.symbol}</div>
                  </div>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
