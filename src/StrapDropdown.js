import React, {Component} from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class StrapDropdown extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = (e) => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>버튼</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성</DropdownItem>
                    <a href="https://addotline.com/">애드도트라인</a>
                    <DropdownItem onClick={e => alert("Alert")}>Alert</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default StrapDropdown;