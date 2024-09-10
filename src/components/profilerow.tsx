import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileProps {
  name: string;
  imageUrl: string;
  isOnline: boolean;
}

export default function ProfileRow({ name, imageUrl, isOnline }: ProfileProps = { name: "John Doe", imageUrl: "/placeholder.svg?height=40&width=40", isOnline: true }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm">
      <Avatar className="h-12 w-12">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name}</span>
        <div className="flex items-center space-x-1">
          <div className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs text-muted-foreground">{isOnline ? 'Online' : 'Offline'}</span>
        </div>
      </div>
    </div>
  )
}