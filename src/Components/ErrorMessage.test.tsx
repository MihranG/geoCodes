import { render, screen } from '../utils/testUtils';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', async function () {
  it('should match snapshot',()=>{
    render(<ErrorMessage />)
    expect(screen).toMatchSnapshot()
  });
  it('should render the the default text', () => {
    render(<ErrorMessage />);
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });
  it('should render the the passed text if provided', () => {
    const testErrorMessage = 'test Error Message';
    render(<ErrorMessage message={testErrorMessage} />);
    expect(screen.getByText(testErrorMessage)).toBeInTheDocument();
  });
});
