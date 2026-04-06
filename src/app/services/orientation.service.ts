import { Injectable } from '@angular/core';

import { ScreenOrientation } from '@capacitor/screen-orientation';

import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class OrientationService {

  rotateIOS: string | undefined
  platform: string | undefined

  constructor() {

    Device.getInfo().then(logDeviceInfo => {
      console.log(logDeviceInfo);
      this.platform = logDeviceInfo.platform
    })

  }

  rotateOrientation(orientationInput: Boolean) {
    if (orientationInput) {
      if (this.platform === 'ios') {
        this.rotateIOS = "transform: rotate(180deg);"
      } else {
        try { ScreenOrientation.lock({ orientation: 'portrait-secondary' }) } catch (e) { console.warn('ScreenOrientation not available'); }
      }
    } else {
      if (this.platform === 'ios') {
        this.rotateIOS = "transform: rotate(0deg);"
      } else {
        try { ScreenOrientation.lock({ orientation: 'portrait-primary' }) } catch (e) { console.warn('ScreenOrientation not available'); }
      }
    }
  }

  async rotateOrientationToogle() {
    console.log("rotateOrientationToogle")

    if (this.platform === 'ios') {
      if (this.rotateIOS === "transform: rotate(180deg);") {
        this.rotateIOS = "transform: rotate(0deg);"
      } else {
        this.rotateIOS = "transform: rotate(180deg);"
      }
    } else {
      try {
        console.log("window.screen.orientation.type", window.screen.orientation.type)
        var actualOrientation = window.screen.orientation.type
        const actualOrientationPlugin = await ScreenOrientation.orientation()
        console.log("actualOrientationPlugin", actualOrientationPlugin)
    
        if (actualOrientation == 'portrait-primary') {
          ScreenOrientation.lock({ orientation: 'portrait-secondary' })
        } else {
          ScreenOrientation.lock({ orientation: 'portrait-primary' })
        }
      } catch (e) {
        console.warn('ScreenOrientation not available in this environment');
      }
    }
  
  }


  rotateOrientationOLD() {
    // parte con plugin cordova
    console.log("window.screen.orientation.type", window.screen.orientation.type)

    // parte ibrida
    try {
      if (window.screen.orientation.type == "portrait-primary") {
        ScreenOrientation.lock({ orientation: 'portrait-secondary' })
      } else {
        ScreenOrientation.lock({ orientation: 'portrait-primary' })
      }
    } catch (e) {
      console.warn('ScreenOrientation not available in this environment');
    }

  }
}

