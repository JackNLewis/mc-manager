import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUpIcon } from "lucide-react"

export default function Stat() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Players</CardTitle>
        <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">0</div>
        <p className="text-xs text-muted-foreground">
          Max 10 players
        </p>
      </CardContent>
    </Card>
  )
}