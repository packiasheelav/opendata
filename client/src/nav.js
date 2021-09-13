import ListIcon from "@material-ui/icons/List";
import HomeIcon from '@material-ui/icons/Home';

const sections=[
        {
            label:'Sensor Lists', to:'/lists', exact: true, icon: ListIcon
        },
        { label: "Home", to: "/", exact: true,icon:  HomeIcon},
    ]
   
export default sections;