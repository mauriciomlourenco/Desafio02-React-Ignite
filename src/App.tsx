import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}



export function App() {


const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
const [selectedGenreId, setSelectedGenreId] = useState(1);
const [genres, setGenres] = useState<GenreResponseProps[]>([]);

/*useEffect(() => {
  api.get<GenreResponseProps[]>('genres').then(response => {
    setGenres(response.data);
  });
}, []);



useEffect(() => {
  api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
    setMovies(response.data);
  });

  api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
    setSelectedGenre(response.data);
  })
}, [selectedGenreId]);
*/

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} genres={genres} setGenres={setGenres} />

      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId} />

      
    </div>
  )
}