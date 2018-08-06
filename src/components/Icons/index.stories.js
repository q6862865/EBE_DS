import React from 'react';
import { storiesOf } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';
import Icon, { AllIcons } from './index';
import Box from '../Box/index';

import { ICONS } from './iconConst';


const reqThemes = require.context('../../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys()
    .forEach((filename) => {
        themesList.push(reqThemes(filename));
    });

storiesOf('✔ Icons', module)
    .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
    // .add('with type', withInfo('with type')(() => (
    //     <Box>
    //         <Icon className="iconTest" icon="Account_Outlined"/>
    //         <Icon className="iconTest" icon="Account_Outlined"/>
    //         <Icon className="iconTest" icon="SocialMedia_FB">
    //             Facebook
    //         </Icon>
    //         <Icon className="iconTest" size={40} icon="SocialMedia_FB">
    //             Facebook
    //         </Icon>
    //     </Box>
    // )))
    .add('All icons', withInfo('All icons')(() => (
        <Box>
            <Icon className="iconTest" icon="Account_Outlined"> Account_Outlined </Icon>
            <Icon className="iconTest" icon="Account-Info"> Account-Info </Icon>
            <Icon className="iconTest" icon="Account"> Account </Icon>
            <Icon className="iconTest" icon="Activewear"> Activewear </Icon>
            <Icon className="iconTest" icon="Add_circle_Outlined"> Add_circle_Outlined </Icon>
            <Icon className="iconTest" icon="Add_circle"> Add_circle </Icon>
            <Icon className="iconTest" icon="Add-Photo"> Add-Photo </Icon>
            <Icon className="iconTest" icon="Add"> Add </Icon>
            <Icon className="iconTest" icon="Address-Book"> Address-Book </Icon>
            <Icon className="iconTest" icon="Bag_Outlined"> Bag_Outlined </Icon>
            <Icon className="iconTest" icon="Bag"> Bag </Icon>
            <Icon className="iconTest" icon="Balance"> Balance </Icon>
            <Icon className="iconTest" icon="Bras"> Bras </Icon>
            <Icon className="iconTest" icon="Call"> Call </Icon>
            <Icon className="iconTest" icon="Cancel_Circle"> Cancel_Circle </Icon>
            <Icon className="iconTest" icon="Chat"> Chat </Icon>
            <Icon className="iconTest" icon="Check_box_Outlined"> Check_box_Outlined </Icon>
            <Icon className="iconTest" icon="Check_box"> Check_box </Icon>
            <Icon className="iconTest" icon="Check_Circle"> Check_Circle </Icon>
            <Icon className="iconTest" icon="Check_Small"> Check_Small </Icon>
            <Icon className="iconTest" icon="Check"> Check </Icon>
            <Icon className="iconTest" icon="Chevron-Left"> Chevron-Left </Icon>
            <Icon className="iconTest" icon="Chevron-Right"> Chevron-Right </Icon>
            <Icon className="iconTest" icon="Close_Small"> Close_Small </Icon>
            <Icon className="iconTest" icon="Close"> Close </Icon>
            <Icon className="iconTest" icon="Clothing"> Clothing </Icon>
            <Icon className="iconTest" icon="Delete"> Delete </Icon>
            <Icon className="iconTest" icon="Drop-Down"> Drop-Down </Icon>
            <Icon className="iconTest" icon="Drop-Up"> Drop-Up </Icon>
            <Icon className="iconTest" icon="Email"> Email </Icon>
            <Icon className="iconTest" icon="Expand-Less"> Expand-Less </Icon>
            <Icon className="iconTest" icon="Expand-More"> Expand-More </Icon>
            <Icon className="iconTest" icon="Filter"> Filter </Icon>
            <Icon className="iconTest" icon="Giftcard"> Giftcard </Icon>
            <Icon className="iconTest" icon="Help_Outlined"> Help_Outlined </Icon>
            <Icon className="iconTest" icon="Help"> Help </Icon>
            <Icon className="iconTest" icon="History"> History </Icon>
            <Icon className="iconTest" icon="Home_Outlined"> Home_Outlined </Icon>
            <Icon className="iconTest" icon="Home"> Home </Icon>
            <Icon className="iconTest" icon="Info_Outlined"> Info_Outlined </Icon>
            <Icon className="iconTest" icon="Info"> Info </Icon>
            <Icon className="iconTest" icon="Location_Outlined"> Location_Outlined </Icon>
            <Icon className="iconTest" icon="Location"> Location </Icon>
            <Icon className="iconTest" icon="Menu"> Menu </Icon>
            <Icon className="iconTest" icon="MenunSearch"> MenunSearch </Icon>
            <Icon className="iconTest" icon="More_horiz-Copy"> More_horiz-Copy </Icon>
            <Icon className="iconTest" icon="More_ver-Copy"> More_ver-Copy </Icon>
            <Icon className="iconTest" icon="Navigate-Next"> Navigate-Next </Icon>
            <Icon className="iconTest" icon="Navigate-Previous"> Navigate-Previous </Icon>
            <Icon className="iconTest" icon="NewArrivals"> NewArrivals </Icon>
            <Icon className="iconTest" icon="Notification_Outlined"> Notification_Outlined </Icon>
            <Icon className="iconTest" icon="Notification"> Notification </Icon>
            <Icon className="iconTest" icon="Offer"> Offer </Icon>
            <Icon className="iconTest" icon="Panties"> Panties </Icon>
            <Icon className="iconTest" icon="Payment"> Payment </Icon>
            <Icon className="iconTest" icon="Radio_button_checked"> Radio_button_checked </Icon>
            <Icon className="iconTest" icon="Radio_button_unchecked"> Radio_button_unchecked </Icon>
            <Icon className="iconTest" icon="Receipt"> Receipt </Icon>
            <Icon className="iconTest" icon="Remove_Circle_Outlined"> Remove_Circle_Outlined </Icon>
            <Icon className="iconTest" icon="Remove_Circle"> Remove_Circle </Icon>
            <Icon className="iconTest" icon="Remove"> Remove </Icon>
            <Icon className="iconTest" icon="Review"> Review </Icon>
            <Icon className="iconTest" icon="Search"> Search </Icon>
            <Icon className="iconTest" icon="Security_Outlined"> Security_Outlined </Icon>
            <Icon className="iconTest" icon="Security"> Security </Icon>
            <Icon className="iconTest" icon="Settings"> Settings </Icon>
            <Icon className="iconTest" icon="Shipping-Fast"> Shipping-Fast </Icon>
            <Icon className="iconTest" icon="Shipping"> Shipping </Icon>
            <Icon className="iconTest" icon="Sleep"> Sleep </Icon>
            <Icon className="iconTest" icon="SocialMedia_FB"> SocialMedia_FB </Icon>
            <Icon className="iconTest" icon="SocialMedia_IG"> SocialMedia_IG </Icon>
            <Icon className="iconTest" icon="SocialMedia_Pinterest"> SocialMedia_Pinterest </Icon>
            <Icon className="iconTest" icon="SocialMedia_Twitter"> SocialMedia_Twitter </Icon>
            <Icon className="iconTest" icon="SocialMedia_Wechat"> SocialMedia_Wechat </Icon>
            <Icon className="iconTest" icon="SocialMedia_Weibo"> SocialMedia_Weibo </Icon>
            <Icon className="iconTest" icon="SocialMedia_YouTube"> SocialMedia_YouTube </Icon>
            <Icon className="iconTest" icon="Star_Outlined"> Star_Outlined </Icon>
            <Icon className="iconTest" icon="Star-Half"> Star-Half </Icon>
            <Icon className="iconTest" icon="Star"> Star </Icon>
            <Icon className="iconTest" icon="Subscription"> Subscription </Icon>
            <Icon className="iconTest" icon="Thumb-Down"> Thumb-Down </Icon>
            <Icon className="iconTest" icon="Thumb-Up"> Thumb-Up </Icon>
            <Icon className="iconTest" icon="View_list_2"> View_list_2 </Icon>
            <Icon className="iconTest" icon="View_Module"> View_Module </Icon>
            <Icon className="iconTest" icon="Visibility-Off"> Visibility-Off </Icon>
            <Icon className="iconTest" icon="Visibility-On"> Visibility-On </Icon>
            <Icon className="iconTest" icon="Warning"> Warning </Icon>
            <Icon className="iconTest" icon="Wishlist_Outlined"> Wishlist_Outlined </Icon>
            <Icon className="iconTest" icon="Wishlist"> Wishlist </Icon>
            <Icon className="iconTest" icon="Zoom_in"> Zoom_in </Icon>
            <Icon className="iconTest" icon="Zoom_out"> Zoom_out </Icon>
        </Box>
    )))
    .add('All icons map', withInfo('with text')(() => (
        <Box>
            <AllIcons size={48} />
        </Box>
    )));
