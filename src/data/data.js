
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
import contentool from '../components/images/contentools.png'
import gamingtools from '../components/images/gamingtool.png'
import inboxtool from '../components/images/inboxtool.png'
import plannertool from '../components/images/plannertool.png'
import musictool from '../components/images/soundtool.png'
import musicedit from '../components/images/soundedit.png'
import settingstool from '../components/images/settingstool.png'
import filemanager from '../components/images/filemanager2.png'
import billing from '../components/images/billing.png'
import paylot from '../components/images/paylot.png'
import businessapps from '../components/images/businessapps.png'
import accountquality from '../components/images/accountquality.png'
import ali_pay from '../assets/images/paymentmethod/ali_pay.jpg'
import apple_pay from '../assets/images/paymentmethod/apple_pay.jpg'
import debit from '../assets/images/paymentmethod/debit.jpg'
import master_card from '../assets/images/paymentmethod/master_card.jpg'
import paypal_payment from '../assets/images/paymentmethod/paypal_payment.jpg'
import visa_card from '../assets/images/paymentmethod/visa_card.jpg'

// import settingstool from '../components/images/settingstool.png'

export const sideNav = [
    {
        name: "home",
        path:"/",
        icon:<img className='navlinkicon' width={20}  src={home}/>
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

// all tool data //

export const engageAudience =[
    {
        heading:'Content',
        details:'Schedule, publish and manage post and stories, create draft post and access Facebook photos',
        image: <img  width={25} height={25} src={contentool}/>,
    },
    {
        heading:'Game streaming',
        details:'Dashboard for gaming creators to reach your audience and advance to the nect level',
        image: <img  width={25} height={25} src={gamingtools}/>,
    },
    {
        heading:'Inbox',
        details:'Respond to messages and comments, set up automated responses and assign conversations.',
        image: <img  width={25} height={25} src={inboxtool}/>,
    },
    {
        heading:'Planner',
        details:'Plan your marketing calender by creating schedule and managing your content.',
        image: <img  width={25} height={25} src={plannertool}/>,
    },
    {
        heading:<p className='headingimg'>Sound Collection <img width={25}  src={musicedit}/> </p>,
        details:'Enhance your videos or audio content with rights-cleared music or sound effects and use it on bussiness, creator or personal accounts across Meta.',
        image: <img  width={25} height={25} src={musictool}/>,
    },
]

// all tool data two//

export const manage =[
    {
        heading:<div className='headingimg'><span>Account Quality</span> <img width={25}  src={musicedit}/> </div>,
        details:'Manage ads that don,t comply with our Advertising Policies and request another review.',
        image: <img  width={25} height={25} src={accountquality}/>,
    },
    {
        heading:<div className='headingimg'><span>Billing</span><img width={25}  src={musicedit}/> </div>,
        details:' View payment history for your ad accounts. ',
        image: <img  width={25} height={25} src={billing}/>,
    },
    {
        heading:'Business apps',
        details:' Connect your facebook page with apps that will help you manage and grow your business. ',
        image: <img  width={25} height={25} src={businessapps}/>,
    },
    {
        heading:'File Manager',
        details:'Mange and organise image and video files for use in posts and stories.',
        image: <img  width={25} height={25} src={filemanager}/>,
    },
    {
        heading:<div className='headingimg'><span>Page settings</span> <img width={25}   src={musicedit}/> </div>,
        details:'Manage Page roles, Instagram and WhatApp connections and more info associated with your page.',
        image: <img  width={25} height={25} src={settingstool}/>,
    },
    {
        heading:'Payouts',
        details:'See earnings, balances and payment activity, and manage payment methods.',
        image: <img  width={25} height={25} src={paylot}/>,
    },
    {
        heading:'Settings',
        // details:'Plan your marketing calender by creating schedule and managing your content.',
        image: <img  width={25} height={25} src={settingstool}/>,
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

export const selectOptions2 = [
    {
        value: "transactions",
        label: "Transactions"
    },
    {
        value: "option 2",
        label: "option 2"
    },
    {
        value: "option 3",
        label: "option 3"
    },
    {
        value: "option 4",
        label: "option 4"
    },
]
 
export const paymentmethods = [
    {
      image: ali_pay,
      label: 'Ali Pay',
      value: '1',
      description: 'Ali Pay',
    },
  
    {
      image: debit,
      label: 'Debit Card',
      value: '2',
      description: 'Debit Card',
    },
    {
      image: apple_pay,
      label: 'Apple Pay',
      value: '3',
      description: 'Apple Pay',
    },
    {
      image: master_card,
      label: 'Master Card',
      value: '4',
      description: 'Master Card',
    },
    {
      image: paypal_payment,
      label: 'Paypal Payment',
      value: '5',
      description: 'Paypal Payment',
    },
    {
      image: visa_card,
      label: 'Visa Card',
      value: '6',
      description: 'Visa Card',
    },
  ];

export const Contentdrops = [
    {
        name:'Posts and reels',
        path:'/postandreel'
    },
    {
        name:'Stories',
        path:'/stories'
    },
    {
        name:'A/Btests',
        path:'/abtests'
    },
    {
        name:'Feed and grid',
        path:'/feedandgrid'
    },
    {
        name:'Mentions and tags',
        path:'/mentionsandtags'
    },
    {
        name:'Clips',
        path:'/Clips'
    },
    {
        name:'Unibelled content',
        path:'/Unibelledcontent'
    },
     
]


const contenttablesdetailsone = [
   
    'Few beautiful clicks of Port Grand, Do visi...',
    'Celebrating the hard work and dedicatio...',
    
   
]
