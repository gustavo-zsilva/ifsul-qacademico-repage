import { Container } from '../styles/components/Card';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    iconSrc: string;
    title: string;
    url: string;
    children: any;
}

const Card = ({ iconSrc, title, url, children }: CardProps) => {
    
    return (
        <Link href={url} >
              <Container>
                <div>
                    <Image src={iconSrc} width="50px" height="50px" alt="Card Icon" />
                </div>
                <div>
                    <p>{title}</p>
                    <span>{children}</span>
                </div>
            </Container>
        </Link>
    )
}

export default Card;