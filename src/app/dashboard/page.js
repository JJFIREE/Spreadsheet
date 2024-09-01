/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SjWV1oDBnXq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Component() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <nav className="flex flex-col w-64 p-4 bg-[#1f2937] text-white">
        <Button className="mb-4 bg-[#18A44C] text-[#ffffff] transition-transform duration-300 hover:scale-105 hover:bg-[#0a1423]">
          + Create New File
        </Button>
        <Input placeholder="Search files..." className="mb-4 transition-transform duration-300 hover:scale-105" />
        <div className="mt-auto">
          <Select>
            <SelectTrigger>
              <Avatar className="transition-transform duration-300 hover:scale-105">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="profile" className="transition-transform duration-300 hover:scale-105">
                Profile
              </SelectItem>
              <SelectItem value="settings" className="transition-transform duration-300 hover:scale-105">
                Settings
              </SelectItem>
              <SelectItem value="logout" className="transition-transform duration-300 hover:scale-105">
                Logout
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
      <main className="mt-4 flex-1 p-4 bg-[#f5f5f5]">
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          {Array(8)
            .fill()
            .map((_, index) => (
              <Card key={index} className="transition-transform duration-300 hover:scale-105">
                <CardContent>
                  <h3 className="text-lg font-semibold">Spreadsheet.xlsx</h3>
                  <p className="text-sm text-muted-foreground">1.5 MB</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-105">
                      <DownloadIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-105">
                      <MaximizeIcon className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="transition-transform duration-300 hover:scale-105"
                        >
                          <ExpandIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <ViewIcon className="w-4 h-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FilePenIcon className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </main>
    </div>
  )
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function ExpandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
}


function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function MaximizeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}


function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}