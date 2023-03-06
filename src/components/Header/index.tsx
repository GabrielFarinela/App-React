import { useState } from "react";
import { HeaderContainer } from "./styles";

export function Header() {
    const [user, setUser] = useState<{
        avatar_url: string;
        company: string;
        name: string;
    }>()
    return (<HeaderContainer>
        
    </HeaderContainer>)
}