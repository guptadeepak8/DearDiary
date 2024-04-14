import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MarketPage() {
  return (
    <div>
      <Button  variant="outline" className="bg-green-300">
        <Link href='/home'>
          click me
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
