import './TopBar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function TopBar({ onMenuClick }) {
    return (
        <>
            <div className="topbar">
                <div className="topLeft">
                    <span className="logo">CMS Project</span>
                    <span className="x-menu" onClick={onMenuClick}>
                        =
                    </span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topAvatar">
                        <img src="../public/images/11.png" alt="react" />
                    </div>
                </div>
            </div>
        </>
    );
}
