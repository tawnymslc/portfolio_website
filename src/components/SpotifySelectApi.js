import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SpotifySelectApi = ({ selectedApi, onSelectApi }) => {
    const apiOptions = ['top-tracks', 'albums', /* add more APIs here */];
  
    return (
        <Dropdown isOpen={selectedApi !== null} toggle={() => onSelectApi(null)}>
            <DropdownToggle caret>
            {selectedApi ? `Selected API: ${selectedApi}` : 'Select API'}
            </DropdownToggle>
        <DropdownMenu>
        {apiOptions.map(api => (
            < DropdownItem key={api} onClick={() => onSelectApi(api)}>
                {api}
            </DropdownItem>
        ))}
        </DropdownMenu>
        </Dropdown>
      );
    };


  export default SpotifySelectApi;