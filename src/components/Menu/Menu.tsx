
import React, { CSSProperties, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const styles: { [x: string]: CSSProperties } = {
    listGroupItem: {
        cursor: 'pointer'
    }
};

export interface MenuOption {
    id: string;
    text: string;
    action: (e: any) => void;
}

export interface MenuProps {
    options: Array<MenuOption>
}

const Menu: React.FC<MenuProps> = (props) => {
    const defaultActive = props.options[0] || null;
    const [active, setActive] = useState(defaultActive);
    const onClick = (option: MenuOption) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setActive(option);
        option.action(e);
    }
    return (
        <ListGroup>
            {props.options.map((option, idx) => {
                return (
                    <ListGroupItem
                        onClick={onClick(option)}
                        active={active.id === option.id}
                        style={styles.listGroupItem}>
                        {option.text}
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
}

Menu.defaultProps = {
    options: []
}

export default Menu;
