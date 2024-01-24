import { Container } from "@mui/material";


export default function ContainerPages({ children }) {

    const fullContainerStyle = {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '85px',
    };

    return (
        <Container style={{ ...fullContainerStyle }} maxWidth="false">
            {children}
        </Container>
    )
}