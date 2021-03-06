import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from "react";

const LogOut = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

export default function Topbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Labeddit</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            onChange={handleSearch}
            value={search}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div onClick={LogOut} className="topbarLinks">
          <span>Logout</span>
          <ExitToAppIcon />
          
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.png" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
