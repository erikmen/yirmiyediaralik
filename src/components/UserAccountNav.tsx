"use client"

import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "./ui/button"

const UserAccountNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className="overflow-visible">
            <Button variant="ghost" size="sm" className="relative">MyAccont</Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserAccountNav