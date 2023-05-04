import { useState } from 'react';
import s from './index.module.scss';
import Image from "next/image";
import Glass from "../../assets/images/search-glass.png";



const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(query);
  };

  return (
    <form className={s.search_form} onSubmit={handleSubmit}>      
      <input
        type="text"
        id="search"
        placeholder={<Image src={Glass} alt="search glass" /> + 'Пошук'} 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Шукати</button>
    </form>
  );
};

export default function Home() {
  return (
    <div>
      <SearchForm />
    </div>
  );
}
