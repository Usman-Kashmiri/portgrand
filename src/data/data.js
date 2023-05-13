
import home from '../components/images/homeicon.png'
import bell from '../components/images/bellicon.png'
import message from '../components/images/inboxicon.png'
import planner from '../components/images/plannericon.png'
import content from '../components/images/contenticon.png'
import ads from '../components/images/adsicon.png'
import insights from '../components/images/insighticon.png'
import search from '../components/images/search.png'
import setting from '../components/images/settingicon.png'
import alltools from '../components/images/doublelines.png'

export const sideNav = [
    {
        name: "home",
        path:"/",
        icon:<i className="fa fa-home"></i>
    },
    {
        name: "notification",
        path:"/notification",
        icon:<img className='navlinkicon' width={20}  src={bell}/>
    },
    {
        name: "inbox",
        path:"/inbox",
        icon:<img className='navlinkicon' width={20}  src={message}/>
    },
    {
        name: "planner",
        
        path:"/planner",
        icon:<img className='navlinkicon' width={20}  src={planner}/>
    },
    {
        name: "content",
        path:"/content",
        icon:<img className='navlinkicon' width={20}  src={content}/>
    },
    {
        name: "ads",
        path:"/ads",
        icon:<img className='navlinkicon' width={20}  src={ads}/>
    },
    {
        name: "insights",
        path:"/insights",
        icon:<img className='navlinkicon' width={20}  src={insights}/>
    },
    {
        name: "all tools",
        path:"/alltools",
        icon:<img className='navlinkicon' width={20}  src={alltools}/>
    },
   
    {
        name: "search",
        path:"/search",
        icon:<img className='navlinkicon' width={20}  src={search}/>
    },
    {
        name: "setting",
        path:"/setting",
        icon:<img className='navlinkicon' width={20}  src={setting}/>
    },
]

export const selectOptions = [
    {
        value: "113949522673653",
        label: "Port Grand (113949522673653)"
    },
    {
        value: "113949522673652",
        label: "Port Grand (113949522673652)"
    },
    {
        value: "113949522673651",
        label: "Port Grand (113949522673651)"
    },
    {
        value: "113949522673650",
        label: "Port Grand (113949522673650)"
    },
]