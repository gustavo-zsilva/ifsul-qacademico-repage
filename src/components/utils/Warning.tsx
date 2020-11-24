import { Container } from '../../styles/components/utils/Warning';

export interface WarningProps {
    isRed: boolean;
}

const Warning = ({ isRed = true }: WarningProps) => {
    return (
        <Container isRed>
            <h1>Hello World</h1>
        </Container>
    );
}

export default Warning;