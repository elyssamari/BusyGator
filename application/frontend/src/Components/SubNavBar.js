import {useContext} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import DataContext from '../DataContext/DataContext';
const SubNavBar = () => {


    const categories = useContext(DataContext)?.categories;
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        {categories.map((data,index) => <Button key={index} variant="secondary" className="subNavBarButton">{data.name}</Button>)}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default SubNavBar;

