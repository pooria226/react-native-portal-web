/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {register, addPortal} from '@ionic/portals-react-native';

register(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZDYzNTJjZi00NTlmLTRhMGEtYTRhMy1mY2FkODQxNDVhMjMiLCJqdGkiOiJiUEI2ZldpWFVURE9MdlQ2cHExMDFqTFRFRUxDS0lDVmphYlVaM2NWZnlnIn0.QMdcsJhcKmS-Rl-nrXgmS__51889V4b4Z-itQUIkXImZEoSAMZNhNSWMxF-_7plUZU_Ahed1rJ4z5wxSYZiIj2J-TKJrisdOt1ekkvgzAN3h5_nHpyasYzBCK_goH5srSqXTu69wcN7-3qbHXlnK15k4l4BmKGJuT1y0YWTVzFfP4gLIzWEiRDWKxpYr0MYioRTpSwMsbgbes3mRzSYYjKIr-HEFA-r8ox-1bm9CNPY2AzIsuxEj5-FuTAjSOWPELECcX2cOdkwNzpDf9a8fbCtbjMHzqTzTQ9kz2_z98YpNoRfoKnLxAhezD96Um_AV9AFVu1KTXorgn_VadTLuKw',
);

const shopwebappPortal = {
  // A unique name to reference later
  name: 'shopwebapp',
  // This is the location of your web bundle relative to the asset directory in Android and Bundle.main in iOS
  // This will default to the name of the portal
  startDir: 'portals/shopwebapp',
  // Any initial state to be provided to a Portal if needed
  initialContext: {
    greeting: 'Hello, world!',
  },
};

addPortal(shopwebappPortal);

AppRegistry.registerComponent(appName, () => App);
