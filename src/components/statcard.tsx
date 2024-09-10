import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUpIcon } from "lucide-react"

interface ProfileProps {
  title: string;
  subtitle: string;
  stat: string;
}


export default function Stat({title, subtitle, stat} : ProfileProps) {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stat}</div>
        <p className="text-xs text-muted-foreground pt-1">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  )
}