import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';


const  Topbar = () => {

    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>
                    Labebook
                </span>
            </div>

            <div className='topbarCenter'>
                <div className='searchBar'>
                    <Search className='searchIcon' />
                    <input className='searchInput' type='text' placeholder='Search friends or posts' />
                </div>
            </div>

            <div className='topbarRight'>
                <span className='topbarLink'>Homepage Timeline</span>
            

            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                    <Person />
                    <span className='topbarIconBadge'>1</span>
                </div>

                <div className='topbarIconItem'>
                    <Chat />
                    <span className='topbarIconBadge'>2</span>
                </div>

                <div className='topbarIconItem'>
                    <Notifications />
                    <span className='topbarIconBadge'>3</span>
                </div>
            </div>
        
        
            <img src='../../assets/profile1.jpg' alt="" className='topbarImg' />

            </div>
        </div>

  
    );
}

export default Topbar;