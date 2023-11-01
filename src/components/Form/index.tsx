import { SetStateAction, useState } from 'react';
import { shortenLink } from '../../services';
import { Button } from '../Button';
import { Input } from '../Input';
import { Link } from '../LinkList';

type FormProps = {
  linksList: Link[];
  setLinksList: React.Dispatch<SetStateAction<Link[]>>;
};

export const Form = ({ linksList, setLinksList }: FormProps) => {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!link) {
      setError('Please add a link');
      return;
    }

    const response = await shortenLink(link);

    if (!response.ok) {
      setError(response.error);
      return;
    }

    const { original_link: original, full_short_link: shortened } =
      response.result;

    const updatedLinkList = [...linksList, { original, shortened }];

    localStorage.setItem('links', JSON.stringify(updatedLinkList));
    setLinksList(updatedLinkList);
    setLink('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError('');
    }
    setLink(event.target.value);
  };

  return (
    <form
      className="max-w-container w-full mx-auto bg-darkPurple rounded-[10px] bg-form bg-no-repeat -mt-20"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-6 px-16 py-12">
        <Input
          type="text"
          placeholder="Shorten a link here..."
          value={link}
          onChange={handleChange}
          errorMessage={error}
        />
        <Button buttonText="Shorten It!" type="submit" variant="primary" />
      </div>
    </form>
  );
};
