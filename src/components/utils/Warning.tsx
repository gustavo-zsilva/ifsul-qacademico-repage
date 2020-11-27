import { Container } from '../../styles/components/utils/Warning';

export interface WarningProps {
    isRed?: boolean;
    message: string;
}

const Warning = ({ isRed = true, message }: WarningProps) => {
    return (
        <Container isRed={isRed}>
            <h2>{message}</h2>
        </Container>
    );
}

export default Warning;