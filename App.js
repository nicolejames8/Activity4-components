import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Modal from './Pages/Modal'; 
import Topbar from './Pages/Topbar'; 
import Bottombar from './Pages/Bottombar'; 
import Avatarimage from './Pages/Avatar';
import Badge from './Pages/Badge';
import Banner from './Pages/Banner';
import BottomNavigation from './Pages/Bottomnavigation';
import Button from './Pages/Button';
import Card from './Pages/Card';
import Checkbox from './Pages/Checkbox';
import Chip from './Pages/Chip';
import Divider from './Pages/Divider';
import Menu from './Pages/Menu';
import Searchbar from './Pages/Searchbar';
import Sectionlist from './Pages/Sectionlist';
import Tooltip from './Pages/Tooltip';
import Datatable from './Pages/Datatable';
import Dialog from './Pages/Dialog';
import Segmentedbuttons from './Pages/Segmentedbuttons';
import Radiobutton from './Pages/Radiobutton';
import Alert from './Pages/Alert'
import PB from './Pages/ProgressBar'
import Switch from './Pages/Switch'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Alert" component={Alert} /> 
        <Drawer.Screen name="Modal" component={Modal} /> 
        <Drawer.Screen name="TopBar" component={Topbar} /> 
        <Drawer.Screen name="BottomBar" component={Bottombar} /> 
        <Drawer.Screen name="Avatar" component={Avatarimage} />  
        <Drawer.Screen name="Badge" component={Badge} /> 
        <Drawer.Screen name="Banner" component={Banner} /> 
        <Drawer.Screen name="BottomNavigation" component={BottomNavigation} /> 
        <Drawer.Screen name="Button" component={Button} /> 
        <Drawer.Screen name="Card" component={Card} /> 
        <Drawer.Screen name="Checkbox" component={Checkbox} /> 
        <Drawer.Screen name="Chip" component={Chip} />
        <Drawer.Screen name="Divider" component={Divider} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Searchbar" component={Searchbar} />
        <Drawer.Screen name="Sectionlist" component={Sectionlist} />
        <Drawer.Screen name="Tooltip" component={Tooltip} />
        <Drawer.Screen name="Data Table" component={Datatable} />
        <Drawer.Screen name="Dialog" component={Dialog} />
        <Drawer.Screen name="SegmentedButton" component={Segmentedbuttons} />
        <Drawer.Screen name="RadioButton" component={Radiobutton} />
        <Drawer.Screen name="Progress Bar" component={PB} />
        <Drawer.Screen name="Switch" component={Switch} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}