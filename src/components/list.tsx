import React,{ useState } from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonNote,IonFab, IonFabButton, IonIcon } from '@ionic/react';
import Addcartedtom from './addcart'
import AddcartedOrange from './addcartorange'
import AddcartedTangerine from './addcartang'

import { heart, trash, star, add } from 'ionicons/icons';
import Addcartedorange from './addcartorange';

function listed() {
  return(
<IonList>
  {/* Sliding item with text options on both sides */}
  
  {/* Multi-line sliding item with icon options on both sides */}
  <IonItemSliding id="item100">
    <IonItem >
      <IonLabel>
        <h2>Tomatoes</h2>
        <p>Price: $8</p>
        <p>per lb</p>
        <p>Country of Origin: Italy</p>
        <IonFab vertical="center" horizontal="end" slot="fixed">
        <Addcartedtom></Addcartedtom>

        </IonFab>
      </IonLabel>
      <IonNote slot="end">
        1
      </IonNote>
    </IonItem>

    <IonItemOptions side="start">
      <IonItemOption>
        <IonIcon slot="icon-only" icon={heart} />
      </IonItemOption>
    </IonItemOptions>

    <IonItemOptions side="end">
      <IonItemOption color="danger">
        <IonIcon slot="icon-only" icon={trash} />
      </IonItemOption>
      <IonItemOption>
        <IonIcon slot="icon-only" icon={star} />
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
  <IonItemSliding id="item102">
  <IonItem >
      <IonLabel>
        <h2>Oranges</h2>
        <p>Price: $10</p>
        <p>Country of Origin: Spain</p>
      </IonLabel>
      <Addcartedorange></Addcartedorange>
      <IonNote slot="end">
        2
      </IonNote>
    </IonItem>

    <IonItemOptions side="start">
      <IonItemOption>
        <IonIcon slot="icon-only" icon={heart} />
      </IonItemOption>
    </IonItemOptions>

    <IonItemOptions side="end">
      <IonItemOption color="danger">
        <IonIcon slot="icon-only" icon={trash} />
      </IonItemOption>
      <IonItemOption>
        <IonIcon slot="icon-only" icon={star} />
      </IonItemOption>
    </IonItemOptions>
    </IonItemSliding>
    <IonItemSliding id="item101">
  <IonItem>
      <IonLabel>
        <h2>Tangerines</h2>
        <p>Price: $7</p>
        <p>Country of Origin: Bolivia</p>
      </IonLabel>
      <AddcartedTangerine></AddcartedTangerine>
      <IonNote slot="end">
        3
      </IonNote>
    </IonItem>

    <IonItemOptions side="start">
      <IonItemOption>
        <IonIcon slot="icon-only" icon={heart} />
      </IonItemOption>
    </IonItemOptions>

    <IonItemOptions side="end">
      <IonItemOption color="danger">
        <IonIcon slot="icon-only" icon={trash} />
      </IonItemOption>
      <IonItemOption>
        <IonIcon slot="icon-only" icon={star} />
      </IonItemOption>
    </IonItemOptions>
    </IonItemSliding>

  
</IonList>);
};
export default listed;