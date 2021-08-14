import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
const pagename="About"
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{pagename}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pagename}</IonTitle>
          </IonToolbar>
        </IonHeader>
Harrison Reid hreid1 test
      </IonContent>
      <br></br>
    </IonPage>
  );
};

export default Tab1;
