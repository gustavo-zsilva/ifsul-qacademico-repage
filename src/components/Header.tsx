import { Container } from '../styles/components/Header';

import Image from 'next/image';

const Header = () => (
    <Container>
        <div>
            <Image src="/assets/graduation-cap.svg" width="40px" height="40px" alt="Q-Acadêmico Logo" />
        </div>
        <div>
            <Image src="/assets/chat.svg" width="32px" height="32px" alt="Chat Image" />
            <Image src="/assets/help.svg" width="32px" height="32px" alt="Help Image" />
            <Image src="/assets/user.svg" width="32px" height="32px" alt="User Photo" />
        </div>
    </Container>
)

export default Header;