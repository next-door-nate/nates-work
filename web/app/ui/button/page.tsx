import ExperimentFrame from '../components/ExperimentFrame';
import Button from '../components/Button';

export default function Page() {
  return (
    <ExperimentFrame itemId={`0001`}>
      <Button type="animated">Button</Button>
    </ExperimentFrame>
  );
}
