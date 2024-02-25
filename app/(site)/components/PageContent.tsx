'use client'

import SongItem from '@/components/SongItem'
import useOnPlay from '@/hooks/useOnPlay'
import { Song } from '@/types'

interface PageContentProps {
  songs: Song[]
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs)

  if (!songs || songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available</div>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          data={song}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  )
}

export default PageContent
