import './SideBar.css';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    ChatBubbleOutline,
    Report,
} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { NavLink } from 'react-router';

export default function SideBar({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => {
                        console.log('overrrrrr');
                        onClose();
                    }}
                ></div>
            )}
            <div className={`sideBar ${isOpen ? 'active' : ''}`}>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">DashBoard</h3>
                    <ul className="sideBarList">
                        <NavLink to="/">
                            <LineStyle className="sideBarIcon" />
                            <div className="item-before">Home</div>
                        </NavLink>

                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>

                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <NavLink to="/users">
                            {/* <li className="sideBarListItem"> */}
                            <PersonIcon className="sideBarIcon" />
                            <div className="item-before">Users</div>
                            {/* </li> */}
                        </NavLink>

                        <NavLink to="/newUser">
                            <Storefront className="sideBarIcon" />
                            <div>New Users</div>
                        </NavLink>

                        <NavLink to="/products">
                            <AttachMoney className="sideBarIcon" />
                            <div className="item-before">Products</div>
                        </NavLink>

                        <li className="sideBarListItem">
                            <BarChart className="sideBarIcon" />
                            Transactions
                        </li>
                        <li className="sideBarListItem">
                            <Report className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <MailOutline className="sideBarIcon" />
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutline className="sideBarIcon" />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <MessageIcon className="sideBarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <LineStyle className="sideBarIcon" />
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
