import { Button } from './Button';

import { GenreResponseProps } from '../App';
import { useEffect } from 'react';
import { api } from '../services/api';

interface sideProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId : Function;
  setGenres: Function;

}

export function SideBar({genres, selectedGenreId, setGenres , setSelectedGenreId}: sideProps) { 

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  
  }

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  );
}