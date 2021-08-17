import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  id:string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name,id }) => {
  return (
    <div className="container">
      <strong>{name}{id}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
