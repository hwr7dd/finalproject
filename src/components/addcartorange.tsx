import React from 'react';
import { IonList,IonButton, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

 const ItemSlidingExample: React.FC = () => (
<IonList>
  
  {/* Sliding item with icon start options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Start
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="warning">
        <IonButton color="warning">More</IonButton>
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="start" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
</IonList>
);
export default ItemSlidingExample;