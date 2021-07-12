import React from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ItemSlidingExample: React.FC = () => (
<IonList>
  {/* Sliding item with text options on both sides */}
  
  {/* Multi-line sliding item with icon options on both sides */}
  <IonItemSliding id="item100">
    <IonItem href="#">
      <IonLabel>
        <h2>Tomatoes</h2>
        <p>Price: $8</p>
        <p>per lb</p>
        <p>Country of Origin: Italy</p>
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
  <IonItem href="#">
      <IonLabel>
        <h2>Oranges</h2>
        <p>Price: $10</p>
        <p>Country of Origin: Spain</p>
      </IonLabel>
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
  <IonItem href="#">
      <IonLabel>
        <h2>Tangerines</h2>
        <p>Price: $7</p>
        <p>Country of Origin: Bolivia</p>
      </IonLabel>
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

  
</IonList>
);
export default ItemSlidingExample;